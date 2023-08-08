import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { Column } from "@components/column";
import { Spacer } from "@components/spacer";
import { getPost, getPostSlugs, PostData } from "@lib/post";
import remarkGfm from "remark-gfm";

interface PostProps {
  data: PostData;
  source: MDXRemoteSerializeResult;
}

export default function Post({ data, source }: PostProps) {
  return (
    <div className="flex w-full justify-center">
      <Column className="mt-40">
        <div>
          <h1 className="flex justify-between font-title text-5xl font-bold">
            {data.title}
          </h1>
          <div>
            <Spacer />
          </div>
          <article className="prose dark:prose-invert">
            <MDXRemote {...source} />
          </article>
        </div>
      </Column>
    </div>
  );
}

export async function getStaticProps(context): Promise<{ props: PostProps }> {
  const post = getPost(context.params.slug);
  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });
  return {
    props: {
      data: post.data,
      source: mdxSource,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      ...getPostSlugs().map((slug) => {
        return {
          params: {
            slug,
          },
        };
      }),
    ],
    fallback: false,
  };
}
