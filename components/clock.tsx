"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { useEffect, useState } from "react";

dayjs.extend(utc);
dayjs.extend(timezone);

const degreesPerHour = 360 / 12;
const degreesPerMinute = 360 / 60;
const degreesPerSecond = 360 / 60;

export function Clock({ children }) {
  const [now, setNow] = useState(dayjs().tz("America/Edmonton"));
  // https://github.com/radix-ui/primitives/issues/1573#issuecomment-1698975904
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(dayjs().tz("America/Edmonton"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hourDegrees =
    (now.hour() % 12) * degreesPerHour + (now.minute() / 60) * degreesPerHour;
  const minuteDegress =
    now.minute() * degreesPerMinute + (now.second() / 60) * degreesPerMinute;
  const secondDegrees = now.second() * degreesPerSecond;

  return (
    <Tooltip.Provider delayDuration={100} skipDelayDuration={0}>
      <Tooltip.Root open={open} onOpenChange={setOpen}>
        <Tooltip.Trigger asChild>
          <div
            className="rounded-full w-5 h-5 border border-mono-9 flex items-center justify-center relative rotate-180"
            onClick={() => setOpen((open) => !open)}
          >
            <div
              className={`h-[8px] w-[0.5px] bg-mono-9 absolute top-1/2 left-1/2 origin-top transition-transform`}
              style={{
                transform: `rotate(${secondDegrees}deg)`,
                transitionProperty: now.second() === 0 ? "none" : undefined,
              }}
            />
            <div
              className={`h-[7px] w-[1px] bg-mono-9 absolute top-1/2 left-1/2 origin-top transition-transform`}
              style={{
                transform: `rotate(${minuteDegress}deg)`,
                transitionProperty: now.minute() === 0 ? "none" : undefined,
              }}
            />
            <div
              className={`h-[5px] w-[1px] bg-mono-9 absolute top-1/2 left-1/2 origin-top transition-transform`}
              style={{
                transform: `rotate(${hourDegrees}deg)`,
                transitionProperty: now.hour() === 0 ? "none" : undefined,
              }}
            />
          </div>
        </Tooltip.Trigger>
        <Tooltip.Content
          className="border border-border bg-mono-1 px-3 py-2 rounded-lg data-[state=delayed-open]:animate-tooltip-in data-[state=closed]:animate-tooltip-out shadow-mono text-text tabular-nums"
          sideOffset={10}
        >
          {children}
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
