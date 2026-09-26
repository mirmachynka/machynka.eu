import { HairlineCell, HairlinePanel } from "@trebired/frontend/react";
import type { Key, ReactNode } from "react";

type CardTableProps<T> = {
  className?: string;
  columns?: 2 | 3;
  getKey: (item: T, index: number) => Key;
  itemClassName?: string;
  items: readonly T[];
  renderItem: (item: T, index: number) => ReactNode;
  tone?: "dark" | "light";
};

const COLUMN_MIN: Record<number, string> = { 2: "30rem", 3: "22rem" };

export function CardTable<T>({
    className,
    columns = 2,
    getKey,
    itemClassName,
    items,
    renderItem,
    tone = "light",
  }: CardTableProps<T>) {
  const fillerCount = items.length === 0 ? 0 : (columns - (items.length % columns)) % columns;

  return (
    <HairlinePanel className={className} min={COLUMN_MIN[columns]}>
    {items.map((item, index) => (
          <HairlineCell key={getKey(item, index)} className={itemClassName} invert={tone === "dark"}>
          {renderItem(item, index)}
          </HairlineCell>
    ))}
    {Array.from({ length: fillerCount }, (_, fillerIndex) => (
          <HairlineCell key={`filler-${items.length + fillerIndex}`} aria-hidden="true" invert={tone === "dark"} />
    ))}
    </HairlinePanel>
  );
}
