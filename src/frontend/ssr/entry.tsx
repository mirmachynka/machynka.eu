import { LiveIslandMount, LocaleProvider } from "@trebired/frontend/react";
import { configureFrontendLanguage, isErrorRoutePath, siteBodyHtml } from "@trebired/frontend";
import { language } from "./../../../.trebired/frontend/language";
import { canonicalPath, routeExists } from "#y4hpoyu2xriv";
import { buildStaticIconCache, createServerIconRenderer, withIconServerRenderer } from "@trebired/frontend/server";
import { renderToString } from "react-dom/server";
import type { ReactElement } from "react";

import { ALL_ICON_SPECS } from "#gpkp4b4vfavh";
import { Footer } from "#jpydwvtclrzh";
import { Header } from "#d19rad2krym3";
import { PageContent } from "#iacmuxrimql0";

const iconRenderer = createServerIconRenderer(buildStaticIconCache(ALL_ICON_SPECS));

configureFrontendLanguage(language);

export function renderRouteBody(path: string, locale: string): string {
  const localized = (node: ReactElement) => renderToString(
    <LocaleProvider locale={locale}>{node}</LocaleProvider>,
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
