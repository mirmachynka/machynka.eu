import type { I18nTranslator } from "@trebired/i18n";

import { langHref } from "./../../shared/lang/href";
import type { Lang } from "./../../shared/lang/policy";

export type NavItem = {
  href: string;
  label: string;
};

export function navItems(tr: I18nTranslator, lang: Lang): NavItem[] {
  return [
    { href: langHref("/", lang), label: tr("nav.home") },
    { href: langHref("/#ubytovani", lang), label: tr("nav.accommodation") },
    { href: langHref("/#o-nas", lang), label: tr("nav.about") },
    { href: langHref("/#kontakt", lang), label: tr("nav.contact") },
    { href: langHref("/znacka", lang), label: tr("nav.brand") },
  ];
}

export function footerNavItems(tr: I18nTranslator, lang: Lang): NavItem[] {
  return navItems(tr, lang);
}
