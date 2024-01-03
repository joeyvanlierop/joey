export function Spacer(props: { className?: string }) {
  return (
    <div
      className={`my-6 w-full border-b border-mono-5 dark:border-mono-5 ${props.className}`}
    />
  );
}
