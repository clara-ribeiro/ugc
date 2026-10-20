import { styled } from "@/styles/stitches.config";

export const Item = styled("details", {
  backgroundColor: "$surface",
  border: "1px solid $border",
  borderRadius: "$xl",
  padding: "$md $lg",
  boxShadow: "$sm",
  cursor: "pointer",
  transition: "border-color $fast ease",
  "&[open]": {
    borderColor: "$textPrimary",
  },
  "&[open] summary::after": {
    content: '"–"',
  },
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
  gap: "$md",
  overflowWrap: "break-word",
  "&::-webkit-details-marker": {
    display: "none",
  },
  "&::after": {
    content: '"+"',
    marginLeft: "auto",
    flexShrink: 0,
    fontFamily: "$mono",
    fontSize: "$h3",
    fontWeight: 400,
    lineHeight: 1,
    color: "$loContrast",
    pointerEvents: "none",
  },
});

export const Answer = styled("p", {
  color: "$loContrast",
  fontSize: "$body2",
  lineHeight: 1.7,
  marginTop: "$md",
  cursor: "pointer",
});
