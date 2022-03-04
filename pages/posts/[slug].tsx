import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { getPost, getPostSlugs, PostData } from "../../lib/Post";
import { Center } from "../index";
import { Title } from "../../components/List/ListItem";
import { motion } from "framer-motion";

interface PostProps {
  data: PostData;
  source: MDXRemoteSerializeResult;
}

export default function Post({ data, source }: PostProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.25,
        },
      }}
    >
      <Center>
        <Title
          // layoutId={data.title}
          // layout="position"
          css={{
            position: "absolute",
            top: 150,
          }}
        >
          {data.title}
        </Title>
        <MDXRemote {...source} />
      </Center>
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
