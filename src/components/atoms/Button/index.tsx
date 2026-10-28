"use client";

import type { ReactNode } from "react";
import { StyledButton } from "./styles";

type Shared = {
  children: ReactNode;
  variant?: "solid" | "outline" | "inverse" | "ghost";
  ariaLabel?: string;
  className?: string;
};

export type ButtonProps = Shared &
  (
    | { href: string; onClick?: never }
    | { href?: never; onClick: () => void }
  );

export default function Button({
  href,
  onClick,
  children,
  variant = "solid",
  ariaLabel,
  className,
}: ButtonProps) {
  if (href) {
    return (
      <StyledButton href={href} variant={variant} aria-label={ariaLabel} className={className}>
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton
      as="button"
      type="button"
      variant={variant}
      aria-label={ariaLabel}
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}
