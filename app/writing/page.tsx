import { Column } from "@components/column";
import { List } from "@components/list";
import { getPosts } from "@lib/post";
import { getUrl } from "@lib/url";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing",
  description: "Written things",
  metadataBase: new URL(getUrl()),
  openGraph: {
    title: "Writing",
    description: "Written things",
    url: "https://joeyvanlierop.com/writing",
    type: "website",
    images: "/og.png",
  },
};

export default async function Home() {
  const posts = await fetchPosts();
  return (
    <>
      <Link
        className="font-header font-medium text-mono-9 no-underline mb-4"
        href="/"
      >
        Joey Van Lierop
      </Link>
      <p className="font-header font-medium pb-14">Writing</p>
      <List posts={posts} />
    </>
  );
}

async function fetchPosts() {
  return getPosts(false).map((post) => {
    return post.data;
  });
}
