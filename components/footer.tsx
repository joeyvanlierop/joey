import { Clock } from "./clock";
import { Mood } from "./mood";
import { Wayback } from "./wayback";

export function Footer() {
  return (
    <footer className="h-12 w-full border-t border-border absolute bottom-0 flex justify-center items-center text-sm text-mono-9">
      <div className="flex justify-between items-center w-full max-w-full md:max-w-[640px] px-10 md:px-0">
        <Mood
          current={{
            message: "Melancholic",
            date: "2024-12-05",
          }}
          history={[
            {
              message: "Shmovember",
              date: "2024-11-14",
            },
            {
              message: "Big month",
              date: "2024-10-07",
            },
            {
              message: "Schooling",
              date: "2024-09-10",
            },
            {
              message: "Thinking too much about shoes",
              date: "2024-08-13",
            },
            {
              message: "Getting sunburnt",
              date: "2024-07-07",
            },
            {
              message: "Forgetting to write things",
              date: "2024-05-17",
            },
            {
              message: "Mom broke her leg",
              date: "2024-03-09",
            },
            {
              message: "Back in the mountains",
              date: "2024-02-14",
            },
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
