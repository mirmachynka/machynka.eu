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
    <CardBody className="column gap-md">
    <IconTile glyph="accent" tone="muted">
    <Icon spec={ICON_MAP_PIN} />
    </IconTile>
    <h2 className="tbf-heading--panel">{tr("accommodationPage.locationTitle")}</h2>
    <p className="text-muted">{mapAddress}</p>
    <MapEmbed src={mapEmbedUrl} title={tr("accommodationPage.mapTitle", { name })} />
    </CardBody>
    </Card>
  );
}
