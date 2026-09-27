import type { FrontendComponentsConfig } from "@trebired/frontend/config";

import { button } from "./button";
import { primitives } from "./primitives";
import { surfaces } from "./surfaces";
import { typography } from "./typography";
import { overlays } from "./overlays";
import { shell } from "./shell";

export const components = {
  overlays,
  primitives,
  shell,
  surfaces: {
    ...surfaces,
    button,
  },
  typography,
} satisfies FrontendComponentsConfig;
