import { defineConfig } from "@trebired/frontend/config";

import { ALL_ICON_SPECS } from "#gpkp4b4vfavh";

import { components } from "./components";
import { language } from "./language";
import { palette } from "./palette";
import { systems } from "./systems";
import { interactions, runtime, semantics } from "./theme";
import { breakpoints } from "./typography";

export default defineConfig({
    forVersion: "20.7.0",
    assets: {
      favicon: {
        default: "src/brand/favicon.svg",
        light: "src/brand/favicon-light.svg",
        dark: "src/brand/favicon-dark.svg",
      },
      fonts: {
        families: {
          sans: {
            package: "geist",
            family: "Geist",
            subsets: ["latin", "latin-ext"],
            weights: [400, 500, 600, 700, 800, 900],
          },
        },
        sans: '"Geist", sans-serif',
      },
      icons: {
        endpoint: false,
        mode: "static",
        packs: ["remixicon"],
        specs: ALL_ICON_SPECS,
      },
    },
    components,
    language,
    design: {
      breakpoints,
      interactions,
      palette,
      scales: { radius: { lg: 0, md: 0, sm: 0, xl: 0, xl2: 0, xs: 0 } },
      scrollBehavior: "smooth",
      semantics,
    },
    runtime,
    systems,
});
