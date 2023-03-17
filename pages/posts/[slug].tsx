import {
  AnimatePresence,
  motion,
  MotionProps,
  Transition,
  usePresence,
  Variants,
} from "framer-motion";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { useEffect } from "react";
import { Column } from "../../components/column";
import { Spacer } from "../../components/spacer";
import { getPost, getPostSlugs, PostData } from "../../lib/post";
import remarkGfm from "remark-gfm";

interface PostProps {
  data: PostData;
  source: MDXRemoteSerializeResult;
}

const transition: Transition = {
  type: "spring",
  bounce: 0,
  duration: 0.5,
};

const segmentProps: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: { opacity: 1, y: 0, transition: transition },
  exit: {
    opacity: 0,
    y: 10,
    transition: transition,
  },
};

const parentProps: Variants = {
  animate: {
    transition: { ...transition, staggerChildren: 0.1, staggerDirection: 1 },
  },
  exit: {
    transition: { ...transition, staggerChildren: 0.1, staggerDirection: -1 },
  },
};

export default function Post({ data, source }: PostProps) {
  const [isPresent, safeToRemove] = usePresence();

  // Wait for the exit animation propogation hack to finish
  useEffect(() => {
    if (!isPresent) setTimeout(safeToRemove, 1250);
  }, [isPresent]);

  return (
    <div className="flex w-full justify-center">
      <Column className="mt-40">
        <AnimatePresence mode="wait">
          {isPresent && (
            <motion.div
              variants={parentProps}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.h1
                className="flex justify-between font-title text-5xl font-bold"
                variants={segmentProps}
              >
                {data.title}
              </motion.h1>
              <motion.div variants={segmentProps}>
                <Spacer />
              </motion.div>
              <motion.article
                variants={segmentProps}
                className="prose dark:prose-invert"
              >
                <MDXRemote {...source} />
              </motion.article>
            </motion.div>
          )}
        </AnimatePresence>
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
