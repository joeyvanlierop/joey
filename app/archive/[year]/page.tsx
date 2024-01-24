import { Column } from "@components/column";
import { List } from "@components/list";
import { getPosts } from "@lib/post";
import dayjs from "dayjs";
import Link from "next/link";

// export function generateMetadata({ params }): Metadata {
//   const post = getPost(params.slug);

//   return {
//     title: post.data.title,
//     description: post.data.description,
//     metadataBase: new URL(getUrl()),
//     openGraph: {
//       title: post.data.title,
//       description: post.data.description,
//       url: `${getUrl()}/writing/${post.data.slug}`,
//       type: "article",
//       publishedTime: post.data.date,
//       modifiedTime: post.data.updated,
//       authors: ["Joey Van Lierop", "Joseph Van Lierop"],
//       images: "/og.png",
//     },
//   };
// }

export default async function Year({ params }) {
  const posts = await fetchPosts(params.year);

  return (
    <div className="flex w-full justify-center">
      <Column className="gap-14">
        <div className="flex flex-col justify-center items-start">
          <Link
            className="font-header font-medium text-mono-9 mb-4 no-underline"
            href="/"
          >
            Joey Van Lierop
          </Link>
          <Link
            className="font-header font-medium text-mono-9 mb-4 no-underline"
            href="/archive"
          >
            Archive
          </Link>
          <h1 className="font-header font-medium mb-0">{params.year}</h1>
        </div>
        <List posts={posts} />
      </Column>
    </div>
  );
}

async function fetchPosts(year: string) {
  return getPosts(false)
    .filter((post) => dayjs(post.data.date).year().toString() === year)
    .map((post) => {
      return post.data;
    });
}

export async function generateStaticParams() {
  const posts = getPosts();
  const years = Array.from(
    new Set(posts.map((post) => dayjs(post.data.date).year().toString()))
  );
  return years.map((year) => ({
    year,
  }));
}
