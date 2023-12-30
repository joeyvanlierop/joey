"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import dayjs from "dayjs";
import { Dot } from "./dot";

type MoodMeta = { message: string; date: string };

export function Mood({
  current,
  history,
}: {
  current: MoodMeta;
  history: MoodMeta[];
}) {
  return (
    <Tooltip.Provider delayDuration={100} skipDelayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div className="font-title flex items-center gap-2">
            <Dot className="bg-yellow-500 shadow-yellow-500 animate-pulse shadow-dot" />
            <p className="text-sm -mt-0.5">{current.message}</p>
          </div>
        </Tooltip.Trigger>
        <Tooltip.Content
          className="border border-[#2e2e2e] bg-[#1a1a1a] px-3 py-2 rounded-lg data-[state=delayed-open]:animate-tooltip-in data-[state=closed]:animate-tooltip-out shadow-dark text-white tabular-nums"
          sideOffset={10}
          align="start"
        >
          <ol className="flex max-h-96 overflow-y-scroll -mr-3 flex-col-reverse">
            {history.map((message, index) => (
              <li
                className="py-2 border-b first:border-b-0 border-[#2e2e2e]"
                key={index}
              >
                <MoodEntry {...message} />
              </li>
            ))}
          </ol>
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

function MoodEntry({ message, date }: MoodMeta) {
  return (
    <span>
      <time className="font-header text-[#a0a0a0] pr-2 inline-block min-w-[60px]">
        {dayjs(date).format("MMM 'YY")}
      </time>
      {message}
    </span>
  );
}
