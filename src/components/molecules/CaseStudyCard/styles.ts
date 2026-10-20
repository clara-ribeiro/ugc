import { styled } from "@/styles/stitches.config";

export const Root = styled("article", {
  backgroundColor: "$surface",
  padding: "$xl",
  borderRadius: "$xl",
  border: "1px solid $border",
  boxShadow: "$sm",
  transition: "border-color $fast ease, transform $normal ease, box-shadow $fast ease",
  "&:hover": {
    borderColor: "$textPrimary",
    transform: "translateY(-3px)",
    boxShadow: "$md",
  },
});

export const Header = styled("header", {
  marginBottom: "$lg",
});

export const Title = styled("h3", {
  fontFamily: "$heading",
  fontSize: "$h3",
  fontWeight: 500,
});

export const Label = styled("p", {
  fontFamily: "$mono",
  fontSize: "$caption",
  color: "$loContrast",
  marginTop: "$sm",
});

export const Body = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$md",
  fontSize: "$body2",
  color: "$loContrast",
  lineHeight: 1.7,
});

export const Strong = styled("strong", {
  color: "$textPrimary",
  fontWeight: 500,
});
