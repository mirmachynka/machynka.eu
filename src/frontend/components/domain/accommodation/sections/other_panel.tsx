import { Icon } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";

import type { Accommodation } from "#2ajuusged5jk";
import { ICON_ARROW_RIGHT } from "#gpkp4b4vfavh";

type OtherPanelProps = {
  related: Accommodation[];
  tr: I18nTranslator;
};

export function AccommodationOtherPanel({ related, tr }: OtherPanelProps) {
  return (
    <div className="column gap-md" data-panel="">
    <h2 className="tbf-heading--panel">{tr("accommodationPage.otherOption")}</h2>
    <div className="column gap-sm">
    {related.map((item) => (
          <a
          key={item.path}
          className="inline-row between gap-sm border-top padding-top-md"
          data-row-link=""
          data-tbf-soft-redirect=""
          href={item.path}
          >
          <span>{tr(`accommodations.${item.id}.name`)}</span>
          <Icon spec={ICON_ARROW_RIGHT} />
          </a>
    ))}
    </div>
    </div>
  );
}
