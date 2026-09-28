import { ErrorPage } from "@trebired/frontend/react";

import { useLang } from "#n99t4onl5ufo";

export function SiteErrorPage({ status }: { status: number }) {
  return (
    <main>
    <ErrorPage lang={useLang()} status={status} />
    </main>
  );
}
