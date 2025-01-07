import { Column } from "@components/column";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <article className="prose-invert prose-headings:font-header flex flex-col gap-11">
        <section className="flex flex-col gap-6">
          <Link
            className="font-header font-medium text-mono-9 no-underline leading-6"
            href="/"
          >
            Joey Van Lierop
          </Link>
          <p>Not all those who wander are lost.</p>
        </section>
      </article>
    </>
  );
}
