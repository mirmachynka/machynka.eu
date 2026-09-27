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
    <div className="column gap-md accommodation-panel">
    <Icon spec={ICON_MAP_PIN} className="accommodation-panel-icon" />
    <h2>{tr("accommodationPage.locationTitle")}</h2>
    <p>{mapAddress}</p>
    <div className="map-box">
    <MapEmbed src={mapEmbedUrl} className="map-box-frame" title={tr("accommodationPage.mapTitle", { name })} />
    </div>
    </div>
  );
}
