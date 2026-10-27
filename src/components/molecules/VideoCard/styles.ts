import { styled } from "@/styles/stitches.config";

export const Root = styled("article", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Meta = styled("div", {
  width: "min(100%, 17.5rem)",
  marginTop: "$md",
  "@md": {
    width: "100%",
    maxWidth: "18rem",
  },
});

export const Category = styled("span", {
  display: "block",
  fontFamily: "$mono",
  fontSize: "$overline",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "$loContrast",
  marginBottom: "$xs",
});

export const Title = styled("h3", {
  fontFamily: "$body",
  fontSize: "$body2",
  fontWeight: 600,
  lineHeight: 1.35,
  color: "$textPrimary",
  marginBottom: "$xs",
});

export const Hook = styled("p", {
  fontFamily: "$heading",
  fontStyle: "italic",
  fontSize: "$caption",
  color: "$textPrimary",
  lineHeight: 1.5,
  marginBottom: "$sm",
});

export const Description = styled("p", {
  color: "$loContrast",
  fontSize: "$caption",
  lineHeight: 1.6,
});
