import { Column } from "@components/column";
import { Spacer } from "@components/spacer";
import { getPost, getPostSlugs } from "@lib/post";
import { ResetIcon } from "@radix-ui/react-icons";
import dayjs from "dayjs";
import { Metadata, ResolvingMetadata } from "next";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import { MdxContent } from "./mdx-content";

export function generateMetadata({ params }): Metadata {
  const post = getPost(params.slug);

  return {
    title: post.data.title,
  };
}

export default async function Post({ params }) {
  const post = await fetchPost(params);

  return (
    <div className="flex w-full justify-center">
      <Column>
        <div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center ">
              <h3 className="font-title font-bold font-header">
                {post.data.title}
              </h3>
              <Link href={"/"}>
                <ResetIcon className="w-6 h-6 " />
              </Link>
            </div>
            <time className="font-header text-[#a0a0a0]">
              {dayjs(post.data.date).format("MMMM Do[,] YYYY")}
            </time>
          </div>
          <div>
            <Spacer />
          </div>
          <article className="prose dark:prose-invert">
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
    slug: slug,
  }));
}
