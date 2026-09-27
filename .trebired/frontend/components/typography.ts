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
      panel: {
        fontSize: "1.25rem",
        fontWeight: "900",
        lineHeight: "1.2",
        textTransform: "uppercase",
      },
      page: {
        fontSize: "6rem",
        fontSizeLg: "4.5rem",
        fontSizeMd: "3.25rem",
        fontSizeSm: "2.75rem",
        fontWeight: "900",
        lineHeight: "1",
        textTransform: "uppercase",
      },
      tile: {
        fontSize: "1rem",
        fontWeight: "900",
        lineHeight: "1.2",
        textTransform: "uppercase",
      },
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
