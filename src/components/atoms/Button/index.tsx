"use client";

"use client";

import type { ReactNode } from "react";
import { StyledButton } from "./styles";

export type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "inverse" | "ghost";
  ariaLabel?: string;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "solid",
  ariaLabel,
  className,
}: ButtonProps) {
  return (
    <StyledButton href={href} variant={variant} aria-label={ariaLabel} className={className}>
      {children}
    </StyledButton>
  );
}
