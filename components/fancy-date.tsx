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
  return (
    <Tooltip.Provider delayDuration={300} skipDelayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <time className="font-header text-[#a0a0a0]">
            {dayjs(published).format("MMMM Do[,] YYYY")}
          </time>
        </Tooltip.Trigger>
        {published !== updated && (
          <Tooltip.Content
            className="border border-[#2e2e2e] bg-[#1a1a1a] px-3 py-2 rounded-lg data-[state=delayed-open]:animate-tooltip-in data-[state=closed]:animate-tooltip-out shadow-dark tabular-nums"
            sideOffset={8}
            side="bottom"
            align="start"
          >
            <time className="font-header text-[#a0a0a0]">
              {dayjs(updated).format("MMMM Do[,] YYYY")}
            </time>
          </Tooltip.Content>
        )}
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
