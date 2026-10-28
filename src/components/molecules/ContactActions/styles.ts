import { keyframes, styled } from "@/styles/stitches.config";

export const Row = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "$md",
  variants: {
    align: {
      start: { justifyContent: "flex-start" },
      center: { justifyContent: "center" },
    },
    stack: {
      true: {
        flexDirection: "column",
        alignItems: "stretch",
      },
    },
  },
  defaultVariants: {
    align: "start",
  },
});

export const EmailSide = styled("div", {
  display: "inline-flex",
  alignItems: "center",
  gap: "$sm",
  minHeight: "$controlMin",
});

export const EmailLabel = styled("button", {
  appearance: "none",
  margin: 0,
  padding: 0,
  border: 0,
  backgroundColor: "transparent",
  color: "$loContrast",
  fontFamily: "$body",
  fontSize: "$body2",
  lineHeight: 1.4,
  textAlign: "left",
  cursor: "pointer",
  "&:hover": {
    color: "$textPrimary",
    textDecoration: "underline",
    textUnderlineOffset: "0.2em",
  },
  variants: {
    tone: {
      inverse: {
        color: "$inverseMuted",
        "&:hover": {
          color: "$inverse",
        },
      },
    },
  },
});

export const CopyButton = styled("button", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2.25rem",
  height: "2.25rem",
  border: "1px solid $border",
  borderRadius: "$md",
  backgroundColor: "$surface",
  color: "$textPrimary",
  cursor: "pointer",
  "&:hover": {
    borderColor: "$textPrimary",
  },
  variants: {
    tone: {
      inverse: {
        backgroundColor: "transparent",
        borderColor: "$inverseBorder",
        color: "$inverse",
        "&:hover": {
          borderColor: "$inverse",
        },
      },
    },
  },
});

const toastIn = keyframes({
  from: { opacity: 0, transform: "translateX(-50%) translateY(10px)" },
  to: { opacity: 1, transform: "translateX(-50%) translateY(0)" },
});

export const Toast = styled("div", {
  position: "fixed",
  left: "50%",
  bottom: "1.5rem",
  zIndex: "$toast",
  transform: "translateX(-50%)",
  display: "flex",
  alignItems: "center",
  gap: "$sm",
  maxWidth: "calc(100vw - 2rem)",
  padding: "0.75rem 1.25rem",
  backgroundColor: "#1A1A1A",
  color: "#FFFFFF",
  borderRadius: "$lg",
  boxShadow: "0 16px 48px rgba(0, 0, 0, 0.28)",
  fontFamily: "$body",
  fontSize: "$body1",
  fontWeight: 500,
  lineHeight: 1.3,
  pointerEvents: "none",
  animation: `${toastIn} 180ms ease both`,
  "@motionReduce": {
    animation: "none",
  },
});
