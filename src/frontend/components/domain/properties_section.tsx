import { createLocalTranslator, type I18nTranslator } from "@trebired/i18n";
import { Icon, Section } from "@trebired/frontend/react";

import { createAccommodationTranslator } from "./accommodation/translator";
import { ICON_ARROW_UP_RIGHT } from "#gpkp4b4vfavh";
import { accommodations, type Accommodation } from "#2ajuusged5jk";
import { useLang } from "#n99t4onl5ufo";

function PropertyCard({ property, ta, tr }: { property: Accommodation; ta: I18nTranslator; tr: I18nTranslator }) {
  const name = ta(`accommodations.${property.id}.name`);
  const description = ta(`accommodations.${property.id}.description`);

  return (
    <a href={property.path} className="property-card" data-tbf-soft-redirect="">
    <div className="tbf-frame property-card-media">
    <img src={property.exteriorImage} alt={name} loading="lazy" className="property-card-image" />
    <div className="property-card-scrim" />
    <div className="pill property-card-badge">{tr("properties.roomsCount", { count: property.rooms })}</div>
    <div className="property-card-arrow">
    <Icon spec={ICON_ARROW_UP_RIGHT} />
    </div>
    </div>

    <div className="column gap-lg property-card-body">
    <div className="column gap-sm">
    <h3 className="property-card-title">{name}</h3>
    <p className="property-card-description">{description}</p>
    </div>

    <div className="property-card-features">
    {property.features.map((feature, featureIndex) => (
          <div key={feature.label} className="column hor-center gap-xs property-card-feature">
          <div className="property-card-feature-icon">
          <Icon spec={feature.icon} />
          </div>
          <span>{ta(`accommodations.${property.id}.features.feature${featureIndex + 1}`)}</span>
          </div>
    ))}
    </div>

    <div className="inline-row wrap between gap-sm border-top padding-top-md property-card-footer">
    <span className="text-sm text-muted">{property.address}</span>
    </div>
    </div>
    </a>
  );
}

export function PropertiesSection() {
  const lang = useLang();
  const tr = createLocalTranslator(import.meta.url, lang);
  const ta = createAccommodationTranslator(lang);

  return (
    <Section id="ubytovani" tone="muted">
    <div className="tbf-container column gap-lg">
    <h2 className="tbf-heading--section">{tr("properties.title")}</h2>

    <div className="grid gap-md">
    {accommodations.map((property) => (
          <PropertyCard key={property.path} property={property} ta={ta} tr={tr} />
    ))}
    </div>
    </div>
    </Section>
  );
}
