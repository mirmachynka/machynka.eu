import { createLocalTranslator, type I18nTranslator } from "@trebired/i18n";
import { Icon, MapEmbed, Section } from "@trebired/frontend/react";

import { Button } from "#cgroy6iibw7w";

import { contactInfo, phoneHref } from "#aequr96wfpxz";
import { ICON_ARROW_RIGHT, ICON_BUILDING, ICON_MAIL, ICON_MAP_PIN, ICON_PHONE } from "#gpkp4b4vfavh";
import { useLang } from "#n99t4onl5ufo";

function ContactLinks({ tr }: { tr: I18nTranslator }) {
  return (
    <div className="column gap-sm">
    <a href={phoneHref(contactInfo.accommodationPhone)} className="inline-row gap-sm" data-action-row="">
    <div data-tile="plain">
    <Icon spec={ICON_PHONE} />
    </div>
    <div className="column grow gap-xs2">
    <div className="label-caps">{tr("contactSection.accommodationPhone")}</div>
    <div data-action-value="">{contactInfo.accommodationPhone}</div>
    </div>
    <Icon spec={ICON_ARROW_RIGHT} data-action-arrow="" />
    </a>

    <a href={`mailto:${contactInfo.email}`} className="inline-row gap-sm" data-action-row="">
    <div data-tile="plain">
    <Icon spec={ICON_MAIL} />
    </div>
    <div className="column grow gap-xs2">
    <div className="label-caps">{tr("contactSection.emailLabel")}</div>
    <div data-action-value="email">{contactInfo.email}</div>
    </div>
    <Icon spec={ICON_ARROW_RIGHT} data-action-arrow="" />
    </a>
    </div>
  );
}

function ContactAddressPanel({ tr }: { tr: I18nTranslator }) {
  return (
    <div className="column gap-md" data-panel="dark">
    <h3 className="tbf-heading--panel">{tr("contactSection.contactAddress")}</h3>
    <div className="column gap-sm">
    <div className="inline-row top gap-sm">
    <div data-tile="inset">
    <Icon spec={ICON_MAP_PIN} />
    </div>
    <div className="column gap-sm">
    <div className="column gap-xs2">
    <div className="font-bold">{tr("contactSection.label")}</div>
    <div className="text-sm text-muted">{contactInfo.contactAddress.street}</div>
    <div className="text-sm text-muted">
    {contactInfo.contactAddress.postalCode} {contactInfo.contactAddress.city}
    </div>
    </div>
    <p data-note="">{tr("contactSection.receptionNote")}</p>
    </div>
    </div>
    <div className="border-top padding-top-md">
    <div className="label-caps">{tr("contactSection.accommodationAddresses")}</div>
    </div>
    {contactInfo.branchAddresses.map((address) => (
          <div key={address.name} className="inline-row top gap-sm">
          <div data-tile="inset">
          <Icon spec={ICON_MAP_PIN} />
          </div>
          <div>
          <div className="font-bold">{address.name}</div>
          <div className="text-sm text-muted">{address.street}</div>
          <div className="text-sm text-muted">
          {address.city} {address.postalCode}
          </div>
          </div>
          </div>
    ))}
    </div>
    </div>
  );
}

function ContactOperatorPanel({ tr }: { tr: I18nTranslator }) {
  return (
    <div className="column gap-md" data-panel="dark">
    <h3 className="tbf-heading--panel">{tr("contactSection.operator")}</h3>
    <div className="inline-row top gap-sm">
    <div data-tile="inset">
    <Icon spec={ICON_BUILDING} />
    </div>
    <div className="column gap-sm">
    <div className="column gap-xs2">
    <div className="font-bold">{contactInfo.operator.name}</div>
    <div>{tr("contactSection.representedBy", { name: contactInfo.operator.representedBy })}</div>
    <div>{contactInfo.operator.street}</div>
    <div>
    {contactInfo.operator.city} {contactInfo.operator.postalCode}
    </div>
    </div>
    <div className="column gap-xs2">
    <div>
    {tr("contactSection.companyId")}: {contactInfo.operator.companyId}
    </div>
    <div>
    {tr("contactSection.taxId")}: {contactInfo.operator.taxId}
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}

export function ContactSection() {
  const lang = useLang();
  const tr = createLocalTranslator(import.meta.url, lang);

  return (
    <Section id="kontakt">
    <div className="tbf-container column gap-lg">
    <h2 className="tbf-heading--section">{tr("contactSection.title")}</h2>

    <div className="grid" data-split="">
    <div className="column gap-lg">
    <p className="text-muted" data-copy="narrow">{tr("contactSection.text")}</p>

    <ContactLinks tr={tr} />

    <div data-map="plain">
    <MapEmbed
    src={contactInfo.contactAddress.mapEmbedUrl}
    data-map-frame=""
    title={`${tr("contactSection.contactAddress")}: ${contactInfo.contactAddress.street}`}
    />
    </div>
    </div>

    <div className="column gap-md">
    <ContactAddressPanel tr={tr} />
    <ContactOperatorPanel tr={tr} />

    <Button href={phoneHref(contactInfo.accommodationPhone)} variant="primary">
    <span>{tr("contactSection.callNow")}</span>
    <Icon spec={ICON_PHONE} />
    </Button>
    </div>
    </div>
    </div>
    </Section>
  );
}
