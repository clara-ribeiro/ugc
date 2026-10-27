import type { ReactNode, Ref } from "react";
import { Earpiece, HomeBar, Phone, SideButton } from "./styles";

export type PhoneFrameProps = {
  children: ReactNode;
  frameRef?: Ref<HTMLDivElement>;
  size?: "grid" | "modal" | "fill";
  lifted?: boolean;
  glowing?: boolean;
};

export default function PhoneFrame({
  children,
  frameRef,
  size = "grid",
  lifted = false,
  glowing = false,
}: PhoneFrameProps) {
  return (
    <Phone ref={frameRef} size={size} lifted={lifted} glowing={glowing}>
      <Earpiece aria-hidden />
      <SideButton pos="volUp" aria-hidden />
      <SideButton pos="volDown" aria-hidden />
      <SideButton pos="power" aria-hidden />
      {children}
      <HomeBar aria-hidden />
    </Phone>
  );
}
