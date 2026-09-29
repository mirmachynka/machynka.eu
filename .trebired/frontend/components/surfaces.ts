import { token } from "#i0bvtbidf4kj";

const white = token.color("white", "500");
const accent = token.color("primary", "500");
const ink = token.color("neutral", "900");

export const surfaces = {
  actionRow: {
    arrow: { color: token.color("neutral", "400") },
    root: { bg: token.color("neutral", "100"), gap: "1.5rem", padding: "1.5rem" },
    states: { hover: { bg: accent, color: white } },
    value: { fontSize: "1.5rem", fontWeight: "900" },
  },
  band: {
    root: {
      bg: white,
      max: "80rem",
      px: "clamp(1rem, 3vw, 2rem)",
      py: "clamp(3rem, 6vw, 5rem)",
    },
    tones: {
      inverse: { bg: ink, color: white },
      muted: { bg: token.color("neutral", "100") },
    },
  },
  card: {
    root: {
      bg: white,
      border: `1px solid ${token.color("neutral", "200")}`,
      padding: "17px",
    },
    states: { hover: { border: ink } },
    tones: {
      accent: { bg: accent, border: accent, color: white },
      inverse: { bg: ink, border: ink, color: token.color("neutral", "300"), textMuted: token.color("neutral", "400") },
      muted: { bg: token.color("neutral", "100"), border: token.color("neutral", "100"), color: ink },
    },
  },
  frame: {
    action: {
      bg: white,
      color: ink,
      offset: "1.5rem",
      size: "3.5rem",
      states: { hover: { bg: accent, color: white } },
    },
    badge: { offset: "1.5rem" },
    caption: { bg: accent, color: white, padding: "1.25rem" },
    root: { bg: ink, border: "0" },
  },
  hairline: {
    cell: { padding: "1.5rem" },
    root: {
      bg: "color-mix(in srgb, currentColor 10%, transparent)",
      border: "0",
    },
  },
  logo: { root: { height: "3rem" } },
  rule: { root: { color: accent, gap: "1rem", width: "4px" } },
  scrollbar: {
    root: { gutter: "auto" },
  },
  tag: {
    root: {
      bg: token.color("neutral", "100"),
      color: ink,
      fontWeight: "900",
      textTransform: "uppercase",
    },
    tones: { accent: { bg: accent, color: white }, inverse: { bg: ink, color: white } },
  },
  tile: {
    sizes: { lg: { glyph: "1.5rem", size: "3.5rem" }, sm: { glyph: "1rem", size: "2.5rem" } },
    slots: { glyph: { accent } },
    tones: {
      inverse: { bg: token.color("neutral", "800"), color: white },
      muted: { bg: token.color("neutral", "100"), color: ink },
      surface: { bg: white, color: ink },
    },
  },
};
