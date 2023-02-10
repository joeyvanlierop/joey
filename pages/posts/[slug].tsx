import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { getPost, getPostSlugs, PostData } from "../../lib/post";
import { Center, Column } from "../index";
import { motion } from "framer-motion";
import { styled } from "@stitches/react";

interface PostProps {
  data: PostData;
  source: MDXRemoteSerializeResult;
}

export default function Post({ data, source }: PostProps) {
  return (
    <Center
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
      <Column>
        <Title>{data.title}</Title>
        <MDXRemote {...source} />
      </Column>
    </Center>
  );
}

const Title = styled("p", {
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  marginRight: "16px",
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
