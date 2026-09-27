import { createLocalTranslator } from "@trebired/i18n";
import { Icon, Section } from "@trebired/frontend/react";

import { ICON_AWARD, ICON_BUILDING, ICON_USERS } from "#gpkp4b4vfavh";
import { useLang } from "#n99t4onl5ufo";

export function AboutSection() {
  const lang = useLang();
  const tr = createLocalTranslator(import.meta.url, lang);

  return (
    <Section id="o-nas">
    <div className="tbf-container column gap-lg">
    <h2 className="tbf-heading--section about-section-title">{tr("about.title")}</h2>

    <div className="grid about-section-grid">
    <div className="column gap-lg">
    <div className="column gap-md">
    <p className="about-section-text">{tr("about.text1")}</p>
    <p className="about-section-text">{tr("about.text2")}</p>
    </div>

    <div className="grid auto-sm gap-sm about-section-stats">
    <div className="column hor-center gap-sm about-section-stat">
    <Icon spec={ICON_BUILDING} />
    <div>{tr("about.stats.objects")}</div>
    </div>
    <div className="column hor-center gap-sm about-section-stat">
    <Icon spec={ICON_USERS} />
    <div>{tr("about.stats.rooms")}</div>
    </div>
    <div className="column hor-center gap-sm about-section-stat">
    <Icon spec={ICON_AWARD} />
    <div>{tr("about.stats.years")}</div>
    </div>
    </div>
    </div>

    <div className="about-section-quote-card">
    <div className="column gap-md about-section-quote-border">
    <p className="about-section-quote">"{tr("about.quote")}"</p>
    <p className="about-section-quote-source">{tr("about.quoteSource")}</p>
    </div>
    </div>
    </div>
    </div>
    </Section>
  );
}
