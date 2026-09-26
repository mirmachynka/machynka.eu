import { defineConfig } from "@trebired/code-discipline";

export default defineConfig({
    forVersion: "7.2.3",
    presets: {
      use: ["@trebired/configs"],
    },
    rules: {
      bannedPatterns: {
        patterns: [
          { value: "machynka.eu", allowedFiles: ["package.json", "netlify.toml"] },
        ],
      },
    },
});
