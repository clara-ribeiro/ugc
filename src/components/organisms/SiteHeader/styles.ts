import { blinkCaret, styled } from "@/styles/stitches.config";

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
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: "$sticky",
  backgroundColor: "rgba(249, 248, 246, 0.86)",
  backdropFilter: "blur(16px) saturate(1.2)",
  WebkitBackdropFilter: "blur(16px) saturate(1.2)",
  borderBottom: "1px solid transparent",
  transition: "border-color $fast ease, background-color $fast ease, box-shadow $fast ease",
  variants: {
    scrolled: {
      true: {
        backgroundColor: "rgba(249, 248, 246, 0.94)",
        borderBottomColor: "$border",
        boxShadow: "0 8px 24px rgba(26, 26, 26, 0.04)",
      },
      false: {
        borderBottomColor: "transparent",
      },
    },
    open: {
      true: {
        backgroundColor: "rgba(249, 248, 246, 0.98)",
      },
    },
  },
});

export const Progress = styled("div", {
  position: "absolute",
  left: 0,
  bottom: 0,
  height: "2px",
  width: "100%",
  backgroundColor: "$textPrimary",
  transformOrigin: "left center",
  pointerEvents: "none",
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
  display: "inline-flex",
  alignItems: "center",
  "&::after": {
    content: '""',
    display: "inline-block",
    width: "0.45rem",
    height: "0.9em",
    marginLeft: "$xs",
    backgroundColor: "$accent",
    animation: `${blinkCaret} 1.2s steps(1) infinite`,
  },
  "@motionReduce": {
    "&::after": {
      animation: "none",
      opacity: 0.7,
    },
  },
});

export const Links = styled("div", {
  display: "none",
  "@lg": {
    display: "flex",
    gap: "$lg",
  },
});

export const Contact = styled("button", {
  appearance: "none",
  border: 0,
  backgroundColor: "transparent",
  padding: 0,
  cursor: "pointer",
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
  transition: "border-color $fast ease, background-color $fast ease",
  "&:hover": {
    borderColor: "$borderHover",
  },
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
  backgroundColor: "rgba(249, 248, 246, 0.98)",
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
  fontWeight: 500,
  borderRadius: "$md",
  px: "$sm",
  fontFamily: "$mono",
  fontSize: "$body2",
  "&:hover": {
    backgroundColor: "$surface",
  },
});
