"use client";

export function Hexagon(props) {
  return (
    <polygon
      points="100,0 50,-87 -50,-87 -100,-0 -50,87 50,87"
      className="cursor-pointer fill-transparent stroke-[4px] stroke-mono-500 hover:fill-mono-700 transition duration-100"
      style={{
        transform: `translate(${props.x}px, ${props.y}px)`,
      }}
    />
  );
}
