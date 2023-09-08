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
    // TODO: Define a description in each post
    description: post.data.title,
    openGraph: {
      title: post.data.title,
      // TODO: Here too
      description: post.data.title,
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
          <div className="flex items-center justify-start">
            <Link href={"/"}>
              <ArrowLeftIcon className="w-5 h-5 -ml-8" />
            </Link>
            <h1 className="font-header mb-0">{post.data.title}</h1>
          </div>
          <time className="font-header text-[#a0a0a0]">
            {dayjs(post.data.date).format("MMMM Do[,] YYYY")}
          </time>
        </div>
        <article className="prose dark:prose-invert prose-headings:font-header">
          <MdxContent source={post.source} />
        </article>
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
