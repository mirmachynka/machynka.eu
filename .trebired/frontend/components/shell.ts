import { token } from "#i0bvtbidf4kj";

const border = token.border(token.color("neutral", "200"));

export const shell = {
  footer: {
    heading: {
      color: token.color("white", "500"),
      fontWeight: "900",
      letterSpacing: "0.08em",
    },
    columns: { min: "12rem" },
    inner: { gap: "3rem" },
    link: {
      hoverColor: token.color("white", "500"),
      hoverDecorationLine: "none",
    },
    maxWidth: "80rem",
    root: {
      bg: token.color("neutral", "900"),
      border: `1px solid ${token.color("neutral", "800")}`,
      px: "var(--tbf-container-px)",
      py: "4rem",
    },
    tone: {
      inverse: {
        bg: token.color("neutral", "900"),
        color: token.color("white", "500"),
      },
    },
  },
  language: {
    trigger: {
      borderColor: token.color("neutral", "400"),
      fontSize: "0.78rem",
      fontWeight: "900",
      gap: "0.55rem",
      height: "1.75rem",
      letterSpacing: "0.06em",
      padding: "0 0.625rem",
    },
  },
  header: {
    actionsGap: "1.5rem",
    brand: { logoHeight: "3.5rem" },
    link: {
      color: token.color("neutral", "500"),
      fontWeight: "700",
      hoverColor: token.color("neutral", "900"),
      letterSpacing: "0.02em",
      padding: "0.5rem 1rem",
      textTransform: "uppercase",
    },
    maxWidth: "80rem",
    menu: {
      background: token.color("white", "500"),
      border,
      footer: { border },
      link: { color: token.color("neutral", "900"), fontWeight: "700", padding: "0.25rem 0" },
      linksGap: "0.5rem",
    },
    paddingInline: "var(--tbf-container-px)",
    root: {
      background: token.color("white", "500"),
      border,
      zIndex: "50",
    },
  },
};
