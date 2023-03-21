import { ReactNode } from "react";

export function Column(props: { className?: string; children: ReactNode }) {
  return (
    <div
      className={`flex h-full w-full flex-col justify-start p-5 md:w-[65ch] ${props.className}`}
    >
      {props.children}
    </div>
  );
}
