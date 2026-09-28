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
    <div className="tbf-column tbf-gap-sm">
    {links.map((link) => (
          <ActionRow key={link.href} href={link.href} arrow={<Icon spec={ICON_ARROW_RIGHT} />}>
          <IconTile size="lg" tone="surface">
          <Icon spec={link.icon} />
          </IconTile>
          <div className="tbf-column tbf-grow tbf-gap-xs2">
          <div className="tbf-label-caps">{link.label}</div>
          <div className="tbf-action-row__value">{link.value}</div>
          </div>
          </ActionRow>
    ))}
    </div>
  );
}

function AddressRow({ city, name, postalCode, street }: {
    city: string;
    name: string;
    postalCode: string;
    street: string;
}) {
  return (
    <div className="tbf-inline-row tbf-top tbf-gap-sm">
    <IconTile size="sm" glyph="accent" tone="inverse">
    <Icon spec={ICON_MAP_PIN} />
    </IconTile>
    <div className="tbf-column tbf-gap-xs2">
    <div className="tbf-font-bold">{name}</div>
    <div className="tbf-text-sm tbf-text-muted">{street}</div>
    <div className="tbf-text-sm tbf-text-muted">{postalCode} {city}</div>
    </div>
    </div>
  );
}

function ContactAddressPanel({ tr }: { tr: I18nTranslator }) {
  const address = contactInfo.contactAddress;

  return (
    <Card tone="inverse">
    <CardBody className="tbf-column tbf-gap-md">
    <div className="tbf-column tbf-gap-sm">
    <h3 className="tbf-heading--panel">{tr("contactSection.contactAddress")}</h3>
    <AddressRow
    city={address.city}
    name={tr("contactSection.label")}
    postalCode={address.postalCode}
    street={address.street}
    />
    <Card tone="accent">
    <CardBody className="tbf-text-sm tbf-font-bold" padding="sm">{tr("contactSection.receptionNote")}</CardBody>
    </Card>
    </div>

    <div className="tbf-column tbf-gap-sm">
    <h4 className="tbf-heading--panel">{tr("contactSection.accommodationAddresses")}</h4>
    {contactInfo.branchAddresses.map((branch) => (
          <AddressRow
          key={branch.name}
          city={branch.city}
          name={branch.name}
          postalCode={branch.postalCode}
          street={branch.street}
          />
    ))}
    </div>
    </CardBody>
    </Card>
  );
}

function ContactOperatorPanel({ tr }: { tr: I18nTranslator }) {
  return (
    <Card tone="inverse">
    <CardBody className="tbf-column tbf-gap-md">
    <h3 className="tbf-heading--panel">{tr("contactSection.operator")}</h3>
    <div className="tbf-inline-row tbf-top tbf-gap-sm">
    <IconTile size="sm" glyph="accent" tone="inverse">
    <Icon spec={ICON_BUILDING} />
    </IconTile>
    <div className="tbf-column tbf-gap-sm">
    <div className="tbf-column tbf-gap-xs2">
    <div className="tbf-font-bold">{contactInfo.operator.name}</div>
    <div>{tr("contactSection.representedBy", { name: contactInfo.operator.representedBy })}</div>
    <div>{contactInfo.operator.street}</div>
    <div>
    {contactInfo.operator.city} {contactInfo.operator.postalCode}
    </div>
    </div>
    <div className="tbf-column tbf-gap-xs2">
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
    <div className="tbf-column tbf-gap-lg">
    <h2 className="tbf-heading--section">{tr("contactSection.title")}</h2>

    <div className="tbf-grid tbf-gap-lg">
    <div className="tbf-column tbf-gap-lg">
    <p className="tbf-text-muted">{tr("contactSection.text")}</p>

    <ContactLinks tr={tr} />

    <MapEmbed
    aspectRatio="16 / 10"
    src={contactInfo.contactAddress.mapEmbedUrl}
    title={`${tr("contactSection.contactAddress")}: ${contactInfo.contactAddress.street}`}
    />
    </div>

    <div className="tbf-column tbf-gap-md">
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
