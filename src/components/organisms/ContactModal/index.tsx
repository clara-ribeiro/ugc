"use client";

import { useEffect, useId, useRef, useState, type FormEvent, type MouseEvent } from "react";
import { createPortal } from "react-dom";
import { landing } from "@/content/landing";
import { copyText } from "@/lib/clipboard";
import { briefMailtoHref, emptyContactPayload, type ContactPayload } from "@/lib/contact";
import { useContact } from "./ContactContext";
import {
  Area,
  Banner,
  BannerCopy,
  BannerText,
  BannerTitle,
  Close,
  Control,
  Field,
  Form,
  Lead,
  MailLink,
  Overlay,
  Panel,
  Result,
  ResultButton,
  ResultIcon,
  ResultTitle,
  Select,
  SendingHint,
  Spinner,
  Submit,
  Title,
} from "./styles";

export default function ContactModal() {
  const { open, preset, closeContact } = useContact();

  if (!open || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <ContactDialog packageId={preset.packageId ?? ""} onClose={closeContact} />,
    document.body,
  );
}

function ContactDialog({
  packageId,
  onClose,
}: {
  packageId: string;
  onClose: () => void;
}) {
  const { notifyCopied } = useContact();
  const copy = landing.contact;
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const doneRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(
    document.activeElement instanceof HTMLElement ? document.activeElement : null,
  );
  const [values, setValues] = useState(() => emptyContactPayload(packageId));
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const sending = status === "sending";

  useEffect(() => {
    const previous = document.body.style.overflow;
    const restore = lastFocus.current;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previous;
      restore?.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !sending) {
        event.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [onClose, sending]);

  useEffect(() => {
    if (status === "success") {
      doneRef.current?.focus();
    }
  }, [status]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const body = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (!response.ok || !body?.ok) {
        setStatus("error");
        setError(body?.error || copy.error);
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setError(copy.error);
    }
  };

  const setField = (key: keyof ContactPayload) => (event: { currentTarget: { value: string } }) => {
    const value = event.currentTarget.value;
    setValues((current) => ({ ...current, [key]: value }));
  };

  return (
    <Overlay
      role="presentation"
      onMouseDown={(event: MouseEvent<HTMLDivElement>) => {
        if (sending) {
          return;
        }
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <Panel
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-busy={sending}
        onMouseDown={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
      >
        <Close
          ref={closeRef}
          type="button"
          onClick={onClose}
          disabled={sending}
          aria-label={copy.closeAria}
        >
          {copy.close}
        </Close>
        {status === "success" ? (
          <Result role="status" aria-live="polite">
            <ResultIcon tone="success" aria-hidden>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path
                  d="M7 14.5l4.2 4.2L21 8.8"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ResultIcon>
            <ResultTitle id={titleId}>{copy.successTitle}</ResultTitle>
            <Lead>{copy.success}</Lead>
            <ResultButton ref={doneRef} type="button" onClick={onClose}>
              {copy.successClose}
            </ResultButton>
          </Result>
        ) : (
          <>
            <Title id={titleId}>{copy.modalTitle}</Title>
            <Lead>{copy.modalDescription}</Lead>
            <Form onSubmit={onSubmit}>
              {status === "error" ? (
                <Banner role="alert">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M10 6.2v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <circle cx="10" cy="13.8" r="0.9" fill="currentColor" />
                  </svg>
                  <BannerCopy>
                    <BannerTitle>{copy.errorTitle}</BannerTitle>
                    <BannerText>{error || copy.error}</BannerText>
                  </BannerCopy>
                </Banner>
              ) : null}
              <Field>
                {copy.nameLabel}
                <Control
                  name="name"
                  autoComplete="name"
                  required
                  disabled={sending}
                  value={values.name}
                  onChange={setField("name")}
                />
              </Field>
              <Field>
                {copy.emailLabel}
                <Control
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  disabled={sending}
                  value={values.email}
                  onChange={setField("email")}
                />
              </Field>
              <Field>
                {copy.companyLabel}
                <Control
                  name="company"
                  autoComplete="organization"
                  disabled={sending}
                  value={values.company}
                  onChange={setField("company")}
                />
              </Field>
              <Field>
                {copy.productLabel}
                <Control
                  name="product"
                  disabled={sending}
                  value={values.product}
                  onChange={setField("product")}
                />
              </Field>
              <Field span="all">
                {copy.packageLabel}
                <Select
                  name="packageId"
                  disabled={sending}
                  value={values.packageId}
                  onChange={setField("packageId")}
                >
                  <option value="">{copy.packagePlaceholder}</option>
                  {landing.services.packages.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field span="all">
                {copy.messageLabel}
                <Area
                  name="message"
                  required
                  disabled={sending}
                  placeholder={copy.messagePlaceholder}
                  value={values.message}
                  onChange={setField("message")}
                />
              </Field>
              <Field hidden>
                Company website
                <Control
                  name="honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  disabled={sending}
                  value={values.honeypot}
                  onChange={setField("honeypot")}
                />
              </Field>
              <Submit type="submit" disabled={sending}>
                {sending ? <Spinner aria-hidden /> : null}
                {sending ? copy.sending : status === "error" ? copy.errorRetry : copy.submit}
              </Submit>
              {status === "error" && !sending ? (
                <MailLink
                  href={briefMailtoHref(values)}
                  onClick={async (event: MouseEvent<HTMLAnchorElement>) => {
                    event.preventDefault();
                    await copyText(landing.site.contactEmail);
                    notifyCopied();
                    window.location.href = briefMailtoHref(values);
                  }}
                >
                  {copy.errorMailto}
                </MailLink>
              ) : null}
              {sending ? <SendingHint aria-live="polite">{copy.sendingHint}</SendingHint> : null}
            </Form>
          </>
        )}
      </Panel>
    </Overlay>
  );
}
