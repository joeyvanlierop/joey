"use client";

import * as Tooltip from "@radix-ui/react-tooltip";

export function Nook({ popup, children }) {
  return (
    <Tooltip.Provider
      delayDuration={100}
      skipDelayDuration={0}
      disableHoverableContent
    >
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Content
          className="border border-mono-5 bg-mono-1 px-3 py-2 rounded-lg data-[state=delayed-open]:animate-tooltip-in data-[state=closed]:animate-tooltip-out shadow-mono tabular-nums"
          sideOffset={10}
        >
          {popup}
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
