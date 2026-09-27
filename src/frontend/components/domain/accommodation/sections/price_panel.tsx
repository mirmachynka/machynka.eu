import { Icon } from "@trebired/frontend/react";
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
    <div className="column gap-md accommodation-panel">
    <Icon spec={ICON_RECEIPT} className="accommodation-panel-icon" />
    <h2>{tr("accommodationPage.priceTitle")}</h2>
    <div className="column gap-sm">
    {numbers(PRICE_NOTES_COUNT).map((itemNumber) => (
          <p key={itemNumber}>
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
        <h3 className="accommodation-price-group-title">{tr(`${baseKey}.priceGroups.group${group.groupNumber}.name`)}</h3>
        <div className="column gap-sm">
        {numbers(group.itemCount).map((itemNumber) => (
              <p key={itemNumber} className="accommodation-price-item">
              {tr(`${baseKey}.priceGroups.group${group.groupNumber}.items.item${itemNumber}`)}
              </p>
        ))}
        </div>
        </>
    )}
    />
    <div className="column gap-sm">
    <Button href={phoneHref(reservationPhone)} variant="primary">
    <span>{tr("common.callForPrice")}</span>
    <Icon spec={ICON_PHONE} />
    </Button>
    </div>
    </div>
  );
}
