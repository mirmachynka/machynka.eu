import { createLocalTranslator, type I18nTranslator } from "@trebired/i18n";
import type { CSSProperties } from "react";
import { BrandCanvas, Card, CardBody, Frame, HairlineCell, HairlinePanel, PageBand } from "@trebired/frontend/react";

import { useLang } from "#n99t4onl5ufo";

const CLEAR_SPACE = "2.5rem";
const MIN_HEIGHT = "2rem";
const RULE_COUNT = 4;

const MARKS = [
  { key: "light", logo: "/logo.svg", tone: undefined },
  { key: "muted", logo: "/logo.svg", tone: "muted" },
  { key: "dark", logo: "/footer-logo.svg", tone: "inverse" },
] as const;

const PALETTE = [
  { key: "ink", value: "var(--neutral-900)" },
  { key: "accent", value: "var(--primary-500)" },
  { key: "paper", value: "var(--white-500)" },
] as const;

function BrandingMarks({ tr }: { tr: I18nTranslator }) {
  return (
    <PageBand>
    <div className="column gap-lg">
    <h2 className="tbf-heading--section">{tr("branding.marksTitle")}</h2>
    <div className="grid cols-2 gap-md">
    {MARKS.map((mark) => (
          <BrandCanvas
          key={mark.key}
          caption={tr(`branding.marks.${mark.key}`)}
          clearSpace={CLEAR_SPACE}
          spec={`clear ${CLEAR_SPACE}`}
          tone={mark.tone}
          >
          <img src={mark.logo} alt="MACHYNKA s.r.o." className="tbf-logo" />
          </BrandCanvas>
    ))}
    </div>
    </div>
    </PageBand>
  );
}

function BrandingRules({ tr }: { tr: I18nTranslator }) {
  return (
    <PageBand tone="muted">
    <div className="grid gap-lg">
    <Card>
    <CardBody className="column gap-md">
    <h2 className="tbf-heading--panel">{tr("branding.clearSpaceTitle")}</h2>
    <p className="text-muted">{tr("branding.clearSpaceText")}</p>
    </CardBody>
    </Card>
    <Card>
    <CardBody className="column gap-md">
    <h2 className="tbf-heading--panel">{tr("branding.minSizeTitle")}</h2>
    <p className="text-muted">{tr("branding.minSizeText")}</p>
    <BrandCanvas guides={false} height="8rem" spec={`min ${MIN_HEIGHT}`}>
    <img
    src="/logo.svg"
    alt="MACHYNKA s.r.o."
    className="tbf-logo"
    style={{ "--tbf-surf-logo-root-height": MIN_HEIGHT } as CSSProperties}
    />
    </BrandCanvas>
    </CardBody>
    </Card>
    </div>
    </PageBand>
  );
}

function BrandingPalette({ tr }: { tr: I18nTranslator }) {
  return (
    <PageBand>
    <div className="column gap-lg">
    <h2 className="tbf-heading--section">{tr("branding.paletteTitle")}</h2>
    <HairlinePanel min="14rem">
    {PALETTE.map((swatch) => (
          <HairlineCell key={swatch.key} className="column gap-sm">
          <Frame ratio="3 / 1" style={{ "--tbf-surf-frame-root-bg": swatch.value } as CSSProperties} />
          <span className="tbf-heading--tile">{tr(`branding.palette.${swatch.key}`)}</span>
          </HairlineCell>
    ))}
    </HairlinePanel>
    </div>
    </PageBand>
  );
}

function BrandingDonts({ tr }: { tr: I18nTranslator }) {
  return (
    <PageBand tone="muted">
    <div className="column gap-lg">
    <h2 className="tbf-heading--section">{tr("branding.rulesTitle")}</h2>
    <ul className="column gap-sm text-muted list-plain">
    {Array.from({ length: RULE_COUNT }, (_, index) => index + 1).map((item) => (
          <li key={item}>{tr(`branding.rules.item${item}`)}</li>
    ))}
    </ul>
    </div>
    </PageBand>
  );
}

export function BrandingPage() {
  const lang = useLang();
  const tr = createLocalTranslator(import.meta.url, lang);

  return (
    <main className="column">
    <PageBand tone="inverse">
    <div className="column gap-md">
    <h1 className="tbf-heading--page">{tr("branding.title")}</h1>
    <p className="text-muted">{tr("branding.lead")}</p>
    </div>
    </PageBand>

    <BrandingMarks tr={tr} />
    <BrandingRules tr={tr} />
    <BrandingPalette tr={tr} />
    <BrandingDonts tr={tr} />
    </main>
  );
}
