import { LiveIslandMount, LocaleProvider, RenderCurrentUrlProvider } from "@trebired/frontend/react";
import { configureFrontendLanguage, configureLocaleRouting, isErrorRoutePath, siteBodyHtml } from "@trebired/frontend";
import { language } from "./../../../.trebired/frontend/language";
import { canonicalPath, routeExists } from "#y4hpoyu2xriv";
import { LANG_ROUTING } from "./../shared/lang/policy";
import { buildStaticIconCache, createServerIconRenderer, withIconServerRenderer } from "@trebired/frontend/server";
import { renderToString } from "react-dom/server";
import type { ReactElement } from "react";

import { ALL_ICON_SPECS } from "#gpkp4b4vfavh";
import { Footer } from "#jpydwvtclrzh";
import { Header } from "#d19rad2krym3";
import { PageContent } from "#iacmuxrimql0";

const iconRenderer = createServerIconRenderer(buildStaticIconCache(ALL_ICON_SPECS));

configureFrontendLanguage(language);
configureLocaleRouting(LANG_ROUTING);

export function renderRouteBody(path: string, locale: string): string {
  const localized = (node: ReactElement) => renderToString(
    <RenderCurrentUrlProvider currentUrl={path}>
    <LocaleProvider locale={locale}>{node}</LocaleProvider>
    </RenderCurrentUrlProvider>,
  );
  return withIconServerRenderer(iconRenderer, () => {
      const header = localized(<Header />);
      const content = localized(
        <LiveIslandMount rootId="live_content" stateId="live_content_state">
        <PageContent path={path} />
        </LiveIslandMount>,
      );
      const footer = localized(<Footer />);
      const route = canonicalPath(path);
      const chrome = !isErrorRoutePath(route) && routeExists(route);
      return siteBodyHtml({ chrome, content, footer, header, path });
  });
}
