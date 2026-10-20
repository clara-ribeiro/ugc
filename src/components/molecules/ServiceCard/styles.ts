import { styled } from "@/styles/stitches.config";

export const Root = styled("article", {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  padding: "$xl",
  borderRadius: "$xl",
  variants: {
    featured: {
      true: {
        backgroundColor: "$textPrimary",
        color: "$inverse",
        boxShadow: "$lg",
        "@lg": {
          transform: "translateY(-0.5rem)",
        },
      },
      false: {
        backgroundColor: "$surface",
        color: "$textPrimary",
        border: "1px solid $border",
        boxShadow: "$sm",
        transition: "border-color $fast ease, transform $normal ease, box-shadow $fast ease",
        "&:hover": {
          borderColor: "$textPrimary",
          transform: "translateY(-3px)",
          boxShadow: "$md",
        },
      },
    },
  },
  defaultVariants: {
    featured: false,
  },
});

export const Badge = styled("span", {
  position: "absolute",
  top: "-0.75rem",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "$surface",
  color: "$textPrimary",
  fontFamily: "$mono",
  fontSize: "$overline",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  px: "0.75rem",
  py: "$xs",
  borderRadius: "$full",
  border: "1px solid $border",
  boxShadow: "$sm",
});

export const Name = styled("h3", {
  fontFamily: "$heading",
  fontSize: "$h4",
  color: "inherit",
  marginBottom: "$xs",
});

export const Price = styled("p", {
  fontFamily: "$body",
  fontSize: "$h2",
  fontWeight: 500,
  color: "inherit",
});

export const PriceSuffix = styled("span", {
  fontSize: "$body2",
  fontWeight: 400,
  color: "$loContrast",
});

export const Description = styled("p", {
  fontSize: "$caption",
  marginBottom: "$lg",
  paddingBottom: "$lg",
  borderBottom: "1px solid $border",
  variants: {
    featured: {
      true: {
        color: "$inverseMuted",
        borderBottomColor: "$inverseBorder",
      },
      false: {
        color: "$loContrast",
      },
    },
  },
});

export const FeatureList = styled("ul", {
  listStyle: "none",
  padding: 0,
  margin: "0 0 $xl",
  display: "flex",
  flexDirection: "column",
  gap: "$md",
  flex: 1,
});

export const Feature = styled("li", {
  display: "flex",
  alignItems: "flex-start",
  fontSize: "$body2",
  variants: {
    featured: {
      true: {
        color: "#D1D5DB",
      },
      false: {
        color: "$loContrast",
      },
    },
  },
});

export const Bullet = styled("span", {
  marginRight: "0.75rem",
  fontFamily: "$mono",
  variants: {
    featured: {
      true: { color: "$inverse" },
      false: { color: "$textPrimary" },
    },
  },
});
