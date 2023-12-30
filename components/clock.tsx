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
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div
            suppressHydrationWarning
            className="rounded-full w-5 h-5 border border-[#707070] flex items-center justify-center relative rotate-180"
          >
            <div
              className={`h-[8px] w-[0.5px] bg-[#707070] absolute top-1/2 left-1/2 origin-top transition-transform`}
              style={{
                transform: `rotate(${secondDegrees}deg)`,
                transitionProperty: now.second() === 0 ? "none" : undefined,
              }}
            />
            <div
              className={`h-[7px] w-[1px] bg-[#707070] absolute top-1/2 left-1/2 origin-top transition-transform`}
              style={{
                transform: `rotate(${minuteDegress}deg)`,
                transitionProperty: now.minute() === 0 ? "none" : undefined,
              }}
            />
            <div
              className={`h-[5px] w-[1px] bg-[#707070] absolute top-1/2 left-1/2 origin-top transition-transform`}
              style={{
                transform: `rotate(${hourDegrees}deg)`,
                transitionProperty: now.hour() === 0 ? "none" : undefined,
              }}
            />
          </div>
        </Tooltip.Trigger>
        <Tooltip.Content
          className="border border-[#2e2e2e] bg-[#1a1a1a] px-3 py-2 rounded-lg data-[state=delayed-open]:animate-tooltip-in data-[state=closed]:animate-tooltip-out shadow-dark text-white tabular-nums"
          sideOffset={10}
        >
          {children}
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
