export function Spacer(props: { className?: string }) {
  return (
    <div
      className={`my-6 w-full border-b-2 border-[#e8e8e8] dark:border-[#2e2e2e] ${props.className}`}
    />
  );
}
