import { Column } from "@components/column";
import { List } from "@components/list";
import { getPosts } from "@lib/post";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Joey Van Lierop",
  description: "A bit of my brain",
};

export default async function Home() {
  const posts = await fetchPosts();
  return (
    <div className="flex flex-col items-center justify-center">
      <Column className="relative">
        <List posts={posts} />
      </Column>
    </div>
  );
}

async function fetchPosts() {
  return getPosts(true).map((post) => {
    return post.data;
  });
}
