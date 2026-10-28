import { after, NextResponse } from "next/server";
import { landing } from "@/content/landing";
import { packageLabelFor, parseContactPayload, type ContactPayload } from "@/lib/contact";
import { clientIp, rateLimit } from "@/lib/rate-limit";

type SheetStatus = "ok" | "rejected" | "spam" | "email_failed" | "save_failed";

type SheetEvent = {
  status: SheetStatus;
  error?: string;
  notifyEmail?: boolean;
  receivedAt: string;
  name: string;
  email: string;
  company: string;
  product: string;
  packageId: string;
  packageLabel: string;
  message: string;
};

export async function POST(request: Request) {
  if (!rateLimit(`contact:${clientIp(request)}`)) {
    return NextResponse.json(
      { ok: false, error: landing.contact.error },
      { status: 429 },
    );
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const parsed = parseContactPayload(raw);
  if ("error" in parsed) {
    logSheetLater(eventFromPayload(parsed.payload, "rejected", parsed.error));
    return NextResponse.json({ ok: false, error: parsed.error }, { status: 400 });
  }
  if ("spam" in parsed) {
    logSheetLater(eventFromPayload(parsed.payload, "spam", "Honeypot filled."));
    return NextResponse.json({ ok: true });
  }

  const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const secret = process.env.CONTACT_WEBHOOK_SECRET;
  if (!webhook || !secret) {
    return NextResponse.json(
      { ok: false, error: "Contact form is not configured." },
      { status: 503 },
    );
  }

  const { payload } = parsed;
  const receivedAt = new Date().toISOString();
  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || landing.site.contactEmail;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const notifyEmail = !resendKey;
  const event = eventFromPayload(payload, "ok", undefined, receivedAt);

  const sheet = await postToSheet({ ...event, notifyEmail });
  if (!sheet.ok) {
    return NextResponse.json(
      { ok: false, error: "Could not save the brief." },
      { status: 502 },
    );
  }

  if (resendKey && fromEmail) {
    const mailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: payload.email,
        subject: `New brief from ${payload.name}`,
        text: [
          `Name: ${payload.name}`,
          `Email: ${payload.email}`,
          `Company: ${payload.company || "—"}`,
          `Product: ${payload.product || "—"}`,
          `Package: ${event.packageLabel || "—"}`,
          "",
          payload.message,
        ].join("\n"),
      }),
    });
    if (!mailResponse.ok) {
      const detail = await mailResponse.text().catch(() => "");
      logSheetLater({
        ...event,
        status: "email_failed",
        error: detail.slice(0, 500) || "Resend request failed.",
        notifyEmail: false,
      });
      return NextResponse.json(
        { ok: false, error: "Saved, but email failed." },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({ ok: true });
}

function eventFromPayload(
  payload: ContactPayload | undefined,
  status: SheetStatus,
  error?: string,
  receivedAt = new Date().toISOString(),
): SheetEvent {
  const safe = payload ?? {
    name: "",
    email: "",
    company: "",
    product: "",
    packageId: "",
    message: "",
    honeypot: "",
  };
  return {
    status,
    error,
    receivedAt,
    name: safe.name,
    email: safe.email,
    company: safe.company,
    product: safe.product,
    packageId: safe.packageId,
    packageLabel: packageLabelFor(safe.packageId),
    message: safe.message,
  };
}

function logSheetLater(event: SheetEvent) {
  after(async () => {
    await postToSheet({ ...event, notifyEmail: false });
  });
}

async function postToSheet(event: SheetEvent) {
  const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const secret = process.env.CONTACT_WEBHOOK_SECRET;
  if (!webhook || !secret) {
    return { ok: false as const, error: "unconfigured" };
  }

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret,
        notifyEmail: event.notifyEmail ?? false,
        receivedAt: event.receivedAt,
        name: event.name,
        email: event.email,
        company: event.company,
        product: event.product,
        packageId: event.packageId,
        packageLabel: event.packageLabel,
        message: event.message,
        status: event.status,
        error: event.error || "",
      }),
    });
    const sheetBody = (await response.json().catch(() => null)) as
      | { ok?: boolean; error?: string; status?: string }
      | null;
    if (!response.ok || sheetBody?.ok === false) {
      return { ok: false as const, error: sheetBody?.error || "sheet_failed" };
    }
    return { ok: true as const, status: sheetBody?.status };
  } catch (error) {
    return { ok: false as const, error: String(error) };
  }
}
