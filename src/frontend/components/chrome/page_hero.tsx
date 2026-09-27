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

    <div className="grid" data-hero-inner="">
    <div className="column gap-lg">
    {back ? (
        <a
        href={back.href}
        className="inline-row fit-content gap-xs label-caps"
        data-back=""
        data-tbf-soft-redirect=""
        >
        <Icon spec={ICON_ARROW_LEFT} />
        {back.label}
        </a>
      ) : null}
    <h1 className="tbf-heading--page">{title}</h1>
    <p className="text-muted" data-hero-lead="">{lead}</p>
    {actions ? <div className="inline-row wrap gap-sm">{actions}</div> : null}
    </div>

    {media ? <div data-hero-media="">{media}</div> : null}
    </div>
    </PageBand>
  );
}
