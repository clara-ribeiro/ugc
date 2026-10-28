"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { Toast } from "@/components/molecules/ContactActions/styles";
import { landing } from "@/content/landing";

export type ContactPreset = {
  packageId?: string;
};

type ContactContextValue = {
  open: boolean;
  preset: ContactPreset;
  openContact: (preset?: ContactPreset) => void;
  closeContact: () => void;
  notifyCopied: () => void;
};

const ContactContext = createContext<ContactContextValue | null>(null);

export function ContactProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [preset, setPreset] = useState<ContactPreset>({});
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }
    const dismiss = () => setCopied(false);
    const id = window.setTimeout(() => {
      window.addEventListener("pointerdown", dismiss, true);
    }, 0);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener("pointerdown", dismiss, true);
    };
  }, [copied]);

  const value = useMemo<ContactContextValue>(
    () => ({
      open,
      preset,
      openContact: (next = {}) => {
        setPreset(next);
        setOpen(true);
      },
      closeContact: () => setOpen(false),
      notifyCopied: () => setCopied(true),
    }),
    [open, preset],
  );

  return (
    <ContactContext.Provider value={value}>
      {children}
      {copied
        ? createPortal(
            <Toast role="status" aria-live="polite">
              {landing.contact.copied}
            </Toast>,
            document.body,
          )
        : null}
    </ContactContext.Provider>
  );
}

export function useContact() {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContact must be used within ContactProvider");
  }
  return context;
}
