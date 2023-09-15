import { Column } from "@components/column";
import { getPost } from "@lib/post";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joey",
  description: "A bit of my brain.",
  openGraph: {
    title: "Joey",
    description: "A bit of my brain.",
    url: "https://joeyvanlierop.com/",
  },
};

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Column className="flex flex-col relative leading-7">
        <article className="prose-invert prose-headings:font-header flex flex-col gap-11">
          {/* Introduction */}
          <section className="flex flex-col gap-6">
            <h1 className="font-medium leading-6">Joey Van Lierop</h1>

            <p className="animate-enter animate-delay-[120ms]">
              My little nook on the internet. Where I get to make whatever, whenever, however.{" "}
              <em className="fancy">Home</em>.
            </p>

            <p className="mb-8 animate-enter animate-delay-[240ms]">
              Currently studying computer science while developing{" "}
              <a
                href="https://cesium.com/blog/2023/08/31/fluid-planet-immerses-young-students-in-the-outdoors/"
                target="_blank"
              >
                Fluid Planet
              </a>
              .
            </p>
          </section>

          {/* Pillars */}
          <section className="flex mb-8 -mx-10 pl-10 gap-8 animate-enter animate-delay-[360ms] overflow-x-auto mask">
            <ShowoffSection title="Writing">
              <WritingShowoff slug={"the-execution"} />
              <WritingShowoff slug={"the-plan"} />

              {/* TODO: Make the dots jump */}
              <Showoff
                title="...read more"
                description={"A messy collection of my infrequent thoughts."}
                href={"/writing/"}
              />
            </ShowoffSection>
            <ShowoffSection title="Projects">
              <Showoff
                title="GoLF"
                description={"A language and compiler for a subset of Go."}
                href={"https://github.com/joeyvanlierop/golf"}
                external
              />
              <Showoff
                title="Ship It"
                description={"One of the game jams of all time."}
                href={"https://github.com/joeyvanlierop/ld-51"}
                external
              />
            </ShowoffSection>
            <ShowoffSection title="Playground">
              <Showoff
                title="Hexagons"
                description={"They are the bestagons."}
                href={"/hexagons"}
              />
            </ShowoffSection>
          </section>

          {/* Current events */}
          <section className="flex flex-col gap-8">
            <h2 className="animate-enter animate-delay-[480ms] font-medium">
              Today
            </h2>

            <p className="animate-enter animate-delay-[600ms]">
              Getting back into the flow of things. Learning how to learn again.
              Finishing the last bit of school strong. The (ethical) hacking
              class definitely has potential, but can it beat the{" "}
              <em className="fancy">The Music of Led Zeppelin</em> with Ralph
              Maier? Probably not.
            </p>

            <p className="animate-enter animate-delay-[740ms]">
              Taking lots of inspiration from{" "}
              <a href={"https://paco.me/"} target={"_blank"}>
                Paco
              </a>
              ,{" "}
              <a href={"https://www.notion.so/"} target={"_blank"}>
                Notion
              </a>
              , and{" "}
              <a href={"https://linear.app/"} target={"_blank"}>
                Linear
              </a>
              . Learning how to make things detailed, elegant, and blazing
              fast™. Trying to understand how to combine it all into a
              unparalleled, unified experience. Buzzword buzzword buzzword.
            </p>
          </section>
        </article>
      </Column>
    </div>
  );
}

function ShowoffSection(props) {
  return (
    <section className="min-w-[192px] max-w-[192px]">
      <h3 className="text-sm text-mono-200 pb-4">{props.title}</h3>
      <div className="flex flex-col gap-4">{props.children}</div>
    </section>
  );
}

function Showoff(props) {
  return (
    <div>
      <span className="flex items-center gap-1">
        <a href={props.href} target={props.external ? "_blank" : undefined}>
          {props.title}
        </a>
        {props.external && (
          <ArrowTopRightIcon
            className="text-[#707070]"
            width={16}
            height={16}
          />
        )}
      </span>
      <p className="text-mono-200 ">{props.description}</p>
    </div>
  );
}

function WritingShowoff(props) {
  const post = getPost(props.slug);
  return (
    <Showoff
      title={post.data.title}
      description={post.data.description}
      href={`/writing/${post.data.slug}`}
    />
  );
}
