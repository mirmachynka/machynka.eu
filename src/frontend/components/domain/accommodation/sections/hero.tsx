import { Icon } from "@trebired/frontend/react";
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
    <section className="accommodation-hero">
    <MapBackdrop />

    <div className="accommodation-hero-inner">
    <div className="column gap-lg accommodation-hero-copy">
    <a href="/#ubytovani" className="accommodation-back-link" data-tbf-soft-redirect="">
    <Icon spec={ICON_ARROW_LEFT} />
    {tr("common.backToAccommodation")}
    </a>
    <h1 className="accommodation-hero-title">{name}</h1>
    <p className="accommodation-hero-detail">{detail}</p>
    <div className="inline-row wrap gap-sm">
    <Button href="#kontakt" variant="primary">
    <span>{tr("common.reserveRoom")}</span>
    <Icon spec={ICON_ARROW_RIGHT} />
    </Button>
    </div>
    </div>

    <div className="accommodation-hero-media">
    <div className="tbf-frame accommodation-hero-image-wrap">
    <img src={accommodation.exteriorImage} alt={name} className="accommodation-hero-image" />
    <div className="accommodation-hero-image-scrim" />
    <div className="column gap-xs2 accommodation-hero-address">
    <p className="accommodation-hero-address-text">{mapAddress}</p>
    <p className="accommodation-hero-address-label">{tr("common.accommodationInBucovice")}</p>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
