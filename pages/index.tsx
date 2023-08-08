import { Column } from "@components/column";
import { List } from "@components/list";
import { Category, getPosts } from "@lib/post";
import { FormEvent, useRef, useState } from "react";

const categories: Category[] = [
  { name: "all", color: "bg-neutral-300 shadow-neutral-300" },
  { name: "random", color: "bg-red-300 shadow-red-300" },
  { name: "plants", color: "bg-green-300 shadow-green-300" },
  { name: "travel", color: "bg-indigo-300 shadow-indigo-300" },
];

export default function Home({ posts }) {
  const sendMessageRef = useRef<HTMLTextAreaElement>(null);

  function onMessageInput(event: FormEvent<HTMLTextAreaElement>): void {
    sendMessageRef.current.scrollHeight;
    sendMessageRef.current.style.height = "5px";
    sendMessageRef.current.style.height =
      sendMessageRef.current.scrollHeight + "px";
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Column className="relative">
        <div className="flex min-h-[25svh] shrink-0 flex-col justify-end gap-3 pb-12 font-header">
          <h1 className="mb-0">Oh hi there.</h1>
          <textarea
            ref={sendMessageRef}
            onInput={onMessageInput}
            className="h-12 w-full resize-none overflow-hidden rounded-md p-3 align-text-top focus:outline-none"
            placeholder="Write me a message"
          />
        </div>
        <List posts={posts} categories={categories} />
        <div className="fixed bottom-0 left-0 right-0 h-[10%] bg-gradient-to-t from-[#121212]" />
      </Column>
    </div>
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
