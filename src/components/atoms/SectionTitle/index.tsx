import type { ReactNode } from "react";
import { StyledSectionTitle } from "./styles";

export type SectionTitleProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export default function SectionTitle({ id, children, className }: SectionTitleProps) {
  return (
    <StyledSectionTitle id={id} className={className}>
      {children}
    </StyledSectionTitle>
  );
}
