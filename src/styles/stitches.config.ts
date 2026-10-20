import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  config,
  theme,
} = createStitches({
  theme: {
    colors: {
      bg: "#F9F8F6",
      surface: "#FFFFFF",
      textPrimary: "#1A1A1A",
      hiContrast: "#1A1A1A",
      loContrast: "#5C5C5C",
      accent: "#2563EB",
      border: "#E5E5E5",
      borderHover: "#A3A3A3",
      focus: "#2563EB",
      success: "#16A34A",
      inverse: "#FFFFFF",
      inverseMuted: "#9CA3AF",
      inverseBorder: "#374151",
    },
    fonts: {
      heading: 'var(--font-lora), Georgia, "Times New Roman", serif',
      body: 'var(--font-inter), system-ui, sans-serif',
      mono: 'var(--font-jetbrains), ui-monospace, monospace',
    },
    fontSizes: {
      caption: "0.6875rem",
      overline: "0.625rem",
      body2: "0.875rem",
      body1: "1rem",
      h4: "1.125rem",
      h3: "1.25rem",
      h2: "1.875rem",
      h1: "3rem",
    },
    space: {
      xs: "0.25rem",
      sm: "0.5rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
      "2xl": "3rem",
      "3xl": "4rem",
      "4xl": "5rem",
      "5xl": "6rem",
    },
    sizes: {
      containerContent: "64rem",
      headerHeight: "4.5rem",
      controlMin: "2.75rem",
    },
    radii: {
      sm: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      full: "9999px",
    },
    shadows: {
      sm: "0 1px 2px rgba(0, 0, 0, 0.06)",
      md: "0 4px 16px rgba(0, 0, 0, 0.08)",
      lg: "0 8px 24px rgba(0, 0, 0, 0.12)",
    },
    zIndices: {
      sticky: "200",
      skipLink: "600",
    },
    transitions: {
      fast: "150ms",
      normal: "250ms",
      slow: "300ms",
    },
  },
  media: {
    sm: "(min-width: 480px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    motionReduce: "(prefers-reduced-motion: reduce)",
  },
  utils: {
    mx: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: (value: string | number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string | number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    size: (value: string | number) => ({
      width: value,
      height: value,
    }),
  },
});

export const globalStyles = globalCss({
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },
  html: {
    fontSize: "100%",
    scrollBehavior: "smooth",
    textSizeAdjust: "100%",
    overflowX: "hidden",
  },
  body: {
    margin: 0,
    minHeight: "100dvh",
    overflowX: "hidden",
    backgroundColor: "$bg",
    color: "$textPrimary",
    fontFamily: "$body",
    fontSize: "$body1",
    lineHeight: 1.6,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  },
  "img, picture, video, canvas, svg": {
    display: "block",
    maxWidth: "100%",
  },
  "button, input, textarea, select": {
    font: "inherit",
    color: "inherit",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
  "h1, h2, h3, h4": {
    fontFamily: "$heading",
    fontWeight: 500,
    lineHeight: 1.2,
    margin: 0,
    color: "$hiContrast",
  },
  p: {
    margin: 0,
  },
  "::selection": {
    backgroundColor: "$textPrimary",
    color: "$inverse",
  },
  ":focus-visible": {
    outline: "0.125rem solid $focus",
    outlineOffset: "0.25rem",
  },
  ":target": {
    scrollMarginBlockStart: "$headerHeight",
  },
  "@motionReduce": {
    html: {
      scrollBehavior: "auto",
    },
    "*, *::before, *::after": {
      animationDuration: "0.01ms !important",
      animationIterationCount: "1 !important",
      transitionDuration: "0.01ms !important",
    },
  },
});
