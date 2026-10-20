import { styled } from "@/styles/stitches.config";

export const SkipLink = styled("a", {
  position: "absolute",
  left: "$md",
  top: "-100%",
  zIndex: "$skipLink",
  backgroundColor: "$textPrimary",
  color: "$inverse",
  px: "$md",
  py: "$sm",
  borderRadius: "$md",
  fontSize: "$body2",
  "&:focus": {
    top: "$md",
  },
});

export const Bar = styled("nav", {
  position: "sticky",
  top: 0,
  zIndex: "$sticky",
  backgroundColor: "rgba(249, 248, 246, 0.96)",
  backdropFilter: "blur(12px)",
  borderBottom: "1px solid $border",
});

export const Inner = styled("div", {
  maxWidth: "$containerContent",
  margin: "0 auto",
  px: "$md",
  minHeight: "$headerHeight",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "$sm",
  "@md": {
    px: "$lg",
  },
});

export const Brand = styled("a", {
  fontFamily: "$mono",
  fontSize: "$body2",
  letterSpacing: "-0.02em",
  color: "$textPrimary",
  flexShrink: 0,
});

export const Links = styled("div", {
  display: "none",
  "@lg": {
    display: "flex",
    gap: "$lg",
  },
});

export const Contact = styled("a", {
  fontFamily: "$heading",
  fontStyle: "italic",
  fontSize: "$body2",
  color: "$textPrimary",
  whiteSpace: "nowrap",
  minHeight: "$controlMin",
  display: "inline-flex",
  alignItems: "center",
  flexShrink: 0,
  transition: "color $fast ease",
  "&:hover": {
    color: "$accent",
  },
});

export const CtaFull = styled("span", {
  display: "none",
  "@sm": {
    display: "inline",
  },
});

export const CtaShort = styled("span", {
  display: "inline",
  "@sm": {
    display: "none",
  },
});

export const MenuButton = styled("button", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "$controlMin",
  minHeight: "$controlMin",
  marginLeft: "auto",
  marginRight: "$sm",
  padding: 0,
  border: "1px solid $border",
  borderRadius: "$md",
  backgroundColor: "$surface",
  color: "$textPrimary",
  cursor: "pointer",
  "@lg": {
    display: "none",
  },
});

export const MenuPanel = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$xs",
  padding: "$sm $md $lg",
  borderTop: "1px solid $border",
  "@md": {
    px: "$lg",
  },
  "@lg": {
    display: "none",
  },
});

export const MenuLink = styled("a", {
  display: "flex",
  alignItems: "center",
  minHeight: "$controlMin",
  color: "$textPrimary",
  fontSize: "$body1",
  fontWeight: 500,
  borderRadius: "$md",
  px: "$sm",
  "&:hover": {
    backgroundColor: "$surface",
  },
});
