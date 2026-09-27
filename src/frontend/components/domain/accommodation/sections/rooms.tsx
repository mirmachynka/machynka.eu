import type { I18nTranslator } from "@trebired/i18n";
import { PageBand, Tag } from "@trebired/frontend/react";

import { CardTable } from "#gqbmqapv1gar";
import { numbers } from "#m7bw89v4qsjy";

type RoomsProps = {
  baseKey: string;
  roomCount: number;
  tr: I18nTranslator;
};

export function AccommodationRooms({ baseKey, roomCount, tr }: RoomsProps) {
  return (
    <PageBand tone="muted">
    <div className="column gap-lg">
    <h2 className="tbf-heading--section">{tr("accommodationPage.roomsTitle")}</h2>

    <CardTable
    items={numbers(roomCount)}
    min="min(30rem, 100%)"
    getKey={(roomNumber) => roomNumber}
    itemClassName="column gap-lg"
    renderItem={(roomNumber) => (
        <>
        <div className="inline-row wrap gap-xs">
        <Tag tone="inverse">{tr(`${baseKey}.rooms.room${roomNumber}.capacity`)}</Tag>
        <Tag>{tr(`${baseKey}.rooms.room${roomNumber}.size`)}</Tag>
        </div>
        <div className="column gap-sm">
        <h3 className="tbf-heading--panel">{tr(`${baseKey}.rooms.room${roomNumber}.name`)}</h3>
        <p className="text-muted">{tr(`${baseKey}.rooms.room${roomNumber}.description`)}</p>
        </div>
        </>
    )}
    />
    </div>
    </PageBand>
  );
}
