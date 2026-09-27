import { Frame, FrameCaption, FrameCover, FrameScrim, Icon, PageBand } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";

import { Button } from "#cgroy6iibw7w";
import type { Accommodation } from "#2ajuusged5jk";
import { ICON_ARROW_LEFT, ICON_ARROW_RIGHT } from "#gpkp4b4vfavh";
import { MapBackdrop } from "#x3jm3224vb0o";

type HeroProps = {
  accommodation: Accommodation;
  detail: string;
  mapAddress: string;
  name: string;
  tr: I18nTranslator;
};

export function AccommodationHero({ accommodation, detail, mapAddress, name, tr }: HeroProps) {
  return (
    <PageBand tone="inverse" data-hero="">
    <MapBackdrop />

    <div className="grid" data-hero-inner="">
    <div className="column gap-lg">
    <a
    href="/#ubytovani"
    className="inline-row fit-content gap-xs label-caps"
    data-back=""
    data-tbf-soft-redirect=""
    >
    <Icon spec={ICON_ARROW_LEFT} />
    {tr("common.backToAccommodation")}
    </a>
    <h1 className="tbf-heading--page">{name}</h1>
    <p className="text-muted">{detail}</p>
    <div className="inline-row wrap gap-sm">
    <Button href="#kontakt" variant="primary">
    <span>{tr("common.reserveRoom")}</span>
    <Icon spec={ICON_ARROW_RIGHT} />
    </Button>
    </div>
    </div>

    <div data-hero-media="">
    <Frame ratio="4 / 5">
    <FrameCover src={accommodation.exteriorImage} alt={name} />
    <FrameScrim />
    <FrameCaption className="column gap-xs2">
    <p className="font-bold">{mapAddress}</p>
    <p className="label-caps">{tr("common.accommodationInBucovice")}</p>
    </FrameCaption>
    </Frame>
    </div>
    </div>
    </PageBand>
  );
}
