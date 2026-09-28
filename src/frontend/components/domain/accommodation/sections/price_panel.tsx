import { Card, CardBody, Icon, IconTile } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";

import { Button } from "#cgroy6iibw7w";
import { CardTable } from "#gqbmqapv1gar";
import type { Accommodation } from "#2ajuusged5jk";
import { ICON_PHONE, ICON_RECEIPT } from "#gpkp4b4vfavh";
import { phoneHref } from "#aequr96wfpxz";
import { numbers } from "#m7bw89v4qsjy";

const PRICE_NOTES_COUNT = 2;

type PricePanelProps = {
  accommodation: Accommodation;
  baseKey: string;
  priceGroupItemCounts: number[];
  reservationPhone: string;
  tr: I18nTranslator;
};

export function AccommodationPricePanel({ accommodation, baseKey, priceGroupItemCounts, reservationPhone, tr }: PricePanelProps) {
  const groups = priceGroupItemCounts.map((itemCount, index) => ({ groupNumber: index + 1, itemCount }));

  return (
    <Card>
    <CardBody className="tbf-column tbf-gap-md">
    <IconTile glyph="accent" tone="muted">
    <Icon spec={ICON_RECEIPT} />
    </IconTile>
    <h2 className="tbf-heading--panel">{tr("accommodationPage.priceTitle")}</h2>
    <div className="tbf-column tbf-gap-sm">
    {numbers(PRICE_NOTES_COUNT).map((itemNumber) => (
          <p key={itemNumber} className="tbf-text-muted">
          {tr(`${baseKey}.priceNotes.item${itemNumber}`)}
          </p>
    ))}
    </div>
    <CardTable
    items={groups}
    columns={3}
    itemClassName="column gap-sm"
    getKey={(group) => group.groupNumber}
    renderItem={(group) => (
        <>
        <h3 className="tbf-heading--tile">{tr(`${baseKey}.priceGroups.group${group.groupNumber}.name`)}</h3>
        <div className="tbf-column tbf-gap-sm">
        {numbers(group.itemCount).map((itemNumber) => (
              <p key={itemNumber} className="tbf-text-sm tbf-font-bold tbf-text-muted">
              {tr(`${baseKey}.priceGroups.group${group.groupNumber}.items.item${itemNumber}`)}
              </p>
        ))}
        </div>
        </>
    )}
    />
    <div className="tbf-column tbf-gap-sm">
    <Button href={phoneHref(reservationPhone)} variant="primary">
    <span>{tr("common.callForPrice")}</span>
    <Icon spec={ICON_PHONE} />
    </Button>
    </div>
    </CardBody>
    </Card>
  );
}
