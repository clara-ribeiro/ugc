"use client";

import { useEffect, useState } from "react";
import NavLink from "@/components/atoms/NavLink";
import { landing, mailtoHref } from "@/content/landing";
import {
  Bar,
  Brand,
  Contact,
  CtaFull,
  CtaShort,
  Inner,
  Links,
  MenuButton,
  MenuLink,
  MenuPanel,
  Progress,
  SkipLink,
} from "./styles";

export default function SiteHeader() {
  const { brand } = landing.site;
  const {
    ariaLabel,
    items,
    ctaLabel,
    ctaShort,
    ctaAriaLabel,
    skipToContent,
    menuOpen,
    menuClose,
  } = landing.nav;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <Bar aria-label={ariaLabel} scrolled={scrolled} open={open}>
      <SkipLink href="#main">{skipToContent}</SkipLink>
      <Inner>
        <Brand href="/" aria-label={`${landing.person.name} home`}>
          {brand}
        </Brand>
        <Links>
          {items.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </Links>
        <MenuButton
          type="button"
          aria-expanded={open}
          aria-controls="mobile-primary-navigation"
          aria-label={open ? menuClose : menuOpen}
          onClick={() => setOpen((value) => !value)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
            {open ? (
              <path
                d="M4 4l10 10M14 4L4 14"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            ) : (
              <path
                d="M3 5h12M3 9h12M3 13h12"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            )}
          </svg>
        </MenuButton>
        <Contact href={mailtoHref()} aria-label={ctaAriaLabel}>
          <CtaShort>{ctaShort}</CtaShort>
          <CtaFull>{ctaLabel}</CtaFull>
        </Contact>
      </Inner>
      {open ? (
        <MenuPanel id="mobile-primary-navigation">
          {items.map((item) => (
            <MenuLink key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </MenuLink>
          ))}
        </MenuPanel>
      ) : null}
      <Progress style={{ transform: `scaleX(${progress})` }} aria-hidden />
    </Bar>
  );
}
