import { styled } from "@/styles/stitches.config";

export const Root = styled("footer", {
  py: "$3xl",
  px: "$md",
  "@md": {
    px: "$lg",
  },
  backgroundColor: "rgba(255, 255, 255, 0.72)",
  backdropFilter: "blur(12px)",
  borderTop: "1px solid $border",
  textAlign: "center",
});

export const Inner = styled("div", {
  maxWidth: "42rem",
  margin: "0 auto",
});

export const Quote = styled("p", {
  fontFamily: "$heading",
  fontStyle: "italic",
  fontSize: "1.5rem",
  color: "$textPrimary",
  marginBottom: "$lg",
});

export const Description = styled("p", {
  color: "$loContrast",
  fontSize: "$body2",
  lineHeight: 1.7,
  maxWidth: "28rem",
  margin: "0 auto $xl",
});

export const Credits = styled("div", {
  maxWidth: "$containerContent",
  margin: "0 auto $xl",
  paddingTop: "$xl",
  borderTop: "1px solid $border",
  textAlign: "left",
});

export const Actions = styled("div", {
  marginBottom: "$3xl",
});

export const Copyright = styled("p", {
  fontFamily: "$mono",
  fontSize: "$caption",
  color: "$loContrast",
});
