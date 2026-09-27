import { localePathFor } from "@trebired/frontend";

import { LANG_ROUTING } from "./policy";
import type { Lang } from "./policy";

export function langHref(path: string, lang: Lang): string {
  const [base, hash] = String(path).split("#");
  const prefixed = localePathFor(base || "/", lang, LANG_ROUTING);
  return hash ? `${prefixed}#${hash}` : prefixed;
}
