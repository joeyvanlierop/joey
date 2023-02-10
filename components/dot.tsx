import { CSSProperties } from "react";

export function Dot(props: { className?: string; style?: CSSProperties }) {
  return (
    <div
      className={`${props.className} bg-black rounded-full w-2 h-2`}
      style={props.style}
    />
  );
}

// const Dot = styled("div", {
//   backgroundColor: "black",
//   borderRadius: "50%",
//   minWidth: "8px",
//   minHeight: "8px",
//   width: "8px",
//   height: "8px",
// });
