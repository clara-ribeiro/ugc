import type { ReactNode } from "react";
import { Badge, Dot, Label } from "./styles";

export type StatusBadgeProps = {
  children: ReactNode;
};

export default function StatusBadge({ children }: StatusBadgeProps) {
  return (
    <Badge>
      <Dot aria-hidden />
      <Label>{children}</Label>
    </Badge>
  );
}
