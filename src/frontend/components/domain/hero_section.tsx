import { createLocalTranslator } from "@trebired/i18n";
import { Icon } from "@trebired/frontend/react";
import type { CSSProperties } from "react";

import { Button } from "#cgroy6iibw7w";
import { ICON_ARROW_RIGHT } from "#gpkp4b4vfavh";
import { MapBackdrop } from "#x3jm3224vb0o";
import { accommodations } from "#2ajuusged5jk";
import { useLang } from "#n99t4onl5ufo";

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

    <div  data-home-hero-inner="">
    <div className="column gap-lg" data-home-hero-content="">
    <div className="column gap-lg" data-home-hero-copy="">
    <h1 data-home-hero-title="" style={{ "--hero-title-chars": titleChars } as CSSProperties}>
    <span data-nowrap="">{titleTop}</span>
    <br />
    <span data-accent="">{titleAccent}</span>
    </h1>

    <p className="text-muted" data-home-hero-text="">{tr("hero.text")}</p>

    <div className="inline-row wrap gap-sm">
    <Button href="/#ubytovani" variant="primary">
    <span>{tr("hero.primary")}</span>
    <Icon spec={ICON_ARROW_RIGHT} />
    </Button>
    <Button href="/#kontakt" variant="outline">
    <span>{tr("hero.secondary")}</span>
    </Button>
    </div>
    </div>

    <div className="grid cols-2 gap-sm" data-stats="">
    <div className="column gap-xs" data-stat="">
    <div>{totalRooms}</div>
    <div>{tr("hero.stats.rooms")}</div>
    </div>
    <div className="column gap-xs" data-stat="">
    <div>{accommodations.length}</div>
    <div>{tr("hero.stats.objects")}</div>
    </div>
    </div>
    </div>
    </div>
    </section>
  );
}
