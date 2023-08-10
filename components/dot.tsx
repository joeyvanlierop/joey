export function Dot(props: { className?: string }) {
  return (
    <div
      className={`${props.className} min-h-[8px] min-w-[8px] w-2 h-2 rounded-full shadow-dot`}
    />
  );
}
