export function Spacer(props: { className?: string }) {
  return (
    <div
      className={`my-6 w-full border-b border-border dark:border-border ${props.className}`}
    />
  );
}
