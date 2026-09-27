import {
  bindFrontendRuntime,
  configureLocaleRouting,
  configureSpa,
  currentRoutePath,
  setCurrentLocale,
  SITE_FOOTER_ROOT_SELECTOR,
  SITE_HEADER_ROOT_SELECTOR,
} from "@trebired/frontend";
import "@trebired/frontend/static-icons";
import { createBrowserLog } from "@trebired/logger/browser";
import { LogErrorBoundary, LogProvider } from "@trebired/logger/browser/react";
import { LocaleProvider } from "@trebired/frontend/react";
import type { ReactElement } from "react";

import { Footer } from "#jpydwvtclrzh";
import { Header } from "#d19rad2krym3";
import { hydrateChromeRoots } from "#pgsley9n980u";
import { mountContentIsland } from "#6zkiijbcfna0";
import { LANG_ROUTING } from "./../shared/lang/policy";
import type { Lang } from "./../shared/lang/policy";
import { langHref } from "./../shared/lang/href";

configureLocaleRouting(LANG_ROUTING);

const log = createBrowserLog({
    group: "frontend.app",
    source: "machynka-eu",
});

function observed(node: ReactElement) {
  return (
    <LogProvider log={log}>
    <LocaleProvider>
    <LogErrorBoundary group="frontend.chrome">{node}</LogErrorBoundary>
    </LocaleProvider>
    </LogProvider>
  );
}

configureSpa({});

function switchLocale(lang: string) {
  const target = langHref(currentRoutePath(), lang as Lang);
  const { hash, search } = window.location;
  window.history.replaceState(window.history.state, "", `${target}${search}${hash}`);
  return setCurrentLocale(lang);
}

void hydrateChromeRoots([
    [SITE_HEADER_ROOT_SELECTOR, observed(<Header />)],
    [SITE_FOOTER_ROOT_SELECTOR, observed(<Footer />)],
]).then(() => {
    bindFrontendRuntime(document, {
        icons: { mode: "static" },
        locale: {
          persistLocale: async() => ({ ok: true }),
          refresh: (lang) => switchLocale(String(lang)),
        },
    });
    mountContentIsland("live_content");
});
