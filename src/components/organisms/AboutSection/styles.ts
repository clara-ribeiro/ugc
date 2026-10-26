import { styled } from "@/styles/stitches.config";

export const Section = styled("section", {
  maxWidth: "$containerContent",
  margin: "0 auto",
  px: "$md",
  py: "$3xl",
  "@md": {
    px: "$lg",
    py: "$4xl",
  },
  borderTop: "1px solid $border",
});

export const Intro = styled("div", {
  maxWidth: "42rem",
  marginBottom: "$3xl",
});

export const Lead = styled("p", {
  color: "$textPrimary",
  fontSize: "$h4",
  lineHeight: 1.6,
  marginBottom: "$lg",
});

export const Body = styled("p", {
  color: "$loContrast",
  fontSize: "$body1",
  lineHeight: 1.7,
});

export const NichesTitle = styled("h3", {
  fontFamily: "$body",
  fontSize: "$body2",
  fontWeight: 600,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  color: "$loContrast",
  marginBottom: "$lg",
});

export const Grid = styled("div", {
  display: "grid",
  gap: "$lg",
  "@md": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
});

export const Niche = styled("article", {
  backgroundColor: "$surface",
  border: "1px solid $border",
  borderRadius: "$xl",
  padding: "$xl",
  boxShadow: "$sm",
  transition: "border-color $fast ease, transform $normal ease",
  "&:hover": {
    borderColor: "$textPrimary",
    transform: "translateY(-2px)",
  },
});

export const NicheTitle = styled("h3", {
  fontFamily: "$heading",
  fontSize: "$h4",
  marginBottom: "$sm",
});

export const NicheBody = styled("p", {
  color: "$loContrast",
  fontSize: "$body2",
  lineHeight: 1.7,
});
