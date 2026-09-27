import { Icon } from "@trebired/frontend/react";
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
    <div className="column gap-md accommodation-panel accommodation-panel-dark">
    <Icon spec={ICON_BUILDING} className="accommodation-panel-icon" />
    <h2>{name}</h2>
    <p>{description}</p>
    <div className="column gap-sm">
    {numbers(STAY_INFO_COUNT).map((itemNumber) => (
          <div key={itemNumber} className="inline-row top gap-sm text-sm font-bold">
          <Icon spec={ICON_CLOCK} />
          {tr(`${baseKey}.stayInfo.item${itemNumber}`)}
          </div>
    ))}
    <p className="contact-panel-note">{tr("common.receptionNote")}</p>
    </div>
    {accommodation.contact && (
        <div className="column gap-sm">
        <a href={phoneHref(accommodation.contact.phone)} className="accommodation-contact-row">
        <Icon spec={ICON_PHONE} />
        {accommodation.contact.phone}
        </a>
        {accommodation.contact.operatorPhone && (
            <a href={phoneHref(accommodation.contact.operatorPhone)} className="accommodation-contact-row">
            <Icon spec={ICON_PHONE} />
            {tr("accommodationPage.operator")}: {accommodation.contact.operatorPhone}
            </a>
        )}
        </div>
    )}
    </div>
  );
}
