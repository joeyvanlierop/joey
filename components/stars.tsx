export function Stars(props: { n: number; quote: string }) {
  return (
    <div className="mb-3 table -ml-[40px]">
      <Star enabled={props.n >= 3} />
      <Star enabled={props.n >= 2} />
      <Star enabled={props.n >= 1} />
      <div className="w-1 table-cell" />
      <q>{props.quote}</q>
    </div>
  );
}

function Star(props: { enabled: boolean }) {
  return (
    <span
      className={`${
        props.enabled ? "visible" : "invisible"
      } table-cell w-2 pr-1`}
    >
      <svg
        width="8"
        height="11"
        viewBox="0 0 10 10"
        xmlns="http://www.w3.org/2000/svg"
        className="text-mono-400"
      >
        <circle cx="5" cy="5" r="5" fill="currentColor" />
      </svg>
    </span>
  );
}
