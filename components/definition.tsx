export function Definition(props: {
  name: string;
  phoenetic: string;
  type: string;
  definition: string;
  example: string;
}) {
  return (
    <section className="rounded-lg bg-zinc-100 p-4 dark:bg-zinc-900">
      <h4 className="my-0">{props.name}</h4>
      <p className="my-0">{props.phoenetic}</p>
      <p className="my-0 text-neutral-500 dark:text-mono-11">{props.type}</p>
      <p className="my-0 ml-5 text-neutral-500 dark:text-mono-11">
        {props.definition}
      </p>
      <p className="my-0 ml-5 italic text-neutral-500 dark:text-mono-11">
        {props.example}
      </p>
    </section>
  );
}
