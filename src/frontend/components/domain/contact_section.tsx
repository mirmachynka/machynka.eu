import { createLocalTranslator, type I18nTranslator } from "@trebired/i18n";
import { ActionRow, Card, CardBody, Icon, IconTile, MapEmbed, PageBand } from "@trebired/frontend/react";

import { Button } from "#cgroy6iibw7w";

import { contactInfo, phoneHref } from "#aequr96wfpxz";
import { ICON_ARROW_RIGHT, ICON_BUILDING, ICON_MAIL, ICON_MAP_PIN, ICON_PHONE } from "#gpkp4b4vfavh";
import { useLang } from "#n99t4onl5ufo";

function ContactLinks({ tr }: { tr: I18nTranslator }) {
  const links = [
    {
      href: phoneHref(contactInfo.accommodationPhone),
      icon: ICON_PHONE,
      label: tr("contactSection.accommodationPhone"),
      value: contactInfo.accommodationPhone,
    },
    {
      href: `mailto:${contactInfo.email}`,
      icon: ICON_MAIL,
      label: tr("contactSection.emailLabel"),
      value: contactInfo.email,
    },
  ];

  return (
    <div className="column gap-sm">
    {links.map((link) => (
          <ActionRow key={link.href} href={link.href} arrow={<Icon spec={ICON_ARROW_RIGHT} />}>
          <IconTile size="lg" tone="surface">
          <Icon spec={link.icon} />
          </IconTile>
          <div className="column grow gap-xs2">
          <div className="label-caps">{link.label}</div>
          <div className="tbf-action-row__value">{link.value}</div>
          </div>
          </ActionRow>
    ))}
    </div>
  );
}

function ContactAddressPanel({ tr }: { tr: I18nTranslator }) {
  return (
    <Card tone="inverse">
    <CardBody className="column gap-md">
    <h3 className="tbf-heading--panel">{tr("contactSection.contactAddress")}</h3>
    <div className="column gap-sm">
    <div className="inline-row top gap-sm">
    <IconTile size="sm" glyph="accent" tone="inverse">
    <Icon spec={ICON_MAP_PIN} />
    </IconTile>
    <div className="column gap-sm">
    <div className="column gap-xs2">
    <div className="font-bold">{tr("contactSection.label")}</div>
    <div className="text-sm text-muted">{contactInfo.contactAddress.street}</div>
    <div className="text-sm text-muted">
    {contactInfo.contactAddress.postalCode} {contactInfo.contactAddress.city}
    </div>
    </div>
    <Card tone="accent">
    <CardBody className="text-sm font-bold">{tr("contactSection.receptionNote")}</CardBody>
    </Card>
    </div>
    </div>
    <div className="border-top padding-top-md">
    <div className="label-caps">{tr("contactSection.accommodationAddresses")}</div>
    </div>
    {contactInfo.branchAddresses.map((address) => (
          <div key={address.name} className="inline-row top gap-sm">
          <IconTile size="sm" glyph="accent" tone="inverse">
          <Icon spec={ICON_MAP_PIN} />
          </IconTile>
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
    </CardBody>
    </Card>
  );
}

function ContactOperatorPanel({ tr }: { tr: I18nTranslator }) {
  return (
    <Card tone="inverse">
    <CardBody className="column gap-md">
    <h3 className="tbf-heading--panel">{tr("contactSection.operator")}</h3>
    <div className="inline-row top gap-sm">
    <IconTile size="sm" glyph="accent" tone="inverse">
    <Icon spec={ICON_BUILDING} />
    </IconTile>
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
    </CardBody>
    </Card>
  );
}

export function ContactSection() {
  const lang = useLang();
  const tr = createLocalTranslator(import.meta.url, lang);

  return (
    <PageBand id="kontakt">
    <div className="column gap-lg">
    <h2 className="tbf-heading--section">{tr("contactSection.title")}</h2>

    <div className="grid gap-lg">
    <div className="column gap-lg">
    <p className="text-muted">{tr("contactSection.text")}</p>

    <ContactLinks tr={tr} />

    <MapEmbed
    aspectRatio="16 / 10"
    src={contactInfo.contactAddress.mapEmbedUrl}
    title={`${tr("contactSection.contactAddress")}: ${contactInfo.contactAddress.street}`}
    />
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
    </PageBand>
  );
}
