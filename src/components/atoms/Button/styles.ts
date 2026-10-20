import { styled } from "@/styles/stitches.config";

export const StyledButton = styled("a", {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "$controlMin",
  px: "$xl",
  py: "0.75rem",
  borderRadius: "$md",
  fontFamily: "$body",
  fontSize: "$body2",
  fontWeight: 500,
  textAlign: "center",
  transition:
    "background-color $fast ease, color $fast ease, border-color $fast ease, transform $fast ease, box-shadow $fast ease",
  variants: {
    variant: {
      solid: {
        backgroundColor: "$textPrimary",
        color: "$inverse",
        boxShadow: "$sm",
        letterSpacing: "0.01em",
        "&:hover": {
          backgroundColor: "#000000",
          transform: "translateY(-1px)",
          boxShadow: "$md",
        },
      },
      outline: {
        backgroundColor: "transparent",
        color: "$textPrimary",
        border: "1px solid $textPrimary",
        width: "100%",
        "&:hover": {
          backgroundColor: "$textPrimary",
          color: "$inverse",
        },
      },
      inverse: {
        backgroundColor: "$inverse",
        color: "$textPrimary",
        width: "100%",
        "&:hover": {
          backgroundColor: "#F3F4F6",
        },
      },
      ghost: {
        backgroundColor: "transparent",
        color: "$textPrimary",
        px: "$sm",
        boxShadow: "none",
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          bottom: "0.4rem",
          height: "1px",
          backgroundColor: "currentColor",
          transform: "scaleX(0)",
          transformOrigin: "bottom right",
          transition: "transform $normal ease-out",
        },
        "&:hover::after": {
          transform: "scaleX(1)",
          transformOrigin: "bottom left",
        },
      },
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});
