import { Dot } from "./dot";

export function Mood({ message }: { message: string }) {
  return (
    <div className="font-title flex items-center gap-2">
      <Dot className="bg-yellow-500 shadow-yellow-500 animate-pulse shadow-dot" />
      <p className="text-sm -mt-0.5">{message}</p>
    </div>
  );
}
