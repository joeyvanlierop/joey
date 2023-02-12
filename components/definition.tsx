export function Definition(props: {
  name: string;
  phoenetic: string;
  type: string;
  definition: string;
  example: string;
}) {
  return (
    <>
      <h4 className="mb-0">{props.name}</h4>
      <p>{props.phoenetic}</p>
      <p className="dark:text-neutral-400">{props.type}</p>
      <blockquote className="space-y-1">
        <p className="dark:text-neutral-400">{props.definition}</p>
        <p className="italic dark:text-neutral-400">{props.example}</p>
      </blockquote>
    </>
  );
}
