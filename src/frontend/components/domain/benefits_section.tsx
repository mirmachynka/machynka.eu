import { createLocalTranslator } from "@trebired/i18n";
import { Icon, Section } from "@trebired/frontend/react";

import { CardTable } from "#gqbmqapv1gar";
import { ICON_BED, ICON_MAP_PIN, ICON_WIFI, ICON_COOKING, ICON_SHIELD_CHECK, ICON_SPARKLES } from "#gpkp4b4vfavh";
import { useLang } from "#n99t4onl5ufo";

const BENEFIT_ITEMS = [
  { key: "comfort", icon: ICON_BED },
  { key: "location", icon: ICON_MAP_PIN },
  { key: "wifi", icon: ICON_WIFI },
  { key: "kitchen", icon: ICON_COOKING },
  { key: "safety", icon: ICON_SHIELD_CHECK },
  { key: "cleanliness", icon: ICON_SPARKLES },
] as const;

export function BenefitsSection() {
  const lang = useLang();
  const tr = createLocalTranslator(import.meta.url, lang);

  return (
    <Section tone="inverse">
    <div className="tbf-container column gap-lg">
    <h2 className="tbf-heading--section section-title-light center">{tr("benefits.title")}</h2>

    <CardTable
    items={BENEFIT_ITEMS}
    columns={3}
    tone="dark"
    itemClassName="benefit-card"
    getKey={(item) => item.key}
    renderItem={({ key, icon }) => (
        <>
        <div className="icon-tile benefit-card-icon">
        <Icon spec={icon} />
        </div>
        <div className="column gap-sm">
        <h3>{tr(`benefits.items.${key}.title`)}</h3>
        <p>{tr(`benefits.items.${key}.description`)}</p>
        </div>
        </>
    )}
    />
    </div>
    </Section>
  );
}
