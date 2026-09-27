import { Icon } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";

import { CardTable } from "#gqbmqapv1gar";
import { ICON_CLIPBOARD } from "#gpkp4b4vfavh";

const RULE_SECTIONS = [
  { key: "contract", itemCount: 5 },
  { key: "reservation", itemCount: 2 },
  { key: "cancellation", itemCount: 3 },
  { key: "arrival", itemCount: 7 },
  { key: "general", itemCount: 10 },
  { key: "departure", itemCount: 2 },
] as const;

type RulesSectionProps = {
  intro: string;
  tr: I18nTranslator;
  title: string;
};

export function AccommodationRulesSection({ intro, tr, title }: RulesSectionProps) {
  return (
    <div className="column gap-md" data-panel="">
    <Icon spec={ICON_CLIPBOARD} data-panel-icon="" />
    <h2 className="tbf-heading--panel">{title}</h2>
    <p data-lead="">{intro}</p>
    <CardTable
    items={RULE_SECTIONS}
    itemClassName="column gap-sm"
    getKey={(section) => section.key}
    renderItem={(section) => (
        <>
        <h3 className="tbf-heading--tile">{tr(`accommodationRules.items.${section.key}.title`)}</h3>
        <ul className="column gap-sm text-sm text-muted" data-plain-list="">
        {Array.from({ length: section.itemCount }, (_, index) => index + 1).map((itemNumber) => (
              <li key={itemNumber}>{tr(`accommodationRules.items.${section.key}.items.item${itemNumber}`)}</li>
        ))}
        </ul>
        </>
    )}
    />
    </div>
  );
}
