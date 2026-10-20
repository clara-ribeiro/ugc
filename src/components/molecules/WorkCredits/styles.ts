import { styled } from "@/styles/stitches.config";

export const Row = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "$md",
  "@md": {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "$xl",
  },
});

export const Facts = styled("ul", {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "$sm $md",
  margin: 0,
  padding: 0,
  listStyle: "none",
  color: "$loContrast",
  fontSize: "$body2",
});

export const Fact = styled("li", {
  display: "inline-flex",
  alignItems: "center",
  gap: "$sm",
});

export const FactIcon = styled("span", {
  display: "inline-flex",
  color: "$success",
  "& svg": {
    width: "0.875rem",
    height: "0.875rem",
  },
  variants: {
    tone: {
      success: {
        color: "$success",
      },
      muted: {
        color: "$loContrast",
      },
    },
  },
});

export const Rule = styled("span", {
  display: "none",
  width: "1px",
  height: "0.875rem",
  backgroundColor: "$border",
  "@sm": {
    display: "inline-block",
  },
});

export const Proof = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "$sm",
});

export const ProofLabel = styled("span", {
  fontSize: "$overline",
  fontWeight: 500,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "$loContrast",
  marginRight: "$xs",
});

export const Pill = styled("a", {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4rem",
  minHeight: "2rem",
  padding: "0.2rem 0.7rem",
  backgroundColor: "$surface",
  border: "1px solid $border",
  borderRadius: "$full",
  color: "$textPrimary",
  fontSize: "0.8125rem",
  fontWeight: 500,
  lineHeight: 1,
  textDecoration: "none",
  transition: "border-color $fast ease, color $fast ease",
  "&:hover": {
    borderColor: "$borderHover",
    color: "$textPrimary",
  },
  "&:focus-visible": {
    outline: "2px solid $focus",
    outlineOffset: "2px",
  },
  "& svg": {
    width: "0.7rem",
    height: "0.7rem",
    color: "$loContrast",
  },
});

export const Dot = styled("span", {
  width: "0.4rem",
  height: "0.4rem",
  borderRadius: "$full",
  flexShrink: 0,
  variants: {
    tone: {
      blue: {
        backgroundColor: "$accent",
      },
      rose: {
        backgroundColor: "#F43F5E",
      },
    },
  },
});
