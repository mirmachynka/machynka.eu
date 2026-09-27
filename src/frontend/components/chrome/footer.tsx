import { createLocalTranslator } from "@trebired/i18n";
import { Icon, SiteFooter } from "@trebired/frontend/react";

import { contactInfo, phoneHref } from "#aequr96wfpxz";
import { ICON_MAIL, ICON_MAP_PIN, ICON_PHONE } from "#gpkp4b4vfavh";
import { useLang } from "#n99t4onl5ufo";
import { navItems } from "./nav_items";

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
        <a href="/" className="inline-row fit-content" data-brand="" data-tbf-soft-redirect="">
        <img src="/footer-logo.svg" alt="MACHYNKA s.r.o." className="tbf-logo" data-footer-logo="" />
        </a>
        <a href={phoneHref(contactInfo.accommodationPhone)} className="inline-row fit-content gap-xs font-bold" data-strong="">
        <Icon spec={ICON_PHONE} />
        {contactInfo.accommodationPhone}
        </a>
        </>
    )}
    columns={[
        {
          heading: tr("footer.navigation"),
          key: "navigation",
          links: navItems(tr).map((link) => ({ href: link.href, label: link.label })),
        },
        {
          heading: tr("footer.contactLabel"),
          key: "contact",
          content: (
            <div className="column gap-sm text-muted">
            <span className="inline-row top gap-xs">
            <Icon spec={ICON_MAP_PIN} />
            <span>{address.street}, {address.postalCode} {address.city}</span>
            </span>
            <a href={`mailto:${contactInfo.email}`} className="inline-row fit-content gap-xs" data-hover-bright="">
            <Icon spec={ICON_MAIL} />
            {contactInfo.email}
            </a>
            </div>
          ),
        },
    ]}
    note={<p>© 2026 MACHYNKA s.r.o. {tr("footer.rights")}</p>}
    tagline={tr("footer.text")}
    />
  );
}
