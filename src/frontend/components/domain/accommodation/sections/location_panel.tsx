import { Card, CardBody, Icon, IconTile, MapEmbed } from "@trebired/frontend/react";
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
    <Card>
    <CardBody className="tbf-column tbf-gap-md">
    <IconTile glyph="accent" tone="muted">
    <Icon spec={ICON_MAP_PIN} />
    </IconTile>
    <h2 className="tbf-heading--panel">{tr("accommodationPage.locationTitle")}</h2>
    <p className="tbf-text-muted">{mapAddress}</p>
    <MapEmbed aspectRatio="4 / 3" src={mapEmbedUrl} title={tr("accommodationPage.mapTitle", { name })} />
    </CardBody>
    </Card>
  );
}
