export function Spacer(props: { className?: string }) {
  return (
    <div
      className={`my-6 w-full border-b border-[#2e2e2e] dark:border-[#2e2e2e] ${props.className}`}
    />
  );
}
