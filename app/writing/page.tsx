import { Column } from "@components/column";
import { List } from "@components/list";
import { getPosts } from "@lib/post";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description: "Written things",
  openGraph: {
    title: "Writing",
    description: "Written things",
    url: "https://joeyvanlierop.com/writing",
  },
};

export default async function Home() {
  const posts = await fetchPosts();
  return (
    <div className="flex flex-col items-center justify-center">
      <Column className="flex flex-col relative">
        <List posts={posts} />
      </Column>
    </div>
  );
}

async function fetchPosts() {
  return getPosts(false).map((post) => {
    return post.data;
  });
}
