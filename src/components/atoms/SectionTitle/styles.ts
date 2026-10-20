import { styled } from "@/styles/stitches.config";

export const StyledSectionTitle = styled("h2", {
  fontFamily: "$heading",
  fontSize: "$h2",
  fontWeight: 500,
  letterSpacing: "-0.02em",
  color: "$textPrimary",
  marginBottom: "$sm",
  "&::before": {
    content: '"/"',
    display: "inline-block",
    marginRight: "$sm",
    fontFamily: "$mono",
    fontSize: "$body2",
    fontStyle: "normal",
    color: "$accent",
    letterSpacing: 0,
  },
});
