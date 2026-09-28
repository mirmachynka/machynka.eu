import { createLocalTranslator, type I18nTranslator } from "@trebired/i18n";
import { Icon, SiteFooter, TextLink } from "@trebired/frontend/react";

import { contactInfo } from "#aequr96wfpxz";
import { ICON_MAIL, ICON_MAP_PIN } from "#gpkp4b4vfavh";
import { useLang } from "#n99t4onl5ufo";
import { footerNavItems } from "./nav_items";
import { langHref } from "./../../shared/lang/href";

function FooterNote({ tr }: { tr: I18nTranslator }) {
  return (
    <div className="tbf-column tbf-gap-xs">
    <p>© 2026 MACHYNKA s.r.o. {tr("footer.rights")}</p>
    <p className="tbf-text-sm">{tr("footer.legacyNotice", { email: contactInfo.email })}</p>
    </div>
  );
}

export function Footer() {
  const lang = useLang();
  const tr = createLocalTranslator(import.meta.url, lang);
  const address = contactInfo.contactAddress;

  return (
    <SiteFooter
    softRedirect
    tone="inverse"
    brand={(
        <>
        <a href={langHref("/", lang)} className="tbf-inline-row tbf-fit-content" data-tbf-soft-redirect="">
        <img src="/footer-logo.svg" alt="MACHYNKA s.r.o." className="tbf-logo" />
        </a>
        </>
    )}
    columns={[
        {
          heading: tr("footer.navigation"),
          key: "navigation",
          links: footerNavItems(tr, lang).map((link) => ({ href: link.href, label: link.label })),
        },
        {
          heading: tr("footer.contactLabel"),
          key: "contact",
          content: (
            <div className="tbf-column tbf-gap-sm tbf-text-muted">
            <span className="tbf-inline-row tbf-top tbf-gap-xs">
            <Icon spec={ICON_MAP_PIN} />
            <span>{address.street}, {address.postalCode} {address.city}</span>
            </span>
            <TextLink href={`mailto:${contactInfo.email}`} className="tbf-inline-row tbf-wrap tbf-fit-content tbf-gap-xs">
            <Icon spec={ICON_MAIL} />
            {contactInfo.email}
            </TextLink>
            </div>
          ),
        },
    ]}
    note={<FooterNote tr={tr} />}
    tagline={tr("footer.text")}
    />
  );
}
