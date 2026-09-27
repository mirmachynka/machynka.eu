import { Card, CardBody, Icon, IconTile, TextLink } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";

import type { Accommodation } from "#2ajuusged5jk";
import { ICON_BUILDING, ICON_CLOCK, ICON_PHONE } from "#gpkp4b4vfavh";
import { phoneHref } from "#aequr96wfpxz";
import { numbers } from "#m7bw89v4qsjy";

const STAY_INFO_COUNT = 3;

type AboutPanelProps = {
  accommodation: Accommodation;
  baseKey: string;
  description: string;
  name: string;
  tr: I18nTranslator;
};

export function AccommodationAboutPanel({ accommodation, baseKey, description, name, tr }: AboutPanelProps) {
  return (
    <Card tone="inverse">
    <CardBody className="column gap-md">
    <IconTile glyph="accent" tone="inverse">
    <Icon spec={ICON_BUILDING} />
    </IconTile>
    <h2 className="tbf-heading--panel">{name}</h2>
    <p className="text-muted">{description}</p>
    <div className="column gap-sm">
    {numbers(STAY_INFO_COUNT).map((itemNumber) => (
          <div key={itemNumber} className="inline-row top gap-sm text-sm font-bold">
          <Icon spec={ICON_CLOCK} />
          {tr(`${baseKey}.stayInfo.item${itemNumber}`)}
          </div>
    ))}
    <Card tone="accent">
    <CardBody className="text-sm font-bold">{tr("common.receptionNote")}</CardBody>
    </Card>
    </div>
    {accommodation.contact && (
        <div className="column gap-sm">
        <TextLink className="inline-row fit-content gap-sm text-sm font-bold" href={phoneHref(accommodation.contact.phone)}>
        <Icon spec={ICON_PHONE} />
        {accommodation.contact.phone}
        </TextLink>
        {accommodation.contact.operatorPhone && (
            <TextLink className="inline-row fit-content gap-sm text-sm font-bold" href={phoneHref(accommodation.contact.operatorPhone)}>
            <Icon spec={ICON_PHONE} />
            {tr("accommodationPage.operator")}: {accommodation.contact.operatorPhone}
            </TextLink>
        )}
        </div>
    )}
    </CardBody>
    </Card>
  );
}
