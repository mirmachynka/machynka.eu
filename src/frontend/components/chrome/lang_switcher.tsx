import { LocaleSwitcher } from "@trebired/frontend/react";
import { useId } from "react";

import { LANGUAGES } from "./../../shared/lang/policy";
import { useLang } from "#n99t4onl5ufo";

const locales = LANGUAGES.map((lang) => ({
      code: lang.code,
      flagCountry: lang.flag,
      label: lang.label,
      shortLabel: lang.code.toUpperCase(),
}));

export function LangSwitcher() {
  return (
    <LocaleSwitcher
    id={`${useId().replace(/:/gu, "")}_lang`}
    lang={useLang()}
    locales={locales}
    trigger="locale"
    />
  );
}
