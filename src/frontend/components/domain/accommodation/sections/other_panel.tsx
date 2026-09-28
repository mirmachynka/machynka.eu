import { Card, CardBody, Icon, TextLink } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";

import type { Accommodation } from "#2ajuusged5jk";
import { langHref } from "./../../../../shared/lang/href";
import { useLang } from "#n99t4onl5ufo";
import { ICON_ARROW_RIGHT } from "#gpkp4b4vfavh";

type OtherPanelProps = {
  related: Accommodation[];
  tr: I18nTranslator;
};

export function AccommodationOtherPanel({ related, tr }: OtherPanelProps) {
  const lang = useLang();

  return (
    <Card>
    <CardBody className="tbf-column tbf-gap-md">
    <h2 className="tbf-heading--panel">{tr("accommodationPage.otherOption")}</h2>
    <div className="tbf-column tbf-gap-sm">
    {related.map((item) => (
          <TextLink
          key={item.path}
          className="tbf-inline-row tbf-between tbf-gap-sm tbf-border-top tbf-padding-top-md tbf-font-bold"
          href={langHref(item.path, lang)}
          softRedirect
          >
          <span>{tr(`accommodations.${item.id}.name`)}</span>
          <Icon spec={ICON_ARROW_RIGHT} />
          </TextLink>
    ))}
    </div>
    </CardBody>
    </Card>
  );
}
