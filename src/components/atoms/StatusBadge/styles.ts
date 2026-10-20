import { pulseDot, styled } from "@/styles/stitches.config";

export const Badge = styled("div", {
  display: "inline-flex",
  alignItems: "center",
  gap: "$sm",
  backgroundColor: "$surface",
  border: "1px solid $border",
  borderRadius: "$full",
  px: "0.75rem",
  py: "$xs",
  boxShadow: "$sm",
  marginBottom: "$xl",
});

export const Dot = styled("span", {
  size: "0.5rem",
  borderRadius: "$full",
  backgroundColor: "$success",
  animation: `${pulseDot} 2s ease-out infinite`,
  "@motionReduce": {
    animation: "none",
  },
});

export const Label = styled("span", {
  fontFamily: "$mono",
  fontSize: "$caption",
  color: "$loContrast",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
});
