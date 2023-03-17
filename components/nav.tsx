import { useState } from "react";
import { Dot } from "./dot";

export function Nav(props) {
  return (
    <nav
      className={`absolute bottom-0 left-1/2 mb-4 flex h-12 w-full -translate-x-1/2 justify-between rounded-full bg-neutral-800 px-6 lg:mb-14 lg:w-auto lg:gap-8`}
    >
      {props.categories?.map((category, idx) => {
        const isSelected = props.selected == idx;

        return (
          <div
            key={idx}
            onClick={() => props.setSelected(idx)}
            tabIndex={0}
            className={`flex min-w-0 flex-shrink cursor-pointer items-center transition-opacity hover:opacity-100 ${
              !isSelected ? "opacity-30" : ""
            }`}
          >
            <Dot color={category.color} />
            <p className="ml-3 overflow-hidden text-ellipsis whitespace-nowrap capitalize">
              {category.name}
            </p>
          </div>
        );
      })}
    </nav>
  );
}
