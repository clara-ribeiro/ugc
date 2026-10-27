import { styled } from "@/styles/stitches.config";

export const Phone = styled("div", {
  position: "relative",
  width: "min(100%, 17.5rem)",
  margin: "0 auto",
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
  variants: {
    size: {
      grid: {},
      modal: {
        width: "100%",
        maxWidth: "100%",
        margin: 0,
        "@md": {
          width: "100%",
          maxWidth: "100%",
        },
      },
      fill: {
        width: "100%",
        maxWidth: "none",
        margin: 0,
        "@md": {
          width: "100%",
          maxWidth: "none",
        },
      },
    },
    lifted: {
      true: {
        opacity: 0,
      },
    },
    glowing: {
      true: {
        boxShadow:
          "0 0 0 1px $colors$accent, 0 0 32px rgba(37, 99, 235, 0.35), 0 28px 64px rgba(17, 17, 17, 0.35)",
        borderColor: "$accent",
      },
    },
  },
  defaultVariants: {
    size: "grid",
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

export const Screen = styled("div", {
  position: "relative",
  display: "block",
  width: "100%",
  padding: 0,
  border: 0,
  aspectRatio: "9 / 16",
  borderRadius: "1.2rem",
  overflow: "hidden",
  backgroundColor: "#000",
  boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.08)",
  "&:focus-visible": {
    outline: "2px solid $focus",
    outlineOffset: "3px",
  },
  variants: {
    clickable: {
      true: {
        cursor: "pointer",
      },
    },
    chrome: {
      true: {
        overflow: "visible",
        zIndex: 1,
      },
    },
  },
});

export const Cover = styled("img", {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});

export const Playback = styled("video", {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  pointerEvents: "none",
  backgroundColor: "#000",
  variants: {
    interactive: {
      true: {
        position: "relative",
        zIndex: 2,
        pointerEvents: "auto",
        "&::-webkit-media-controls-enclosure": {
          overflow: "visible",
        },
        "&::-webkit-media-controls-panel": {
          display: "flex !important",
        },
      },
    },
  },
});

export const HomeBar = styled("span", {
  display: "block",
  width: "3.25rem",
  height: "0.28rem",
  margin: "0.55rem auto 0",
  backgroundColor: "#3F3F3F",
  borderRadius: "$full",
});
