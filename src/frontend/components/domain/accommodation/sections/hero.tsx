import { Icon, Section } from "@trebired/frontend/react";
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
    <Section data-hero="" tone="inverse">
    <MapBackdrop />

    <div className="tbf-container grid" data-hero-inner="">
    <div className="column gap-lg">
    <a
    href="/#ubytovani"
    className="inline-row fit-content gap-xs text-sm font-bold text-muted"
    data-back=""
    data-tbf-soft-redirect=""
    >
    <Icon spec={ICON_ARROW_LEFT} />
    {tr("common.backToAccommodation")}
    </a>
    <h1 className="tbf-heading--page">{name}</h1>
    <p className="text-muted" data-lead="">{detail}</p>
    <div className="inline-row wrap gap-sm">
    <Button href="#kontakt" variant="primary">
    <span>{tr("common.reserveRoom")}</span>
    <Icon spec={ICON_ARROW_RIGHT} />
    </Button>
    </div>
    </div>

    <div data-hero-media="">
    <div className="tbf-frame" data-portrait="">
    <img src={accommodation.exteriorImage} alt={name} className="width-full" data-cover="" />
    <div data-scrim=""></div>
    <div className="column gap-xs2" data-address="">
    <p>{mapAddress}</p>
    <p className="label-caps" data-on-primary="">{tr("common.accommodationInBucovice")}</p>
    </div>
    </div>
    </div>
    </div>
    </Section>
  );
}
