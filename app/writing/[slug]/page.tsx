import { Column } from "@components/column";
import { getPost, getPostSlugs } from "@lib/post";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { Metadata } from "next";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import { MdxContent } from "./mdx-content";
import { getUrl } from "@lib/url";

dayjs.extend(advancedFormat);

export function generateMetadata({ params }): Metadata {
  const post = getPost(params.slug);

  return {
    title: post.data.title,
    description: post.data.description,
    openGraph: {
      title: post.data.title,
      description: post.data.description,
      url: `${getUrl()}/writing/${post.data.slug}`,
    },
  };
}

export default async function Post({ params }) {
  const post = await fetchPost(params);

  return (
    <div className="flex w-full justify-center">
      <Column className="gap-10">
        <div className="flex flex-col justify-center items-start">
          <Link
            className="font-header font-medium text-mono-400 mb-4 no-underline"
            href="/"
          >
            Joey Van Lierop
          </Link>
          <Link
            className="font-header font-medium text-mono-400 mb-4 no-underline"
            href="/writing"
          >
            Writing
          </Link>
          <h1 className="font-header font-medium mb-0">{post.data.title}</h1>
          <time className="font-header text-[#a0a0a0]">
            {dayjs(post.data.date).format("MMMM Do[,] YYYY")}
          </time>
        </div>
        {post.data.visibility === "ish" && <p>🚧 UNDER CONSTRUCTION 🚧</p>}
        <div
          className={`${post.data.visibility === "ish" ? "opacity-50" : ""}`}
        >
          <article className="prose dark:prose-invert prose-headings:font-header prose-headings:text-base prose-headings:font-medium">
            <MdxContent source={post.source} />
          </article>
        </div>
      </Column>
    </div>
  );
}

async function fetchPost(params) {
  const post = getPost(params.slug);
  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });
  return {
    data: post.data,
    source: mdxSource,
  };
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({
    slug,
  }));
}
