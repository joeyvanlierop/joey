import dayjs from "dayjs";
import { useEffect, useState } from "react";

export function Clock() {
  const [now, setNow] = useState(dayjs());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(dayjs());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
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
        className={`h-[8px] w-[0.5px] rotate-[calc(var(--deg-s)*1deg)] bg-[#707070] absolute top-1/2 left-1/2 origin-top`}
      />
      <div
        className={`h-[7px] w-[1px] rotate-[calc(var(--deg-m)*1deg)] bg-[#707070] absolute top-1/2 left-1/2 origin-top`}
      />
      <div
        className={`h-[5px] w-[1px] rotate-[calc(var(--deg-h)*1deg)] bg-[#707070] absolute top-1/2 left-1/2 origin-top`}
      />
    </div>
  );
}
