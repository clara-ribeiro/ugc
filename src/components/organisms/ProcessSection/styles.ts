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
  marginBottom: "$3xl",
  maxWidth: "36rem",
});

export const Grid = styled("ol", {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "grid",
  gap: "$lg",
  "@md": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  "@xl": {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
});

export const Step = styled("li", {
  backgroundColor: "$surface",
  border: "1px solid $border",
  borderRadius: "$xl",
  padding: "$xl",
});

export const Index = styled("span", {
  display: "block",
  fontFamily: "$mono",
  fontSize: "$caption",
  color: "$loContrast",
  marginBottom: "$sm",
});

export const Title = styled("h3", {
  fontFamily: "$heading",
  fontSize: "$h4",
  marginBottom: "$sm",
});

export const Body = styled("p", {
  color: "$loContrast",
  fontSize: "$body2",
  lineHeight: 1.7,
});
