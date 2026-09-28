import type { FrontendPaletteStep } from "@trebired/frontend/config";

import { semantic, token, ui } from "#i0bvtbidf4kj";
import { palette } from "#lub199gl3q3w";

const white = token.color("white", "500");
const neutral = (step: FrontendPaletteStep<typeof palette, "neutral">) => token.color("neutral", step);

export const button = {
  root: {
    background: "transparent",
    border: `2px solid ${semantic.borderSurface2}`,
    color: semantic.textColor,
    fontFamily: ui.fontSans,
    fontSize: "1rem",
    fontWeight: "900",
    gap: "0.5rem",
    height: "3.5rem",
    letterSpacing: "0.025em",
    paddingBlock: "0",
    paddingInline: "1.375rem",
    radius: "0",
    textTransform: "uppercase",
    whiteSpace: "normal",
  },
  variants: {
    ghost: {
      background: white,
      borderColor: white,
      color: neutral("900"),
      states: {
        hover: {
          background: neutral("200"),
          borderColor: neutral("200"),
          color: neutral("900"),
        },
      },
    },
    primary: {
      background: semantic.highlight,
      borderColor: semantic.highlight,
      borderWidth: "0",
      color: semantic.surface1,
      states: {
        hover: {
          background: token.colorMix(semantic.highlight, "92%", "black"),
          borderColor: token.colorMix(semantic.highlight, "92%", "black"),
          color: semantic.surface1,
        },
      },
    },
    secondary: {
      background: "transparent",
      borderColor: white,
      color: white,
      states: {
        hover: {
          background: white,
          borderColor: white,
          color: neutral("900"),
        },
      },
    },
  },
};
