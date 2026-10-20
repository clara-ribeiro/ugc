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

export const List = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$md",
});

export const Item = styled("details", {
  backgroundColor: "$surface",
  border: "1px solid $border",
  borderRadius: "$xl",
  padding: "$md $lg",
  boxShadow: "$sm",
  "@md": {
    padding: "$lg $xl",
  },
});

export const Question = styled("summary", {
  fontFamily: "$heading",
  fontSize: "$h4",
  fontWeight: 500,
  cursor: "pointer",
  listStyle: "none",
  minHeight: "$controlMin",
  display: "flex",
  alignItems: "center",
  overflowWrap: "break-word",
  "&::-webkit-details-marker": {
    display: "none",
  },
});

export const Answer = styled("p", {
  color: "$loContrast",
  fontSize: "$body2",
  lineHeight: 1.7,
  marginTop: "$md",
});
