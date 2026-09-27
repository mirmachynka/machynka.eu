import { Icon, MapEmbed } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";

import { ICON_MAP_PIN } from "#gpkp4b4vfavh";

type LocationPanelProps = {
  mapAddress: string;
  mapEmbedUrl: string;
  name: string;
  tr: I18nTranslator;
};

export function AccommodationLocationPanel({ mapAddress, mapEmbedUrl, name, tr }: LocationPanelProps) {
  return (
    <div className="column gap-md" data-panel="">
    <Icon spec={ICON_MAP_PIN} data-panel-icon="" />
    <h2 className="tbf-heading--panel">{tr("accommodationPage.locationTitle")}</h2>
    <p>{mapAddress}</p>
    <div data-map="">
    <MapEmbed src={mapEmbedUrl} data-map-frame="" title={tr("accommodationPage.mapTitle", { name })} />
    </div>
    </div>
  );
}
