import { styled } from "@/styles/stitches.config";

export const Root = styled("article", {
  position: "relative",
  transition: "transform $normal ease",
  "&:hover": {
    transform: "translateY(-4px)",
  },
  "&:hover [data-frame]": {
    borderColor: "$textPrimary",
  },
});

export const Frame = styled("div", {
  position: "relative",
  aspectRatio: "9 / 16",
  backgroundColor: "$surface",
  border: "1px solid $border",
  borderRadius: "$lg",
  overflow: "hidden",
  marginBottom: "$md",
  transition: "border-color $fast ease",
});

export const Placeholder = styled("div", {
  position: "absolute",
  inset: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "$sm",
  padding: "$md",
  textAlign: "center",
  color: "$loContrast",
  fontFamily: "$mono",
  fontSize: "$caption",
  "&::before": {
    content: '"REC"',
    position: "absolute",
    top: "$md",
    left: "$md",
    fontSize: "$overline",
    letterSpacing: "0.14em",
    color: "#F43F5E",
  },
});

export const Product = styled("span", {
  fontFamily: "$heading",
  fontSize: "$h4",
  fontStyle: "italic",
  color: "$textPrimary",
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
