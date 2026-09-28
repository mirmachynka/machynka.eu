import { Icon, PageBand } from "@trebired/frontend/react";
import type { ReactNode } from "react";

import { ICON_ARROW_LEFT } from "#gpkp4b4vfavh";
import { MapBackdrop } from "#x3jm3224vb0o";

type PageHeroSize = "compact" | "full";

type PageHeroProps = {
  actions?: ReactNode;
  back?: { href: string; label: string };
  lead: string;
  media?: ReactNode;
  size?: PageHeroSize;
  title: string;
};

export function PageHero({ actions, back, lead, media, size = "full", title }: PageHeroProps) {
  return (
    <PageBand tone="inverse" data-hero={size}>
    <MapBackdrop />

    <div className="tbf-grid" data-hero-inner="">
    <div className="tbf-column tbf-gap-lg">
    {back ? (
        <a
        href={back.href}
        className="tbf-inline-row tbf-fit-content tbf-gap-xs tbf-label-caps"
        data-back=""
        data-tbf-soft-redirect=""
        >
        <Icon spec={ICON_ARROW_LEFT} />
        {back.label}
        </a>
      ) : null}
    <h1 className="tbf-heading--page">{title}</h1>
    <p className="tbf-text-muted" data-hero-lead="">{lead}</p>
    {actions ? <div className="tbf-inline-row tbf-wrap tbf-gap-sm" data-hero-actions="">{actions}</div> : null}
    </div>

    {media ? <div data-hero-media="">{media}</div> : null}
    </div>
    </PageBand>
  );
}
