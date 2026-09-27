import type { FrontendComponentsConfig } from "@trebired/frontend/config";

import { button } from "./button";
import { surfaces } from "./surfaces";
import { typography } from "./typography";
import { overlays } from "./overlays";
import { shell } from "./shell";

export const components = {
  overlays,
  shell,
  surfaces: {
    ...surfaces,
    button,
  },
  typography,
} satisfies FrontendComponentsConfig;
