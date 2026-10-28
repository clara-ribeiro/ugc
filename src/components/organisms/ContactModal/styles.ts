import { keyframes, styled } from "@/styles/stitches.config";

const overlayIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const Overlay = styled("div", {
  position: "fixed",
  inset: 0,
  zIndex: "$dialog",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "$sm",
  backgroundColor: "rgba(10, 12, 16, 0.78)",
  overflow: "hidden",
  animation: `${overlayIn} 220ms ease both`,
  "@md": {
    padding: "$md",
  },
  "@motionReduce": {
    animation: "none",
  },
});

export const Panel = styled("div", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "min(100%, 40rem)",
  maxHeight: "100dvh",
  overflow: "hidden",
  backgroundColor: "$surface",
  border: "1px solid $border",
  borderRadius: "$2xl",
  boxShadow: "0 24px 80px rgba(0, 0, 0, 0.28)",
  padding: "2.25rem $md $md",
  "@md": {
    padding: "2.5rem $lg $lg",
  },
});

export const Close = styled("button", {
  position: "absolute",
  top: "$sm",
  right: "$sm",
  zIndex: 2,
  display: "inline-flex",
  alignItems: "center",
  minHeight: "2rem",
  padding: "0 $sm",
  border: "2px solid #000000",
  borderRadius: "$md",
  backgroundColor: "$surface",
  color: "$textPrimary",
  cursor: "pointer",
  fontFamily: "$mono",
  fontSize: "$caption",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  "&:hover": {
    backgroundColor: "$bg",
  },
  "&:disabled": {
    cursor: "wait",
    opacity: 0.45,
  },
});

export const Title = styled("h2", {
  fontFamily: "$heading",
  fontSize: "$h3",
  lineHeight: 1.2,
  paddingRight: "4.5rem",
  marginBottom: "$xs",
});

export const ResultTitle = styled("h2", {
  fontFamily: "$heading",
  fontSize: "$h3",
  lineHeight: 1.2,
  width: "100%",
  margin: 0,
  padding: 0,
  textAlign: "center",
});

export const Lead = styled("p", {
  color: "$loContrast",
  fontSize: "$body2",
  lineHeight: 1.4,
  marginBottom: "$md",
});

export const Form = styled("form", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "$sm",
  "@sm": {
    gridTemplateColumns: "1fr 1fr",
  },
});

export const Field = styled("label", {
  display: "grid",
  gap: "$xs",
  fontFamily: "$mono",
  fontSize: "$overline",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "$accent",
  variants: {
    span: {
      all: {
        gridColumn: "1 / -1",
      },
    },
    hidden: {
      true: {
        position: "absolute",
        width: 1,
        height: 1,
        overflow: "hidden",
        clip: "rect(0 0 0 0)",
      },
    },
  },
});

const fieldControl = {
  width: "100%",
  minHeight: "2.25rem",
  padding: "0 $sm",
  border: "1px solid $border",
  borderRadius: "$md",
  backgroundColor: "$bg",
  color: "$textPrimary",
  fontFamily: "$body",
  fontSize: "$body2",
  "&:focus-visible": {
    outline: "2px solid $focus",
    outlineOffset: "2px",
  },
  "&:disabled": {
    cursor: "wait",
    opacity: 0.65,
  },
} as const;

export const Control = styled("input", fieldControl);

export const Select = styled("select", fieldControl);

export const Area = styled("textarea", {
  ...fieldControl,
  minHeight: "4.5rem",
  height: "4.5rem",
  padding: "$sm",
  resize: "none",
});

const spin = keyframes({
  to: { transform: "rotate(360deg)" },
});

export const Banner = styled("div", {
  gridColumn: "1 / -1",
  display: "flex",
  alignItems: "flex-start",
  gap: "$sm",
  padding: "$sm $md",
  borderRadius: "$md",
  border: "1px solid #FECACA",
  backgroundColor: "#FEF2F2",
  color: "#991B1B",
  fontSize: "$body2",
  lineHeight: 1.4,
});

export const BannerCopy = styled("div", {
  display: "grid",
  gap: 2,
});

export const BannerTitle = styled("strong", {
  fontFamily: "$body",
  fontWeight: 600,
});

export const BannerText = styled("p", {
  margin: 0,
  color: "#7F1D1D",
});

export const Result = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "$md 0 $sm",
  gap: "$sm",
  "& p": {
    marginBottom: 0,
    maxWidth: "28rem",
  },
});

export const MailLink = styled("a", {
  gridColumn: "1 / -1",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "2.5rem",
  padding: "0 $xl",
  border: "1px solid $border",
  borderRadius: "$md",
  backgroundColor: "$surface",
  color: "$textPrimary",
  cursor: "pointer",
  fontFamily: "$body",
  fontSize: "$body2",
  fontWeight: 500,
  textDecoration: "none",
  "&:hover": {
    borderColor: "$textPrimary",
  },
});

export const ResultIcon = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "3.25rem",
  height: "3.25rem",
  borderRadius: "$full",
  marginBottom: "$xs",
  variants: {
    tone: {
      success: {
        backgroundColor: "#DCFCE7",
        color: "$success",
      },
      error: {
        backgroundColor: "#FEE2E2",
        color: "#B91C1C",
      },
    },
  },
});

export const ResultButton = styled("button", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "2.5rem",
  marginTop: "$sm",
  padding: "0 $xl",
  border: 0,
  borderRadius: "$md",
  backgroundColor: "$textPrimary",
  color: "$inverse",
  cursor: "pointer",
  fontFamily: "$body",
  fontSize: "$body2",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "#000000",
  },
});

export const SendingHint = styled("p", {
  gridColumn: "1 / -1",
  margin: 0,
  color: "$loContrast",
  fontSize: "$body2",
  textAlign: "center",
});

export const Spinner = styled("span", {
  width: "1rem",
  height: "1rem",
  border: "2px solid rgba(255, 255, 255, 0.35)",
  borderTopColor: "#FFFFFF",
  borderRadius: "$full",
  animation: `${spin} 700ms linear infinite`,
  "@motionReduce": {
    animation: "none",
    borderTopColor: "rgba(255, 255, 255, 0.35)",
  },
});

export const Submit = styled("button", {
  gridColumn: "1 / -1",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$sm",
  minHeight: "2.5rem",
  padding: "0 $xl",
  border: 0,
  borderRadius: "$md",
  backgroundColor: "$textPrimary",
  color: "$inverse",
  cursor: "pointer",
  fontFamily: "$body",
  fontSize: "$body2",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "#000000",
  },
  "&:disabled": {
    cursor: "wait",
    backgroundColor: "#111111",
  },
});
