#!/usr/bin/env bun

import {
  applyProjectConfigsToFrontendBundlerOptions,
  buildFrontendApp,
  buildStaticShell,
  createBunStaticAssetHandler,
} from "@trebired/bundler/frontend-app";
import {
  configureFrontendLanguage,
  createLocaleBootScript,
  createLocaleShellRoutes,
  ERROR_STATUSES,
  errorRoutePath,
  errorShellFileName,
} from "@trebired/frontend";
import { frontendConfigCheck } from "@trebired/frontend/config";
import { language } from "./../../.trebired/frontend/language";
import { readProcessEnvValue } from "@trebired/env";
import { createLog } from "@trebired/logger";
import { runStartup } from "@trebired/startup";
import { readProductIdentity, toPortNumber } from "@trebired/utils";

import seoConfig from "#52dy5geo53fr";
import { LANG_ROUTING } from "#zz37lbnjt359";
import { siteDefines } from "./frontend/options";
import { allRoutePaths } from "#y4hpoyu2xriv";
import { renderRouteBodies } from "./frontend/ssr";
import { siteShellMeta, siteStructuredData } from "./frontend/seo";

type ServedConfig = Awaited<ReturnType<typeof rebuild>>;

const port = toPortNumber(readProcessEnvValue("PORT")) ?? 3000;
const origin = `http://localhost:${port}`;
const logger = createLog({
    console: {
      metadata: true,
      timestamp: false,
    },
    quiet: false,
    save: false,
    source: "machynka-eu",
});

async function rebuild() {

  const config = await applyProjectConfigsToFrontendBundlerOptions({
      define: siteDefines,
      mode: "development",
      rootDir: process.cwd(),
      ssr: false,
  });
  configureFrontendLanguage(language);
  const build = await buildFrontendApp({ ...config, target: "client" });
  const routeBodies = await renderRouteBodies(config.supportedI18nLanguages || []);
  const strategy = seoConfig.localeStrategy;
  const routes = createLocaleShellRoutes({
      meta: siteShellMeta,
      paths: [...allRoutePaths(), ...ERROR_STATUSES.map(errorRoutePath)],
      render: (routePath, locale) => routeBodies[routePath]?.[locale] || "",
      routing: LANG_ROUTING,
      strategy,
  }).map((route) => ({ ...route, body: `${route.body}${siteStructuredData(route.sourcePath, process.cwd())}` }));
  const shell = await buildStaticShell({
      build,
      config,
      meta: { bootScripts: [createLocaleBootScript(LANG_ROUTING, { language, strategy })], lang: "cs" },
      routes,
  });

  for (const file of shell.files) {
    await Bun.write(file.outFile, file.html);
  }

  for (const status of ERROR_STATUSES) {
    const file = shell.files.find((entry) => entry.path === errorRoutePath(status));
    if (file) await Bun.write(`${config.clientOutDir}/${errorShellFileName(status)}`, file.html);
  }

  return config;
}

function serve(config: ServedConfig) {
  return Bun.serve({
      port,
      fetch: createBunStaticAssetHandler({
          clientOutDir: String(config.clientOutDir || "dist"),
          mode: "development",
          publicDir: typeof config.publicDir === "string" ? config.publicDir : undefined,
          rootDir: String(config.rootDir || process.cwd()),
          spaFallback: "404.html",
      }),
  });
}

const identity = readProductIdentity();
const product = { name: identity.displayName, version: identity.version };

let built: ServedConfig | null = null;
let server: ReturnType<typeof serve>|null = null;

await runStartup({
    checks: [frontendConfigCheck()],
    bootstrap: {
      subsystems: [
        {
          id: "frontend-build",
          async bootstrap() {
            built = await rebuild();
          },
        },
        {
          dependsOn: ["frontend-build"],
          id: "http-server",
          bootstrap() {
            if (!built) throw new Error("frontend build unavailable");
            server = serve(built);
          },
          async shutdown() {
            await server?.stop(true);
            server = null;
          },
        },
      ],
    },
    logger,
    messageData: { origin, port, product },
    terminate: (exitCode: number) => process.exit(exitCode),
});
