import { styled } from "@/styles/stitches.config";

export const Screen = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "$md",
  minHeight: "70dvh",
  maxWidth: "36rem",
  margin: "0 auto",
  padding: "$3xl $lg",
});

export const Title = styled("h1", {
  fontFamily: "$heading",
  fontSize: "$h2",
});

export const Text = styled("p", {
  color: "$loContrast",
  fontSize: "$body1",
  lineHeight: 1.5,
});
