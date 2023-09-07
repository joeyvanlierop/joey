import { ReactNode } from "react";

export function Column(props: { className?: string; children: ReactNode }) {
  return (
    <div
      className={`flex h-full w-full flex-col justify-start p-10 md:p-0 md:w-[640px] ${props.className}`}
    >
      {props.children}
    </div>
  );
}
