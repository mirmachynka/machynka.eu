import { createLocalTranslator, type I18nTranslator } from "@trebired/i18n";
import {
  Card,
  CardBody,
  Frame,
  FrameAction,
  FrameCover,
  FrameScrim,
  Icon,
  IconTile,
  PageBand,
  Tag,
} from "@trebired/frontend/react";

import { createAccommodationTranslator } from "./accommodation/translator";
import { ICON_ARROW_UP_RIGHT } from "#gpkp4b4vfavh";
import { accommodations, type Accommodation } from "#2ajuusged5jk";
import { useLang } from "#n99t4onl5ufo";

function PropertyCard({ property, ta, tr }: { property: Accommodation; ta: I18nTranslator; tr: I18nTranslator }) {
  const name = ta(`accommodations.${property.id}.name`);
  const description = ta(`accommodations.${property.id}.description`);

  return (
    <Card as="a" className="column" href={property.path} softRedirect>
    <Frame ratio="16 / 10">
    <FrameCover src={property.exteriorImage} alt={name} loading="lazy" />
    <FrameScrim />
    <Tag className="tbf-frame__badge" tone="accent">
    {tr("properties.roomsCount", { count: property.rooms })}
    </Tag>
    <FrameAction>
    <Icon spec={ICON_ARROW_UP_RIGHT} />
    </FrameAction>
    </Frame>

    <CardBody className="column gap-lg">
    <div className="column gap-sm">
    <h3 className="tbf-heading--panel">{name}</h3>
    <p className="text-muted">{description}</p>
    </div>

    <div className="grid auto-sm gap-sm">
    {property.features.map((feature, featureIndex) => (
          <div key={feature.label} className="column center hor-center gap-xs">
          <IconTile tone="muted">
          <Icon spec={feature.icon} />
          </IconTile>
          <span className="label-caps">
          {ta(`accommodations.${property.id}.features.feature${featureIndex + 1}`)}
          </span>
          </div>
    ))}
    </div>

    <div className="inline-row wrap between gap-sm border-top padding-top-md">
    <span className="text-sm text-muted">{property.address}</span>
    </div>
    </CardBody>
    </Card>
  );
}

export function PropertiesSection() {
  const lang = useLang();
  const tr = createLocalTranslator(import.meta.url, lang);
  const ta = createAccommodationTranslator(lang);

  return (
    <PageBand id="ubytovani" tone="muted">
    <div className="column gap-lg">
    <h2 className="tbf-heading--section">{tr("properties.title")}</h2>

    <div className="grid gap-md">
    {accommodations.map((property) => (
          <PropertyCard key={property.path} property={property} ta={ta} tr={tr} />
    ))}
    </div>
    </div>
    </PageBand>
  );
}
