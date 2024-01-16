import { Column } from "@components/column";
import { List } from "@components/list";
import { getThings } from "@lib/post";
import { getUrl } from "@lib/url";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Things",
  description: "Written things",
  metadataBase: new URL(getUrl()),
  openGraph: {
    title: "Things",
    description: "Written things",
    url: "https://joeyvanlierop.com/things",
    type: "website",
    images: "/og.png",
  },
};

export default async function Home() {
  const posts = await fetchPosts();
  return (
    <div className="flex flex-col items-center justify-center">
      <Column className="flex flex-col relative">
        <Link
          className="font-header font-medium text-mono-9 no-underline mb-4"
          href="/"
        >
          Joey Van Lierop
        </Link>
        <p className="font-header font-medium pb-14">Things</p>
        <List posts={posts} />
      </Column>
    </div>
  );
}

async function fetchPosts() {
  return getThings(false).map((post) => {
    return post.data;
  });
}
