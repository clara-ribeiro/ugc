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
});

export const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "$2xl $xl",
  justifyItems: "center",
  "@md": {
    gridTemplateColumns: "repeat(2, 1fr)",
    justifyItems: "stretch",
  },
  "@lg": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
});
