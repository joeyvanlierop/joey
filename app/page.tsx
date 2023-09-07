import { Column } from "@components/column";
import { getPosts } from "@lib/post";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joey Van Lierop",
  description: "A bit of my brain",
};

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Column className="flex flex-col relative leading-7">
        <article className="prose-invert prose-headings:font-header flex flex-col gap-8">
          <h1>Joey Van Lierop</h1>

          <p>
            Crafting interfaces. Building polished software and web experiences.
            Experimenting with magical details in user interfaces. Webmaster at
            Linear.
          </p>

          <p className="mb-8">
            Currently studying computer science while developing{" "}
            <a
              className="underline underline-offset-[2.5px]"
              href="https://cesium.com/blog/2023/08/31/fluid-planet-immerses-young-students-in-the-outdoors/"
            >
              Fluid Planet
            </a>
          </p>

          <div className="flex gap-8 mb-8">
            <section className="min-w-[200px]">
              <p className="text-sm text-neutral-400 pb-4">Writing</p>
              <div className="flex flex-col gap-4">
                <Showoff
                  title="Post Hike Clarity"
                  description={
                    "Shenanigans and tomfoolery on the West Coast Trail."
                  }
                  href={"/writing/post-hike-clarity"}
                />
                <Showoff
                  title="The Panic"
                  description={"Getting in way over my head."}
                  href={"/writing/the-panic"}
                />
                {/* TODO: Make the dots jump */}
                <Showoff
                  title="...read more"
                  description={"A messy collection of my infrequent ."}
                  href={"/writing/"}
                />
              </div>
            </section>
            <section className="min-w-[200px]">
              <p className="text-sm text-neutral-400 pb-4">Projects</p>
              <div className="flex flex-col gap-4">
                <Showoff
                  title="Ship It"
                  description={"One of the game jams of all time."}
                  href={"https://github.com/joeyvanlierop/ld-51"}
                  external
                />
                <Showoff
                  title="GoLF"
                  description={"A language and compiler for a subset of Go."}
                  href={"https://github.com/joeyvanlierop/golf"}
                  external
                />
              </div>
            </section>
            <section className="min-w-[200px]">
              <p className="text-sm text-neutral-400 pb-4">Todo</p>
              <div className="flex flex-col gap-4">
                <Showoff
                  title="Replit"
                  description={"Trying to make something cool."}
                  href={"#"}
                />
              </div>
            </section>
          </div>

          <h1>Now</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit
            laoreet id donec ultrices tincidunt arcu non. Neque volutpat ac
            tincidunt vitae semper quis lectus. Risus viverra adipiscing at in
            tellus integer. Pretium lectus quam id leo in. Elementum nibh tellus
            molestie nunc non. Lacus vel facilisis volutpat est.
          </p>

          <p>
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
      <a
        className="underline underline-offset-[2.5px]"
        href={props.href}
        target={props.external ? "_blank" : undefined}
      >
        {props.title}
      </a>
      <p className="text-neutral-400 ">{props.description}</p>
    </div>
  );
}

async function fetchPosts() {
  return getPosts(false).map((post) => {
    return post.data;
  });
}
