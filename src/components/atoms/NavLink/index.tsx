"use client";

import type { ReactNode } from "react";
import { StyledNavLink } from "./styles";

export type NavLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <StyledNavLink href={href} className={className}>
      {children}
    </StyledNavLink>
  );
}
