import type { I18nTranslator } from "@trebired/i18n";
import { Icon, IconTile, PageBand } from "@trebired/frontend/react";

import { CardTable } from "#gqbmqapv1gar";
import type { Accommodation } from "#2ajuusged5jk";

type FeaturesProps = {
  accommodation: Accommodation;
  baseKey: string;
  tr: I18nTranslator;
};

export function AccommodationFeatures({ accommodation, baseKey, tr }: FeaturesProps) {
  return (
    <PageBand>
    <div className="tbf-column tbf-gap-lg">
    <h2 className="tbf-heading--section">{tr("accommodationPage.featuresTitle")}</h2>

    <CardTable
    items={accommodation.features}
    columns={2}
    getKey={(feature) => feature.label}
    itemClassName="column gap-md"
    renderItem={(feature, index) => (
        <>
        <IconTile size="lg" tone="muted">
        <Icon spec={feature.icon} />
        </IconTile>
        <h3 className="tbf-heading--tile">{tr(`${baseKey}.features.feature${index + 1}`)}</h3>
        </>
    )}
    />
    </div>
    </PageBand>
  );
}
