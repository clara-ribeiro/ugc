import { styled } from "@/styles/stitches.config";

export const StyledNavLink = styled("a", {
  position: "relative",
  color: "$loContrast",
  fontFamily: "$body",
  fontSize: "$body2",
  fontWeight: 500,
  transition: "color $fast ease",
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    width: "100%",
    height: "1px",
    bottom: "-2px",
    backgroundColor: "currentColor",
    transform: "scaleX(0)",
    transformOrigin: "bottom right",
    transition: "transform $normal ease-out",
  },
  "&:hover": {
    color: "$textPrimary",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
    transformOrigin: "bottom left",
  },
});
