import { createLocalTranslator } from "@trebired/i18n";
import { Icon } from "@trebired/frontend/react";

import { ICON_AWARD, ICON_BUILDING, ICON_USERS } from "#gpkp4b4vfavh";
import { useLang } from "#n99t4onl5ufo";

export function AboutSection() {
  const lang = useLang();
  const tr = createLocalTranslator(import.meta.url, lang);

  return (
    <section id="o-nas" data-band="">
    <div className="column gap-lg">
    <h2 className="tbf-heading--section">{tr("about.title")}</h2>

    <div className="grid" data-split="">
    <div className="column gap-lg">
    <div className="column gap-md">
    <p className="text-muted" data-copy="">{tr("about.text1")}</p>
    <p className="text-muted" data-copy="">{tr("about.text2")}</p>
    </div>

    <div className="grid auto-sm gap-sm">
    <div className="column hor-center gap-sm" data-fact="">
    <Icon spec={ICON_BUILDING} />
    <div>{tr("about.stats.objects")}</div>
    </div>
    <div className="column hor-center gap-sm" data-fact="">
    <Icon spec={ICON_USERS} />
    <div>{tr("about.stats.rooms")}</div>
    </div>
    <div className="column hor-center gap-sm" data-fact="">
    <Icon spec={ICON_AWARD} />
    <div>{tr("about.stats.years")}</div>
    </div>
    </div>
    </div>

    <div data-quote-card="">
    <div className="column gap-md" data-quote-rule="">
    <p data-quote="">"{tr("about.quote")}"</p>
    <p className="label-caps" data-quote-source="">{tr("about.quoteSource")}</p>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
