export function Dot(props: { className?: string; color: string }) {
  console.log(props.color);
  return (
    <div
      className={`${props.className} bg-black rounded-full min-w-[8px] min-h-[8px] shadow-dot shadow-[${props.color}] bg-[${props.color}]`}
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
