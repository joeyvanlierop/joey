"use client";

import * as Slider from "@radix-ui/react-slider";
import { useMemo, useState } from "react";
import { Hexagon } from "./hexagon";

type Hex = {
  q: number;
  r: number;
  s: number;
};

export function Honeycomb({ size }) {
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
  );
}
