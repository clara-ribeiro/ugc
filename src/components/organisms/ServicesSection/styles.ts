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
  textAlign: "center",
  marginBottom: "$3xl",
});

export const Grid = styled("div", {
  display: "grid",
  gap: "$xl",
  "@lg": {
    gridTemplateColumns: "repeat(3, 1fr)",
    alignItems: "stretch",
  },
});

export const Footnote = styled("p", {
  textAlign: "center",
  fontFamily: "$mono",
  fontSize: "0.6875rem",
  color: "$loContrast",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  marginTop: "$xl",
});
