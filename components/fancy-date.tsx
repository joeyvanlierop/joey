"use client";

import dayjs from "dayjs";
import * as Tooltip from "@radix-ui/react-tooltip";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

export function FancyDate({
  published,
  updated,
}: {
  published: string;
  updated: string;
}) {
  const isUpdated = published !== updated;

  return (
    <Tooltip.Provider delayDuration={300} skipDelayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <time className="font-header text-mono-11">
            {dayjs(published).format(`MMMM Do[,] YYYY`)}
            {isUpdated && "*"}
          </time>
        </Tooltip.Trigger>
        {isUpdated && (
          <Tooltip.Content
            className="border border-border bg-mono-1 px-3 py-2 rounded-lg data-[state=delayed-open]:animate-tooltip-in data-[state=closed]:animate-tooltip-out shadow-mono tabular-nums -ml-[13px]"
            sideOffset={8}
            side="bottom"
            align="start"
          >
            <time className="font-header text-mono-11">
              {dayjs(updated).format("MMMM Do[,] YYYY")}
            </time>
          </Tooltip.Content>
        )}
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
