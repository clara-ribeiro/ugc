import { styled } from "@/styles/stitches.config";

export const Root = styled("article", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Phone = styled("div", {
  position: "relative",
  width: "min(100%, 17.5rem)",
  margin: "0 auto $md",
  padding: "0.7rem 0.55rem 0.95rem",
  backgroundColor: "#1A1A1A",
  backgroundImage: "linear-gradient(180deg, #2C2C2C 0%, #141414 18%, #111111 100%)",
  borderRadius: "1.85rem",
  boxShadow: "0 18px 40px rgba(17, 17, 17, 0.18)",
  border: "1px solid #3A3A3A",
  "@md": {
    width: "100%",
    maxWidth: "18rem",
  },
});

export const Earpiece = styled("span", {
  display: "block",
  width: "4.25rem",
  height: "0.35rem",
  margin: "0 auto 0.55rem",
  backgroundColor: "#2A2A2A",
  borderRadius: "$full",
});

export const SideButton = styled("span", {
  position: "absolute",
  width: "0.14rem",
  backgroundColor: "#2A2A2A",
  borderRadius: "0.08rem 0 0 0.08rem",
  variants: {
    pos: {
      volUp: {
        top: "5.5rem",
        left: "-0.14rem",
        height: "1.6rem",
      },
      volDown: {
        top: "7.4rem",
        left: "-0.14rem",
        height: "1.6rem",
      },
      power: {
        top: "6.4rem",
        right: "-0.14rem",
        height: "2.4rem",
        borderRadius: "0 0.08rem 0.08rem 0",
      },
    },
  },
});

export const Screen = styled("button", {
  position: "relative",
  display: "block",
  width: "100%",
  padding: 0,
  border: 0,
  aspectRatio: "9 / 16",
  borderRadius: "1.2rem",
  overflow: "hidden",
  backgroundColor: "#000",
  cursor: "pointer",
  boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.08)",
  "&:focus-visible": {
    outline: "2px solid $focus",
    outlineOffset: "3px",
  },
});

export const Playback = styled("video", {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  pointerEvents: "none",
});

export const HomeBar = styled("span", {
  display: "block",
  width: "3.25rem",
  height: "0.28rem",
  margin: "0.55rem auto 0",
  backgroundColor: "#3F3F3F",
  borderRadius: "$full",
});

export const Meta = styled("div", {
  width: "min(100%, 17.5rem)",
  "@md": {
    width: "100%",
    maxWidth: "18rem",
  },
});

export const Category = styled("span", {
  display: "block",
  fontFamily: "$mono",
  fontSize: "$overline",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "$loContrast",
  marginBottom: "$xs",
});

export const Title = styled("h3", {
  fontFamily: "$body",
  fontSize: "$body2",
  fontWeight: 600,
  lineHeight: 1.35,
  color: "$textPrimary",
  marginBottom: "$xs",
});

export const Hook = styled("p", {
  fontFamily: "$heading",
  fontStyle: "italic",
  fontSize: "$caption",
  color: "$textPrimary",
  lineHeight: 1.5,
  marginBottom: "$sm",
});

export const Description = styled("p", {
  color: "$loContrast",
  fontSize: "$caption",
  lineHeight: 1.6,
});
