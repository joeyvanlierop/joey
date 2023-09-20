export function Center(props: {
  x: boolean;
  y: false;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex
      ${props.x === false ? "" : "justify-center"}
      ${props.y === false ? "" : "items-center"}
      ${props.className}`}
    >
      {props.children}
    </div>
  );
}
