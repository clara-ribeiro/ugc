import { styled } from "@/styles/stitches.config";

export const Root = styled("footer", {
  py: "$3xl",
  px: "$md",
  "@md": {
    px: "$lg",
  },
  backgroundColor: "$surface",
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

export const Email = styled("a", {
  display: "block",
  fontWeight: 500,
  fontSize: "$body2",
  color: "$textPrimary",
  marginBottom: "$3xl",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    width: "100%",
    height: "1px",
    bottom: "-2px",
    backgroundColor: "currentColor",
    transform: "scaleX(0)",
    transformOrigin: "bottom right",
    transition: "transform $normal ease-out",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
    transformOrigin: "bottom left",
  },
});

export const Copyright = styled("p", {
  fontFamily: "$mono",
  fontSize: "$caption",
  color: "$loContrast",
});
