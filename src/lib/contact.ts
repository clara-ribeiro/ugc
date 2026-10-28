import { landing, mailtoHref } from "@/content/landing";

export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  product: string;
  packageId: string;
  message: string;
  honeypot: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD = 500;
const MAX_MESSAGE = 4000;

export function emptyContactPayload(packageId = ""): ContactPayload {
  return {
    name: "",
    email: "",
    company: "",
    product: "",
    packageId,
    message: "",
    honeypot: "",
  };
}

export function packageLabelFor(packageId: string) {
  const match = landing.services.packages.find((item) => item.id === packageId);
  return match?.name ?? "";
}

export function briefMailtoHref(payload: ContactPayload) {
  const packageLabel = packageLabelFor(payload.packageId) || "Not sure yet";
  const body = [
    `Name: ${payload.name || "—"}`,
    `Email: ${payload.email || "—"}`,
    `Company: ${payload.company || "—"}`,
    `Product: ${payload.product || "—"}`,
    `Package: ${packageLabel}`,
    "",
    payload.message || "",
  ].join("\n");
  return mailtoHref("Brief: UGC video", body);
}

export function parseContactPayload(input: unknown) {
  if (!input || typeof input !== "object") {
    return { error: "Invalid payload." as const, payload: emptyContactPayload() };
  }
  const body = input as Record<string, unknown>;
  const payload: ContactPayload = {
    name: clean(body.name, MAX_FIELD),
    email: clean(body.email, MAX_FIELD).toLowerCase(),
    company: clean(body.company, MAX_FIELD),
    product: clean(body.product, MAX_FIELD),
    packageId: clean(body.packageId, 64),
    message: clean(body.message, MAX_MESSAGE),
    honeypot: typeof body.honeypot === "string" ? body.honeypot.trim() : "",
  };

  if (payload.honeypot) {
    return { spam: true as const, payload };
  }
  if (payload.name.length < 2) {
    return { error: "Name is required." as const, payload };
  }
  if (!EMAIL_PATTERN.test(payload.email)) {
    return { error: "A valid email is required." as const, payload };
  }
  if (payload.message.length < 8) {
    return { error: "A short brief is required." as const, payload };
  }
  if (payload.packageId && !packageLabelFor(payload.packageId)) {
    return { error: "Unknown package." as const, payload };
  }

  return { payload };
}

function clean(value: unknown, max: number) {
  if (typeof value !== "string") {
    return "";
  }
  return value.replace(/\s+/g, " ").trim().slice(0, max);
}
