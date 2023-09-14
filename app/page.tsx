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
        <article className="prose-invert prose-headings:font-header flex flex-col gap-8">
          <h1 className="font-medium leading-6">Joey Van Lierop</h1>

          <p className="animate-enter animate-delay-[120ms]">
            Climbing mountains, hiking oceans, and making things. Boundless
            horizons, endless inspiration.
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

          <div className="flex mb-8 -mx-10 pl-10 gap-8 animate-enter animate-delay-[360ms] overflow-x-auto mask">
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
          </div>

          <h2 className="animate-enter animate-delay-[480ms] font-medium">
            Now
          </h2>

          <p className="animate-enter animate-delay-[600ms]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <p className="animate-enter animate-delay-[740ms]">
            Aliquam ut porttitor leo a diam sollicitudin. Purus in massa tempor
            nec feugiat nisl pretium. Tristique et egestas quis ipsum. Ante
            metus dictum at tempor commodo ullamcorper a. Gravida arcu ac tortor
            dignissim.
          </p>
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
