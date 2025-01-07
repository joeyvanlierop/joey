import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import dayjs from "dayjs";

type Play = {
  date: string;
  winners?: string[];
};

type GameStats = {
  game: string;
  plays: Play[];
};

const BoardGameStats: React.FC<{ data: GameStats[] }> = ({ data }) => {
  return (
    <div className="p-4 max-w-4xl bg-mono-5 rounded-lg border border-mono-8 overflow-hidden">
      <div className="grid grid-cols-[minmax(0,_min-content)_auto] gap-4 items-center">
        {data.map((game) => (
          <React.Fragment key={game.game}>
            {/* Game title */}
            <span className="font-medium whitespace-nowrap overflow-hidden text-ellipsis">
              {game.game}
            </span>

            {/* Play squares */}
            <div className="flex flex-wrap gap-2">
              {game.plays.map((play, index) => (
                <Tooltip.Provider delayDuration={300} skipDelayDuration={0} key={index}>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <div className="w-4 h-4 bg-mono-11 rounded cursor-pointer" />
                    </Tooltip.Trigger>
                    <Tooltip.Content
                      className="border border-border bg-mono-1 px-3 py-2 rounded-lg data-[state=delayed-open]:animate-tooltip-in data-[state=closed]:animate-tooltip-out shadow-mono tabular-nums text-mono-11"
                      sideOffset={8}
                      side="top"
                      align="center"
                    >
                      <div className="font-header">
                        <time className="font-header text-mono-11" dateTime={play.date}>
                          {dayjs(play.date).format(`MMMM Do[,] YYYY`)}
                        </time>
                        {play.winners?.length && (
                          <div className="text-amber-300">{`${play.winners.join(", ")}`}</div>
                        )}
                      </div>
                    </Tooltip.Content>
                  </Tooltip.Root>
                </Tooltip.Provider>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BoardGameStats;
