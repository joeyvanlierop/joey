const defaultProps = {
  x: true,
  y: true,
};

export function Center(
  props: { x: boolean; y: false; children } & typeof defaultProps
) {
  return (
    <div
      className={`flex ${props.x ? "justify-center" : ""} ${
        props.y ? "items-center" : ""
      }`}
    >
      {props.children}
    </div>
  );
}
