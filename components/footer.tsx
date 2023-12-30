import { Clock } from "./clock";
import { Column } from "./column";
import { Mood } from "./mood";
import { Wayback } from "./wayback";

export function Footer() {
  return (
    <footer className="h-12 w-full border-t border-[#2e2e2e] absolute bottom-0 flex justify-center items-center text-sm text-[#707070]">
      <Column className="justify-center">
        <div className="flex justify-between items-center">
          <Mood
            current={{
              message: "December Holidays are S-tier",
              date: "2023-12-30",
            }}
            history={[
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
      </Column>
    </footer>
  );
}
