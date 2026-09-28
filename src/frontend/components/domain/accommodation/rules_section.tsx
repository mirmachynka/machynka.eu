import { Card, CardBody, Icon, IconTile } from "@trebired/frontend/react";
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
    <Card>
    <CardBody className="tbf-column tbf-gap-md">
    <IconTile glyph="accent" tone="muted">
    <Icon spec={ICON_CLIPBOARD} />
    </IconTile>
    <h2 className="tbf-heading--panel">{title}</h2>
    <p className="tbf-text-muted">{intro}</p>
    <CardTable
    items={RULE_SECTIONS}
    itemClassName="column gap-sm"
    getKey={(section) => section.key}
    renderItem={(section) => (
        <>
        <h3 className="tbf-heading--tile">{tr(`accommodationRules.items.${section.key}.title`)}</h3>
        <ul className="tbf-column tbf-gap-sm tbf-text-sm tbf-text-muted tbf-list-plain">
        {Array.from({ length: section.itemCount }, (_, index) => index + 1).map((itemNumber) => (
              <li key={itemNumber}>{tr(`accommodationRules.items.${section.key}.items.item${itemNumber}`)}</li>
        ))}
        </ul>
        </>
    )}
    />
    </CardBody>
    </Card>
  );
}
