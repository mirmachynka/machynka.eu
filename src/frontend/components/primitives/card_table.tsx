import { HairlineCell, HairlinePanel } from "@trebired/frontend/react";
import type { Key, ReactNode } from "react";

type CardTableProps<T> = {
  className?: string;
  columns?: 2 | 3;
  getKey: (item: T, index: number) => Key;
  itemClassName?: string;
  items: readonly T[];
  min?: string;
  renderItem: (item: T, index: number) => ReactNode;
  tone?: "dark" | "light";
};

const COLUMN_MIN: Record<number, string> = {
  2: "clamp(9rem, 42vw, 30rem)",
  3: "clamp(9rem, 42vw, 22rem)",
};

export function CardTable<T>({
    className,
    columns = 2,
    getKey,
    itemClassName,
    items,
    min,
    renderItem,
    tone = "light",
  }: CardTableProps<T>) {
  const fillerCount = items.length === 0 ? 0 : (columns - (items.length % columns)) % columns;

  return (
    <HairlinePanel className={className} min={min || COLUMN_MIN[columns]}>
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
