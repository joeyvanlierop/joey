import { Column } from "@components/column";
import { Nook } from "@components/nook";
import { getPost } from "@lib/post";
import { getUrl } from "@lib/url";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joey Van Lierop",
  description:
    "My nook on the internet. Updated every now and then, but mostly then.",
  metadataBase: new URL(getUrl()),
  openGraph: {
    title: "Joey Van Lierop",
    description:
      "My nook on the internet. Updated every now and then, but mostly then.",
    url: "https://joeyvanlierop.com",
    type: "website",
    images: "/og.png",
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
              My nook on the internet. Updated every now and then, but
              mostly then.
            </p>

            <p className="mb-8 animate-enter animate-delay-[240ms]">
              Studying computer science while developing{" "}
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
              <WritingShowoff slug={"olympic-shoes"} />
              <WritingShowoff slug={"a-roll-of-winter"} />

              {/* TODO: Make the dots jump */}
              <Showoff
                title="...more"
                description={"A collection of my infrequent thoughts."}
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
            <ShowoffSection title="Videos">
              <Showoff
                title="Livingstone"
                description={"Crown land backpacking"}
                href={"https://youtu.be/RYQblWW2RpE?si=8McPFI4buanr57HW"}
                external
              />
              <Showoff
                title="Lake Louise"
                description={"Slackcountry"}
                href={"https://youtu.be/mALdgkO1vtQ?si=B01csEgAR5vvg-RB"}
                external
              />
              <Showoff
                title="Improvement"
                description={"Getting stronger"}
                href={"https://youtu.be/66ND2IStaTI?si=2Xgp9YKyNLJER4z6"}
                external
              />
            </ShowoffSection>
          </section>

          {/* Current events */}
          <section className="flex flex-col gap-8">
            <h2 className="animate-enter animate-delay-[480ms] font-medium">
              Today
            </h2>

            <p className="animate-enter animate-delay-[600ms]">
              Almost done school (ish). Becoming an expert in Greek and Roman studies somehow. Getting stoked for ski season soon, we're due for lots of snow.
            </p>

            <p className="animate-enter animate-delay-[600ms]">
              Last semester, the{" "}
              <a
                target="_blank"
                href="https://web.archive.org/web/20220929210033/https://contacts.ucalgary.ca/info/cpsc/courses/w19/CPSC525"
              >
                (ethical) hacking course with Ryan Henry
              </a>{" "}
              showed me how evil code can be if you are clever enough.{" "}
              <a
                target="_blank"
                href="https://web.archive.org/web/20231202114757/https://hist.ucalgary.ca/manageprofile/courses/f23/HTST200"
              >
                <em className="fancy">Events and Ideas that Shook the World</em>{" "}
                with Paul Chastko
              </a>{" "}
              was a fun chronological exploration of revolution. I will say that
              nothing can quite beat{" "}
              <a
                target="_blank"
                href="https://web.archive.org/web/20200702034239/https://scpa.ucalgary.ca/manageprofile/courses/w21/MUSI306.4"
              >
                <em className="fancy">The </em>
                <Nook popup="🎶">
                  <em className="fancy">Music </em>
                </Nook>
                <em className="fancy">of </em>
                <Nook popup="🎸">
                  <em className="fancy">Led Zeppelin </em>
                </Nook>
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
      <h3 className="text-sm text-mono-11 pb-4">{props.title}</h3>
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
          <ArrowTopRightIcon className="text-mono-9" width={16} height={16} />
        )}
      </span>
      <p className="text-mono-11">{props.description}</p>
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
