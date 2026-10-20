import type { ReactNode } from "react";
import { StyledSectionDescription } from "./styles";

export type SectionDescriptionProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionDescription({
  children,
  className,
}: SectionDescriptionProps) {
  return (
    <StyledSectionDescription className={className}>
      {children}
    </StyledSectionDescription>
  );
}
