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
    <a href={property.path} className="column" data-tile-card="" data-tbf-soft-redirect="">
    <div className="tbf-frame" data-media="">
    <img src={property.exteriorImage} alt={name} loading="lazy" className="width-full" data-cover="" />
    <div data-scrim="" />
    <div className="pill" data-badge="">{tr("properties.roomsCount", { count: property.rooms })}</div>
    <div data-corner-arrow="">
    <Icon spec={ICON_ARROW_UP_RIGHT} />
    </div>
    </div>

    <div className="column gap-lg" data-card-body="">
    <div className="column gap-sm">
    <h3 className="tbf-heading--panel">{name}</h3>
    <p className="text-muted">{description}</p>
    </div>

    <div className="grid auto-sm gap-sm" data-feature-grid="">
    {property.features.map((feature, featureIndex) => (
          <div key={feature.label} className="column hor-center gap-xs" data-feature="">
          <div data-tile="mute">
          <Icon spec={feature.icon} />
          </div>
          <span>{ta(`accommodations.${property.id}.features.feature${featureIndex + 1}`)}</span>
          </div>
    ))}
    </div>

    <div className="inline-row wrap between gap-sm border-top padding-top-md">
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
