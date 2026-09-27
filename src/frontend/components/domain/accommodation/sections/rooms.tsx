import { Section } from "@trebired/frontend/react";
import type { I18nTranslator } from "@trebired/i18n";

import { CardTable } from "#gqbmqapv1gar";
import { numbers } from "#m7bw89v4qsjy";

type RoomsProps = {
  baseKey: string;
  roomCount: number;
  tr: I18nTranslator;
};

export function AccommodationRooms({ baseKey, roomCount, tr }: RoomsProps) {
  return (
    <Section tone="muted">
    <div className="tbf-container column gap-lg">
    <h2 className="tbf-heading--section">{tr("accommodationPage.roomsTitle")}</h2>

    <CardTable
    items={numbers(roomCount)}
    getKey={(roomNumber) => roomNumber}
    itemClassName="column gap-lg"
    renderItem={(roomNumber) => (
        <>
        <div className="inline-row wrap gap-xs">
        <span className="pill" data-tag="solid">
        {tr(`${baseKey}.rooms.room${roomNumber}.capacity`)}
        </span>
        <span className="pill" data-tag="soft">{tr(`${baseKey}.rooms.room${roomNumber}.size`)}</span>
        </div>
        <div className="column gap-sm">
        <h3 className="tbf-heading--panel">{tr(`${baseKey}.rooms.room${roomNumber}.name`)}</h3>
        <p>{tr(`${baseKey}.rooms.room${roomNumber}.description`)}</p>
        </div>
        </>
    )}
    />
    </div>
    </Section>
  );
}
