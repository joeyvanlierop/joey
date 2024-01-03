"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import dayjs from "dayjs";
import { Dot } from "./dot";
import { useState } from "react";

type MoodMeta = { message: string; date: string };

export function Mood({
  current,
  history,
}: {
  current: MoodMeta;
  history: MoodMeta[];
}) {
  // https://github.com/radix-ui/primitives/issues/1573#issuecomment-1698975904
  const [open, setOpen] = useState(false);

  return (
    <Tooltip.Provider delayDuration={100} skipDelayDuration={0}>
      <Tooltip.Root open={open} onOpenChange={setOpen}>
        <Tooltip.Trigger asChild>
          <div
            className="font-title flex items-center gap-2"
            onClick={() => setOpen((open) => !open)}
          >
            <Dot className="bg-yellow-500 shadow-yellow-500 animate-pulsate shadow-dot" />
            <p className="text-sm -mt-0.5">{current.message}</p>
          </div>
        </Tooltip.Trigger>
        <Tooltip.Content
          className="border border-mono-5 bg-mono-1 px-3 py-2 rounded-lg data-[state=delayed-open]:animate-tooltip-in data-[state=closed]:animate-tooltip-out shadow-mono text-text tabular-nums"
          sideOffset={10}
          align="start"
        >
          <ol className="flex max-h-96 overflow-y-scroll -mr-3 flex-col-reverse">
            {history.map((message, index) => (
              <li
                className="py-2 border-b first:border-b-0 border-mono-5 first:pb-0 last:pt-0"
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
      <time className="font-header text-mono-11 pr-2 inline-block min-w-[60px]">
        {dayjs(date).format("MMM 'YY")}
      </time>
      {message}
    </span>
  );
}
