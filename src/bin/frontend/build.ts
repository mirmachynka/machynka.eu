#!/usr/bin/env bun

import {
  applyProjectConfigsToFrontendBundlerOptions,
  buildFrontendApp,
  buildStaticShell,
} from "@trebired/bundler/frontend-app";
import {
  createLocaleBootScript,
  createLocaleShellRoutes,
  ERROR_STATUSES,
  errorRoutePath,
  errorShellFileName,
} from "@trebired/frontend";
import { configureFrontendLanguage } from "@trebired/frontend";
import { language } from "./../../../.trebired/frontend/language";
import { createLog } from "@trebired/logger";

import seoConfig from "#52dy5geo53fr";
import { siteDefines } from "./options";
import { allRoutePaths } from "#y4hpoyu2xriv";
import { LANG_ROUTING } from "#zz37lbnjt359";
import { renderRouteBodies } from "./ssr";
import { siteRobotsTxt, siteShellMeta, siteSitemap, siteStructuredData } from "./seo";

const target = (process.argv[2] || "client") as "all" | "client" | "ssr";
const logger = createLog({
    console: {
      metadata: false,
      timestamp: false,
    },
    quiet: true,
    save: false,
    source: "machynka-eu",
});

const config = await applyProjectConfigsToFrontendBundlerOptions({
    define: siteDefines,
    mode: "production",
    rootDir: process.cwd(),
    ssr: false,
});
configureFrontendLanguage(language);
const build = await buildFrontendApp({ ...config, target });
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

await Bun.write(`${config.clientOutDir}/robots.txt`, siteRobotsTxt());
await Bun.write(`${config.clientOutDir}/sitemap.xml`, siteSitemap());

logger.success(
  "machynka.build",
  `build complete :: client_files=${build.client?.outputs.length ?? 0} route_shells=${shell.files.length}`,
);
