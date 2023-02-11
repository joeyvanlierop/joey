import { motion } from "framer-motion";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { Column } from "../../components/column";
import { getPost, getPostSlugs, PostData } from "../../lib/post";

interface PostProps {
  data: PostData;
  source: MDXRemoteSerializeResult;
}

export default function Post({ data, source }: PostProps) {
  return (
    <motion.div
      className="flex w-full justify-center"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >
      <Column className="mt-40">
        <h1 className="font-title text-3xl font-bold">{data.title}</h1>
        <div className="my-6 h-[2px] w-full bg-[#e8e8e8] dark:bg-[#2e2e2e]" />
        <MDXRemote {...source} />
      </Column>
    </motion.div>
  );
}

export async function getStaticProps(context): Promise<{ props: PostProps }> {
  const post = getPost(context.params.slug);
  const mdxSource = await serialize(post.content);
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
