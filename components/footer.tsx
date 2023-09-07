import { Clock } from "./clock";
import { Column } from "./column";
import { Status } from "./status";
import { Wayback } from "./wayback";

export function Footer() {
  return (
    <footer className="h-12 w-full border-t border-[#2e2e2e] absolute bottom-0 flex justify-center items-center text-sm text-[#707070]">
      <Column className="justify-center">
        <div className="flex justify-between items-center">
          <Status />
          <Clock>
            <Wayback />
          </Clock>
        </div>
      </Column>
    </footer>
  );
}
