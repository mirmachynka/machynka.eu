import { token } from "#i0bvtbidf4kj";

export const typography = {
  container: {
    px: {
      base: "1rem",
      lg: "2rem",
      sm: "1.5rem",
    },
  },
  heading: {
    variants: {
      section: {
        color: token.color("neutral", "900"),
        fontSize: "4.5rem",
        fontSizeLg: "3rem",
        fontSizeSm: "2.25rem",
        fontSizeXs2: "1.875rem",
        fontWeight: "900",
        letterSpacing: "0.02em",
        lineHeight: "1",
        textTransform: "uppercase",
      },
    },
  },
};
