import { Column } from "@components/column";
import { getPosts } from "@lib/post";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joey",
  description: "A bit of my brain",
  openGraph: {
    title: "Joey",
    description: "A bit of my brain",
    url: "https://joeyvanlierop.com/",
  },
};

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Column className="flex flex-col relative leading-7">
        <article className="prose-invert prose-headings:font-header flex flex-col gap-8">
          <h1 className="animate-enter">Joey Van Lierop</h1>

          <p className="animate-enter animate-delay-[120ms]">
            Making things, climbing mountains, and hiking oceans. Boundless
            horizons, endless inspiration
          </p>

          <p className="mb-8 animate-enter animate-delay-[240ms]">
            Currently studying computer science while developing{" "}
            <a
              className="underline underline-offset-[2.5px]"
              href="https://cesium.com/blog/2023/08/31/fluid-planet-immerses-young-students-in-the-outdoors/"
            >
              Fluid Planet
            </a>
          </p>

          <div
            className="flex mb-8 -mx-10 pl-10 animate-enter animate-delay-[360ms] overflow-x-auto"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right,transparent 0,#000 40px,#000 calc(100% - 40px),transparent 100%)",
              maskImage:
                "linear-gradient(to right,transparent 0,#000 40px,#000 calc(100% - 40px),transparent 100%)",
            }}
          >
            <section className="min-w-[192px] max-w-[192px]">
              <p className="text-sm text-neutral-400 pb-4">Writing</p>
              <div className="flex flex-col gap-4">
                <Showoff
                  title="After"
                  description={
                    "Shenanigans and tomfoolery on the West Coast Trail."
                  }
                  href={"/writing/after"}
                />
                <Showoff
                  title="Before"
                  description={"Getting in way over my head."}
                  href={"/writing/before"}
                />
                {/* TODO: Make the dots jump */}
                <Showoff
                  title="...read more"
                  description={"A messy collection of my infrequent thoughts."}
                  href={"/writing/"}
                />
              </div>
            </section>
            <section className="min-w-[192px] max-w-[192px] ml-8">
              <p className="text-sm text-neutral-400 pb-4">Projects</p>
              <div className="flex flex-col gap-4">
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
              </div>
            </section>
            <section className="min-w-[192px] max-w-[192px] ml-8">
              <p className="text-sm text-neutral-400 pb-4">Todo</p>
              <div className="flex flex-col gap-4">
                <Showoff
                  title="Something"
                  description={"Cool thing that I am building."}
                  href={"#soon"}
                />
              </div>
            </section>
          </div>

          <h1 className="animate-enter animate-delay-[480ms]">Now</h1>

          <p className="animate-enter animate-delay-[600ms]">
            I don't do a lot of public speaking, so I looked up a memorable
            quote to start my speech, and this is what I found. OK, you're
            staring at me blankly, but this whole thing is a quote. I know that
            sounds confusing, but... you know what, never mind.
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

function Showoff(props) {
  return (
    <div>
      <span className="flex items-center gap-1">
        <a
          className="underline underline-offset-[2.5px]"
          href={props.href}
          target={props.external ? "_blank" : undefined}
        >
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
      <p className="text-neutral-400 ">{props.description}</p>
    </div>
  );
}

async function fetchPosts() {
  return getPosts(false).map((post) => {
    return post.data;
  });
}
