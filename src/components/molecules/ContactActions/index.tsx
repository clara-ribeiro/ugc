"use client";

import Button from "@/components/atoms/Button";
import { useContact } from "@/components/organisms/ContactModal/ContactContext";
import { landing } from "@/content/landing";
import { copyText } from "@/lib/clipboard";
import { CopyButton, EmailLabel, EmailSide, Row } from "./styles";

export type ContactActionsProps = {
  packageId?: string;
  primaryLabel?: string;
  primaryVariant?: "solid" | "outline" | "inverse";
  align?: "start" | "center";
  stack?: boolean;
  tone?: "inverse";
  onNavigate?: () => void;
};

export default function ContactActions({
  packageId,
  primaryLabel = landing.contact.primaryCta,
  primaryVariant = "solid",
  align = "start",
  stack = false,
  tone,
  onNavigate,
}: ContactActionsProps) {
  const { openContact, notifyCopied } = useContact();
  const copy = landing.contact;
  const email = landing.site.contactEmail;

  const onCopy = async () => {
    await copyText(email);
    notifyCopied();
  };

  return (
    <Row align={align} stack={stack}>
      <Button
        variant={primaryVariant}
        onClick={() => {
          onNavigate?.();
          openContact({ packageId });
        }}
      >
        {primaryLabel}
      </Button>
      <EmailSide>
        <EmailLabel type="button" tone={tone} onClick={onCopy}>
          {copy.emailCta}
        </EmailLabel>
        <CopyButton type="button" tone={tone} onClick={onCopy} aria-label={copy.copyAria}>
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
            <rect
              x="4.5"
              y="4.5"
              width="8"
              height="8"
              rx="1.2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <path
              d="M9.5 4.5V3.2A1.2 1.2 0 008.3 2H3.2A1.2 1.2 0 002 3.2v5.1A1.2 1.2 0 003.2 9.5H4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            />
          </svg>
        </CopyButton>
      </EmailSide>
    </Row>
  );
}
