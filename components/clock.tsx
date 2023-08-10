"use client";

import { useEffect, useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { Dot } from "./dot";
import { Git } from "./git";

dayjs.extend(utc);
dayjs.extend(timezone);

export function Clock() {
  const [now, setNow] = useState(dayjs().tz("America/Edmonton"));

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(dayjs().tz("America/Edmonton"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Tooltip.Provider delayDuration={300} skipDelayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div
            style={{
              ["--now-h" as string]: now.hour(),
              ["--now-m" as string]: now.minute(),
              ["--now-s" as string]: now.second(),
              ["--deg-h" as string]:
                "calc(((var(--now-h) / 12) * 360) + ((var(--now-m) / 60) * 30))",
              ["--deg-m" as string]:
                "calc(((var(--now-m) / 60) * 360) + ((var(--now-s) / 60) * 6))",
              ["--deg-s" as string]: "calc((var(--now-s) / 60) * 360)",
            }}
            className="rounded-full w-5 h-5 border border-[#707070] flex items-center justify-center relative rotate-180"
          >
            <div
              className={`h-[8px] w-[0.5px] rotate-[calc(var(--deg-s)*1deg)] bg-[#707070] absolute top-1/2 left-1/2 origin-top ${
                now.second() === 0 ? "" : "transition-transform"
              }`}
            />
            <div
              className={`h-[7px] w-[1px] rotate-[calc(var(--deg-m)*1deg)] bg-[#707070] absolute top-1/2 left-1/2 origin-top transition-transform ${
                now.minute() === 0 ? "" : "transition-transform"
              }`}
            />
            <div
              className={`h-[5px] w-[1px] rotate-[calc(var(--deg-h)*1deg)] bg-[#707070] absolute top-1/2 left-1/2 origin-top transition-transform ${
                now.hour() === 0 ? "" : "transition-transform"
              }`}
            />
          </div>
        </Tooltip.Trigger>
        <Tooltip.Content
          className="border border-[#2e2e2e] bg-[#1a1a1a] px-3 py-2 rounded-lg data-[state=delayed-open]:animate-tooltip-in data-[state=closed]:animate-tooltip-out shadow-dark text-white tabular-nums"
          sideOffset={10}
        >
          <Git />
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
