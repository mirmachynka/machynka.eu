import type { I18nTranslator } from "@trebired/i18n";
import { Icon, Section } from "@trebired/frontend/react";

import { CardTable } from "#gqbmqapv1gar";
import type { Accommodation } from "#2ajuusged5jk";

type FeaturesProps = {
  accommodation: Accommodation;
  baseKey: string;
  tr: I18nTranslator;
};

export function AccommodationFeatures({ accommodation, baseKey, tr }: FeaturesProps) {
  return (
    <Section>
    <div className="tbf-container column gap-lg">
    <h2 className="tbf-heading--section">{tr("accommodationPage.featuresTitle")}</h2>

    <CardTable
    items={accommodation.features}
    columns={2}
    getKey={(feature) => feature.label}
    itemClassName="column gap-md accommodation-feature-cell"
    renderItem={(feature, index) => (
        <>
        <div className="icon-tile accommodation-feature-icon">
        <Icon spec={feature.icon} />
        </div>
        <h3>{tr(`${baseKey}.features.feature${index + 1}`)}</h3>
        </>
    )}
    />
    </div>
    </Section>
  );
}
