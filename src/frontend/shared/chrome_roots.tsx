import type { ReactElement, ReactNode } from "react";
import { createRoot, hydrateRoot, type Root } from "react-dom/client";
import { frontendEventName } from "@trebired/frontend";
import { useEffect } from "react";

type ChromeRoot = [selector: string, node: ReactElement];

type MountedRoot = {
  element: Element;
  node: ReactElement;
  root: Root;
  selector: string;
};

function AfterCommit({ children, onCommit }: { children: ReactNode; onCommit: () => void }) {
  useEffect(() => {
      onCommit();
    }, [onCommit]);

  return <>{children}</>;
}

function remountReplacedRoots(mounted: MountedRoot[]) {
  for (const entry of mounted) {
    const current = document.querySelector(entry.selector);
    if (!current || current === entry.element) continue;
    entry.root.unmount();
    entry.element = current;
    entry.root = createRoot(current);
    entry.root.render(entry.node);
  }
}

export function hydrateChromeRoots(roots: ChromeRoot[]): Promise<void> {
  const present = roots
  .map(([selector, node]) => ({ element: document.querySelector(selector), node, selector }))
  .filter((entry): entry is { element: Element; node: ReactElement; selector: string } => entry.element !== null);

  if (present.length === 0) return Promise.resolve();

  const mounted: MountedRoot[] = [];

  const ready = new Promise<void>((resolve) => {
      let remaining = present.length;

      function onCommit() {
        remaining -= 1;
        if (remaining === 0) resolve();
      }

      for (const entry of present) {
        const root = hydrateRoot(
          entry.element,
          <AfterCommit onCommit={onCommit}>{entry.node}</AfterCommit>,
        );
        mounted.push({ element: entry.element, node: entry.node, root, selector: entry.selector });
      }
  });

  document.addEventListener(frontendEventName("rehydrate"), () => {
      remountReplacedRoots(mounted);
  });

  return ready;
}
