import { keyframes, styled } from "@/styles/stitches.config";

const overlayIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const copyIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const Overlay = styled("div", {
  position: "fixed",
  inset: 0,
  zIndex: "$dialog",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "$sm",
  backgroundColor: "rgba(10, 12, 16, 0.78)",
  overflow: "hidden",
  isolation: "isolate",
  animation: `${overlayIn} 280ms ease both`,
  "@md": {
    padding: "$md",
  },
  "@motionReduce": {
    animation: "none",
  },
});

export const Close = styled("button", {
  position: "absolute",
  top: "$sm",
  right: "$sm",
  zIndex: 4,
  display: "inline-flex",
  alignItems: "center",
  gap: "$sm",
  minHeight: "$controlMin",
  minWidth: "$controlMin",
  padding: "0 $md",
  border: "2px solid #000000",
  borderRadius: "$md",
  backgroundColor: "$surface",
  color: "$textPrimary",
  cursor: "pointer",
  fontFamily: "$mono",
  fontSize: "$caption",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  boxShadow: "$md",
  "&:hover": {
    backgroundColor: "$bg",
  },
  "@md": {
    top: "$md",
    right: "$md",
  },
});

export const Panel = styled("div", {
  position: "relative",
  zIndex: 1,
  width: "min(100%, 68rem)",
  maxHeight: "calc(100dvh - 1rem)",
  overflow: "hidden",
  backgroundColor: "$surface",
  border: "1px solid $border",
  borderRadius: "$2xl",
  boxShadow: "0 24px 80px rgba(0, 0, 0, 0.28)",
  padding: "2.75rem $sm $sm",
  display: "grid",
  gridTemplateColumns: "minmax(6.5rem, min(32vw, 12.5rem)) minmax(0, 1fr)",
  alignItems: "center",
  gap: "$md",
  "@md": {
    maxHeight: "calc(100dvh - 2rem)",
    padding: "3rem $lg $lg",
    gridTemplateColumns: "minmax(9rem, 14rem) minmax(0, 1fr)",
    gap: "$xl",
  },
});

export const Slot = styled("div", {
  width: "100%",
  maxHeight: "calc(100dvh - 4.5rem)",
  justifySelf: "start",
});

export const DestPhone = styled("div", {
  width: "100%",
  overflow: "visible",
  transition: "opacity 180ms ease",
  "& > *": {
    width: "100%",
    maxWidth: "100%",
  },
  "& video": {
    pointerEvents: "auto !important",
    position: "relative",
    zIndex: 2,
  },
  "& video::-webkit-media-controls-panel": {
    display: "flex !important",
    opacity: "1 !important",
  },
  variants: {
    visible: {
      true: { opacity: 1 },
      false: { opacity: 0 },
    },
  },
  defaultVariants: {
    visible: false,
  },
});

export const Traveler = styled("div", {
  position: "fixed",
  zIndex: 2,
  pointerEvents: "none",
  transformOrigin: "top left",
  willChange: "transform, opacity",
  backfaceVisibility: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    inset: "-2px",
    borderRadius: "1.95rem",
    pointerEvents: "none",
    boxShadow: "0 0 0 1px rgba(37, 99, 235, 0.55), 0 0 28px rgba(37, 99, 235, 0.28)",
  },
});

export const Copy = styled("div", {
  minWidth: 0,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  overflowWrap: "break-word",
  paddingRight: "6.25rem",
  variants: {
    ready: {
      true: {
        animation: `${copyIn} 320ms ease 80ms both`,
      },
    },
  },
  "@motionReduce": {
    animation: "none",
  },
});

export const Kicker = styled("p", {
  fontFamily: "$mono",
  fontSize: "$overline",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "$loContrast",
  marginBottom: "$xs",
});

export const Heading = styled("h2", {
  fontFamily: "$heading",
  fontSize: "$h4",
  lineHeight: 1.2,
  marginBottom: "$xs",
  "@md": {
    fontSize: "$h3",
  },
});

export const Quote = styled("p", {
  fontFamily: "$heading",
  fontStyle: "italic",
  fontSize: "$caption",
  lineHeight: 1.4,
  marginBottom: "$sm",
  "@md": {
    fontSize: "$body2",
  },
});

export const Facts = styled("div", {
  display: "grid",
  gap: "$sm",
  marginBottom: "$sm",
  "@sm": {
    gridTemplateColumns: "1fr 1fr",
  },
});

export const Block = styled("div", {
  minWidth: 0,
  variants: {
    card: {
      true: {
        padding: "$xs $sm",
        border: "1px solid $border",
        borderRadius: "$md",
        backgroundColor: "$bg",
        "@md": {
          padding: "$sm",
          borderRadius: "$lg",
        },
      },
    },
  },
});

export const Label = styled("p", {
  fontFamily: "$mono",
  fontSize: "$overline",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "$accent",
  marginBottom: "$xs",
});

export const Body = styled("p", {
  color: "$loContrast",
  fontSize: "$caption",
  lineHeight: 1.4,
  "@md": {
    fontSize: "$body2",
    lineHeight: 1.45,
  },
});

export const Beats = styled("ol", {
  listStyle: "none",
  padding: 0,
  margin: "$xs 0 0",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "$xs",
  "@md": {
    gap: "$sm",
    margin: "$sm 0 0",
  },
});

export const Beat = styled("li", {
  padding: "$xs $sm",
  border: "1px solid $border",
  borderRadius: "$md",
  backgroundColor: "$bg",
  "@md": {
    padding: "$sm",
    borderRadius: "$lg",
  },
});

export const BeatLabel = styled("span", {
  display: "block",
  fontFamily: "$mono",
  fontSize: "$overline",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "$textPrimary",
  marginBottom: "2px",
});

export const PlayerBar = styled("div", {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 3,
  display: "flex",
  alignItems: "center",
  gap: "$xs",
  padding: "0.45rem 0.4rem 0.55rem",
  backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.78) 100%)",
  pointerEvents: "auto",
});

export const PlayerBtn = styled("button", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "2.25rem",
  height: "2.25rem",
  flexShrink: 0,
  border: "1.5px solid #000000",
  borderRadius: "$md",
  backgroundColor: "$surface",
  color: "$textPrimary",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "$bg",
  },
});
