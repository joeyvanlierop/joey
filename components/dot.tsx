export function Dot(props: { className?: string; color: string }) {
  return (
    <div
      className={`${props.className} min-h-[8px] min-w-[8px] rounded-full shadow-dot ${props.color}`}
    />
  );
}
