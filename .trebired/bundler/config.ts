import { defineConfig } from "@trebired/bundler/config";

export default defineConfig({
    forVersion: "5.13.4",
    build: {
      clientOutDir: "dist",
      publicPath: "/",
    },
    frontend: {
      frontendDir: "src/frontend",
      publicDir: "src/frontend/public",
    },
});
