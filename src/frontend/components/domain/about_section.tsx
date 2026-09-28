import { createLocalTranslator } from "@trebired/i18n";
import { AccentRule, Card, CardBody, Icon, IconTile, PageBand } from "@trebired/frontend/react";

import { ICON_AWARD, ICON_BUILDING, ICON_USERS } from "#gpkp4b4vfavh";
import { useLang } from "#n99t4onl5ufo";

const FACTS = [
  { icon: ICON_BUILDING, key: "objects" },
  { icon: ICON_AWARD, key: "years" },
  { icon: ICON_USERS, key: "rooms" },
] as const;

export function AboutSection() {
  const lang = useLang();
  const tr = createLocalTranslator(import.meta.url, lang);

  return (
    <PageBand id="o-nas">
    <div className="tbf-column tbf-gap-lg">
    <h2 className="tbf-heading--section">{tr("about.title")}</h2>

    <div className="tbf-grid tbf-gap-lg">
    <div className="tbf-column tbf-gap-lg">
    <div className="tbf-prose">
    <p>{tr("about.text1")}</p>
    <p>{tr("about.text2")}</p>
    </div>

    <div className="tbf-grid tbf-auto-sm tbf-gap-sm tbf-stretch tbf-stack-mobile">
    {FACTS.map((fact) => (
          <Card key={fact.key} tone="muted">
          <CardBody className="tbf-column tbf-center tbf-gap-sm tbf-hor-center">
          <IconTile>
          <Icon spec={fact.icon} />
          </IconTile>
          <div className="tbf-heading--tile">{tr(`about.stats.${fact.key}`)}</div>
          </CardBody>
          </Card>
    ))}
    </div>
    </div>

    <Card tone="inverse">
    <CardBody>
    <AccentRule className="tbf-column tbf-gap-md">
    <p className="tbf-heading--quote">"{tr("about.quote")}"</p>
    <p className="tbf-label-caps">{tr("about.quoteSource")}</p>
    </AccentRule>
    </CardBody>
    </Card>
    </div>
    </div>
    </PageBand>
  );
}
