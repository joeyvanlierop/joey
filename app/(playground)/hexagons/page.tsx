"use client";

import { Column } from "@components/column";
import { Metadata } from "next";
import { Hexagon } from "./hexagon";
import { useEffect, useState } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hexagons",
  description: "They are the bestagons.",
  openGraph: {
    title: "Hexagons",
    description: "They are the bestagons.",
    url: "https://joeyvanlierop.com/hive",
  },
};

type Hex = {
  q: number;
  r: number;
  s: number;
};

export default function Home() {
  const SIZE = 3;
  const [board, setBoard] = useState<Set<Hex>>(new Set());

  useEffect(() => {
    const newBoard = new Set<Hex>();

    for (let q = -SIZE; q <= SIZE; q++) {
      for (let r = -SIZE; r <= SIZE; r++) {
        for (let s = -SIZE; s <= SIZE; s++) {
          if (q + r + s === 0) {
            newBoard.add({ q, r, s });
          }
        }
      }
    }

    setBoard(newBoard);
  }, []);

  return (
    <div className="flex flex-col items-center gap-5">
      <figure>
        <svg viewBox="-100 -87 200 174" width={100} height={87 + 2}>
          <Hexagon x={0} y={0} />
        </svg>
      </figure>
      <figure>
        <svg viewBox="-250 -174 500 261" width={250} height={87 * (3 / 2) + 2}>
          <Hexagon x={-150} y={-87} />
          <Hexagon x={0} y={0} />
          <Hexagon x={150} y={-87} />
        </svg>
      </figure>
      <figure>
        <svg
          viewBox={`
          ${-100 - 150 * SIZE}
          ${-87 * (SIZE * 2 + 1)}
          ${200 + 300 * SIZE}
          ${174 * (SIZE * 2 + 1)}`}
          width={100 + 150 * SIZE}
          height={87 * (SIZE * 2 + 1)}
        >
          {[...board].map((hex) => {
            var x = 100 * ((3 / 2) * hex.q);
            var y = 100 * ((Math.sqrt(3) / 2) * hex.q + Math.sqrt(3) * hex.r);
            return <Hexagon key={[hex.q, hex.r, hex.s]} x={x} y={y} />;
          })}
        </svg>
      </figure>
    </div>
  );
}
