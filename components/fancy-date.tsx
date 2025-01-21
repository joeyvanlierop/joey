import dayjs from "dayjs";
import * as Tooltip from "@radix-ui/react-tooltip";
import advancedFormat from "dayjs/plugin/advancedFormat";
import FileWayback from "./file-wayback";

dayjs.extend(advancedFormat);

export function FancyDate({
  published,
  updated,
  path,
}: {
  published: string;
  updated: string;
  path: string;
}) {
  const isUpdated = published !== updated;

  return (
    <Tooltip.Provider delayDuration={300} skipDelayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <time className="font-header text-mono-11" dateTime={published}>
            {dayjs(published).format(`MMMM Do[,] YYYY`)}
            {isUpdated && "*"}
          </time>
        </Tooltip.Trigger>
        {isUpdated && (
          <Tooltip.Content
            className="border border-border bg-mono-1 px-3 py-2 rounded-lg data-[state=delayed-open]:animate-tooltip-in data-[state=closed]:animate-tooltip-out shadow-mono tabular-nums"
            sideOffset={8}
            side="bottom"
            align="start"
          >
            <FileWayback
              owner="joeyvanlierop"
              repo="joey"
              path={path}
            />
          </Tooltip.Content>
        )}
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
