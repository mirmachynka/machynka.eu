import { createLocalTranslator } from "@trebired/i18n";
import { AccentRule, Icon } from "@trebired/frontend/react";
import type { CSSProperties } from "react";

import { Button } from "#cgroy6iibw7w";
import { ICON_ARROW_RIGHT, ICON_PHONE } from "#gpkp4b4vfavh";
import { MapBackdrop } from "#x3jm3224vb0o";
import { accommodations } from "#2ajuusged5jk";
import { useLang } from "#n99t4onl5ufo";
import { langHref } from "./../../shared/lang/href";

export function HeroSection() {
  const lang = useLang();
  const tr = createLocalTranslator(import.meta.url, lang);

  const titleTop = tr("hero.titleTop");
  const titleAccent = tr("hero.titleAccent");
  const titleChars = Math.max(titleTop.length, titleAccent.length);
  const totalRooms = accommodations.reduce((sum, item) => sum + item.rooms, 0);

  return (
    <section data-home-hero="">
    <MapBackdrop />

    <div data-home-hero-inner="">
    <div className="tbf-column tbf-gap-lg" data-home-hero-content="">
    <div className="tbf-column tbf-gap-lg" data-home-hero-copy="">
    <h1 data-home-hero-title="" style={{ "--hero-title-chars": titleChars } as CSSProperties}>
    <span data-nowrap="">{titleTop}</span>
    <br />
    <span data-accent="">{titleAccent}</span>
    </h1>

    <p className="tbf-text-muted" data-hero-lead="" data-home-hero-text="">{tr("hero.text")}</p>

    <div className="tbf-inline-row tbf-wrap tbf-gap-sm" data-hero-actions="">
    <Button href={langHref("/#ubytovani", lang)} variant="primary">
    <span>{tr("hero.primary")}</span>
    <Icon spec={ICON_ARROW_RIGHT} />
    </Button>
    <Button href={langHref("/#kontakt", lang)} variant="secondary">
    <span>{tr("hero.secondary")}</span>
    <Icon spec={ICON_PHONE} />
    </Button>
    </div>
    </div>

    <div className="tbf-inline-row tbf-gap-lg" data-stats="">
    <AccentRule className="tbf-column tbf-gap-xs" data-stat="">
    <div>{totalRooms}</div>
    <div className="tbf-label-caps">{tr("hero.stats.rooms")}</div>
    </AccentRule>
    <AccentRule className="tbf-column tbf-gap-xs" data-stat="">
    <div>{accommodations.length}</div>
    <div className="tbf-label-caps">{tr("hero.stats.objects")}</div>
    </AccentRule>
    </div>
    </div>
    </div>
    </section>
  );
}
