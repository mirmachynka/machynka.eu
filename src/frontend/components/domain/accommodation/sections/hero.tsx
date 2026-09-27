import { Frame, FrameCaption, FrameCover, FrameScrim, Icon } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";

import { Button } from "#cgroy6iibw7w";
import type { Accommodation } from "#2ajuusged5jk";
import { ICON_ARROW_RIGHT } from "#gpkp4b4vfavh";
import { PageHero } from "./../../../chrome/page_hero";

type HeroProps = {
  accommodation: Accommodation;
  detail: string;
  mapAddress: string;
  name: string;
  tr: I18nTranslator;
};

export function AccommodationHero({ accommodation, detail, mapAddress, name, tr }: HeroProps) {
  return (
    <PageHero
    back={{ href: "/#ubytovani", label: tr("common.backToAccommodation") }}
    lead={detail}
    title={name}
    actions={(
        <Button href="#kontakt" variant="primary">
        <span>{tr("common.reserveRoom")}</span>
        <Icon spec={ICON_ARROW_RIGHT} />
        </Button>
    )}
    media={(
        <Frame ratio="4 / 5">
        <FrameCover src={accommodation.exteriorImage} alt={name} />
        <FrameScrim />
        <FrameCaption className="column gap-xs2">
        <p className="font-bold">{mapAddress}</p>
        <p className="label-caps">{tr("common.accommodationInBucovice")}</p>
        </FrameCaption>
        </Frame>
    )}
    />
  );
}
