import { Column } from "@components/column";
import { Nook } from "@components/home";
import { getPost } from "@lib/post";
import { getUrl } from "@lib/url";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Metadata } from "next";
// import { useCallback, useState } from "react";

export const metadata: Metadata = {
  title: "Joey",
  description: "A bit of my brain.",
  metadataBase: new URL(getUrl()),
  openGraph: {
    title: "Joey",
    description: "A bit of my brain.",
    url: "https://joeyvanlierop.com",
    type: "website",
    images: "/og.png",
  },
};

export default async function Home() {
  // const stagger = 120;
  // const [delay, setDelay] = useState(stagger);

  // const getDelay = useCallback(() => {
  //   setDelay((delay) => delay + stagger);
  //   return delay;
  // }, [delay]);

  return (
    <div className="flex flex-col items-center justify-center">
      <Column className="flex flex-col relative leading-7">
        <article className="prose-invert prose-headings:font-header flex flex-col gap-11">
          {/* Introduction */}
          <section className="flex flex-col gap-6">
            <h1 className="font-medium leading-6">Joey Van Lierop</h1>

            <p className="animate-enter animate-delay-[120ms]">
              My little nook on the internet. Infrequently updated, but
              sometimes more frequently.{" "}
              <Nook popup="🏠">
                <em className="fancy">Home</em>
              </Nook>
              .
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
              <WritingShowoff slug={"procrastination"} />
              <WritingShowoff slug={"ciao"} />

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
              Back into the flow of things. School can be soul-crushing, but I
              feel more inspired than ever. Need to get outside more, though.
            </p>

            <p className="animate-enter animate-delay-[600ms]">
              The (ethical) hacking course is interesting, but some of the
              exploits are just way too much. Nothing can quite beat{" "}
              <a
                target="_blank"
                href="https://web.archive.org/web/20200702034239/https://scpa.ucalgary.ca/manageprofile/courses/w21/MUSI306.4"
              >
                {" "}
                <em className="fancy">The </em>
                <Nook popup="🎶">
                  <em className="fancy">Music</em>
                </Nook>{" "}
                <Nook popup="🎸">
                  <em className="fancy">of Led Zeppelin</em>
                </Nook>{" "}
                with Ralph Maier.
              </a>
            </p>

            <p className="animate-enter animate-delay-[740ms]">
              Borrowing design ideas from from{" "}
              <a href={"https://paco.me/"} target={"_blank"}>
                Paco
              </a>
              ,{" "}
              <a href={"https://linear.app/"} target={"_blank"}>
                Linear
              </a>
              , and{" "}
              <a href={"https://www.notion.so/"} target={"_blank"}>
                Notion
              </a>
              . Learning how to make things detailed, elegant, and
              blazingly-fast™. Trying to understand how to combine it all into
              a unparalleled, unified experience. Buzzword buzzword buzzword.
              Buzzword.
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
