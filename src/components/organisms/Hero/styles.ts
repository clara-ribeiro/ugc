import { styled } from "@/styles/stitches.config";

export const Section = styled("header", {
  maxWidth: "$containerContent",
  margin: "0 auto",
  px: "$md",
  paddingTop: "$2xl",
  paddingBottom: "$xl",
  "@md": {
    px: "$lg",
    paddingTop: "$3xl",
    paddingBottom: "$xl",
  },
});

export const Layout = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$2xl",
  alignItems: "center",
  "@md": {
    flexDirection: "row",
  },
});

export const Copy = styled("div", {
  flex: 1,
  textAlign: "left",
});

export const Title = styled("h1", {
  fontFamily: "$heading",
  fontSize: "2.125rem",
  fontWeight: 500,
  letterSpacing: "-0.02em",
  lineHeight: 1.15,
  marginBottom: "$lg",
  overflowWrap: "break-word",
  "@sm": {
    fontSize: "2.5rem",
  },
  "@md": {
    fontSize: "$h1",
  },
});

export const Emphasis = styled("span", {
  fontStyle: "italic",
  color: "$loContrast",
});

export const Description = styled("p", {
  fontSize: "$h4",
  color: "$loContrast",
  maxWidth: "36rem",
  lineHeight: 1.7,
  marginBottom: "$xl",
  "@md": {
    fontSize: "1.25rem",
  },
});

export const Actions = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  gap: "$md",
  width: "100%",
  "@sm": {
    flexDirection: "row",
    alignItems: "center",
    width: "auto",
    gap: "$lg",
  },
});

export const PhotoWrap = styled("div", {
  position: "relative",
  width: "100%",
  maxWidth: "22rem",
  flexShrink: 0,
  "@md": {
    maxWidth: "none",
    width: "22rem",
  },
  "@lg": {
    width: "25rem",
  },
});

export const Corner = styled("span", {
  position: "absolute",
  width: "0.75rem",
  height: "0.75rem",
  zIndex: 1,
  pointerEvents: "none",
  borderColor: "$textPrimary",
  variants: {
    pos: {
      tl: {
        top: "-3px",
        left: "-3px",
        borderTop: "1.5px solid currentColor",
        borderLeft: "1.5px solid currentColor",
      },
      tr: {
        top: "-3px",
        right: "-3px",
        borderTop: "1.5px solid currentColor",
        borderRight: "1.5px solid currentColor",
      },
      bl: {
        bottom: "-3px",
        left: "-3px",
        borderBottom: "1.5px solid currentColor",
        borderLeft: "1.5px solid currentColor",
      },
      br: {
        bottom: "-3px",
        right: "-3px",
        borderBottom: "1.5px solid currentColor",
        borderRight: "1.5px solid currentColor",
      },
    },
  },
});

export const PhotoFrame = styled("div", {
  position: "relative",
  aspectRatio: "3 / 4",
  borderRadius: "$md",
  overflow: "hidden",
  border: "1px solid $border",
  boxShadow: "$sm",
  backgroundColor: "#F3F4F6",
  "@md": {
    aspectRatio: "1 / 1",
  },
  "@lg": {
    aspectRatio: "4 / 5",
  },
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
});

export const Credentials = styled("div", {
  marginTop: "$3xl",
  borderTop: "1px solid $border",
  paddingTop: "$xl",
});
