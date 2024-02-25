import { Clock } from "./clock";
import { Mood } from "./mood";
import { Wayback } from "./wayback";

export function Footer() {
  return (
    <footer className="h-12 w-full border-t border-border absolute bottom-0 flex justify-center items-center text-sm text-mono-9">
      <div className="flex justify-between items-center w-full max-w-full md:max-w-[640px] px-10 md:px-0">
        <Mood
          current={{
            message: "Back in the mountains",
            date: "2024-02-14",
          }}
          history={[
            {
              message: "Where did the snow go",
              date: "2024-01-01",
            },
            {
              message: "December Holidays are S-tier",
              date: "2023-12-30",
            },
            {
              message: "On the grind",
              date: "2023-10-19",
            },
            {
              message: "Back to the grind",
              date: "2023-09-07",
            },
            {
              message: "Hiking the West Coast Trail, back in a bit",
              date: "2023-08-10",
            },
            {
              message: "Hello world",
              date: "2023-07-30",
            },
          ]}
        />
        <Clock>
          <Wayback />
        </Clock>
      </div>
    </footer>
  );
}
