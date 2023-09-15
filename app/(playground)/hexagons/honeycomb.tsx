"use client";

import * as Slider from "@radix-ui/react-slider";
import { useMemo, useState } from "react";
import { Hexagon } from "./hexagon";

type Hex = {
  q: number;
  r: number;
  s: number;
};

export function Honeycomb() {
  const [size, setSize] = useState(1);
  const board = useMemo(() => {
    const newBoard = new Set<Hex>();

    for (let q = -size; q <= size; q++) {
      for (let r = -size; r <= size; r++) {
        for (let s = -size; s <= size; s++) {
          if (q + r + s === 0) {
            newBoard.add({ q, r, s });
          }
        }
      }
    }

    return newBoard;
  }, [size]);

  return (
    <>
      <Slider.Root
        className="relative flex items-center select-none touch-none w-[200px] h-5"
        value={[size]}
        onValueChange={(value) => setSize(value[0])}
        max={3}
        min={1}
        step={1}
      >
        <Slider.Track className="bg-mono-600 relative grow rounded-full h-[3px]">
          <Slider.Range className="absolute bg-white rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb
          className="block w-5 h-5 bg-mono-100 shadow-[0_0_10px] rounded-full focus:outline-none hover:shadow-[0_0_10px_2px] transition"
          aria-label="Volume"
        />
      </Slider.Root>
      <figure>
        <svg
          viewBox={`
    ${-100 - 150 * size}
    ${-87 * (size * 2 + 1)}
    ${200 + 300 * size}
    ${174 * (size * 2 + 1)}`}
          width={100 + 150 * size}
          height={87 * (size * 2 + 1)}
        >
          {[...board].map((hex, i) => {
            var x = 100 * ((3 / 2) * hex.q);
            var y = 100 * ((Math.sqrt(3) / 2) * hex.q + Math.sqrt(3) * hex.r);
            return <Hexagon key={[hex.q, hex.r, hex.s]} x={x} y={y} />;
          })}
        </svg>
      </figure>
    </>
  );
}
