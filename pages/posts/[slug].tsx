import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { getPost, getPostSlugs, PostData } from "../../lib/Post";
import { Center } from "../index";
import { motion } from "framer-motion";
import { styled } from "../../stitches.config";

interface PostProps {
  data: PostData;
  source: MDXRemoteSerializeResult;
}

export default function Post({ data, source }: PostProps) {
  return (
    <Center>
      <Title layoutId={data.title} layout="position">
        {data.title}
      </Title>
      <MDXRemote {...source} />
    </Center>
  );
}

const Title = styled(motion.h4, {
  position: "absolute",
  top: 150,
});

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
