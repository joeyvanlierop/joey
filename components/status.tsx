import { Dot } from "./dot";

export function Status({ status }) {
  return (
    <div className="font-title flex items-center gap-2">
      <Dot className="bg-yellow-400 shadow-yellow-300 animate-pulse shadow-dot" />
      <p>{status}</p>
    </div>
  );
}
