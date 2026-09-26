import { token } from "#i0bvtbidf4kj";

export const surfaces = {
  container: { root: { max: "80rem" } },
  hairline: {
    cell: { padding: "1.5rem" },
    root: {
      bg: token.color("neutral", "200"),
      border: "0",
      radius: "0",
    },
  },
  section: {
    root: {
      bg: token.color("white", "500"),
      py: "6rem",
    },
    tone: {
      inverse: {
        bg: token.color("neutral", "900"),
        border: "0",
        color: token.color("white", "500"),
      },
      muted: {
        bg: token.color("neutral", "100"),
        border: "0",
      },
    },
  },
};
