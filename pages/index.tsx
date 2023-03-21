import { motion, Variants } from "framer-motion";
import { FormEvent, useRef, useState } from "react";
import { Column } from "../components/column";
import { List } from "../components/list";
import { Nav } from "../components/nav";
import { Category, getPosts } from "../lib/post";

const categories: Category[] = [
  { name: "all", color: "bg-neutral-300 shadow-neutral-300" },
  { name: "random", color: "bg-red-300 shadow-red-300" },
  { name: "plants", color: "bg-green-300 shadow-green-300" },
  { name: "travel", color: "bg-indigo-300 shadow-indigo-300" },
];

const variants: Variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

export default function Home({ posts }) {
  const [selected, setSelected] = useState(0);
  const sendMessageRef = useRef<HTMLTextAreaElement>(null);

  function onMessageInput(event: FormEvent<HTMLTextAreaElement>): void {
    console.log(sendMessageRef.current.scrollHeight);
    sendMessageRef.current.style.height = "5px";
    sendMessageRef.current.style.height =
      sendMessageRef.current.scrollHeight + "px";
  }

  return (
    <motion.div
      className="flex h-screen flex-col items-center justify-center"
      variants={variants}
      initial={"closed"}
      animate={"open"}
      exit={"closed"}
      transition={{
        duration: 1,
      }}
    >
      <Column className="relative">
        <div className="flex min-h-[25svh] shrink-0 flex-col justify-end gap-3 pb-12">
          <h1 className="mb-0">Oh hi there.</h1>
          <p className="">I'm Joey. This is where I write stuff.</p>
          <p>
            Not sure exactly what I'm going to write about, but it will probably
            be super lame. Probably a bit of{" "}
            <span className="decoration-skip-none underline decoration-amber-300 decoration-wavy">
              travel
            </span>
            ,{" "}
            <span className="decoration-skip-none underline decoration-red-500 decoration-wavy">
              coding
            </span>
            ,{" "}
            <span className="decoration-skip-none underline decoration-green-300 decoration-wavy">
              plants
            </span>
            , and some other{" "}
            <span className="decoration-skip-none underline decoration-orange-300 decoration-wavy">
              random
            </span>{" "}
            things.
          </p>
          <textarea
            ref={sendMessageRef}
            onInput={onMessageInput}
            className="h-12 w-full resize-none overflow-hidden rounded-md p-3 align-text-top focus:outline-none"
            placeholder="Write me a message"
          />
        </div>
        <List posts={posts} categories={categories} selected={selected} />
        <div className="fixed bottom-0 left-0 right-0 h-[10%] bg-gradient-to-t from-[#121212]" />
        <Nav
          categories={categories}
          selected={selected}
          setSelected={setSelected}
        />
      </Column>
    </motion.div>
  );
}

export async function getStaticProps() {
  const posts = getPosts(true).map((post) => {
    return post.data;
  });

  return {
    props: {
      posts,
    },
  };
}
