import {
  AnimatePresence,
  motion,
  MotionProps,
  Transition,
  usePresence,
} from "framer-motion";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { useEffect } from "react";
import { Column } from "../../components/column";
import { getPost, getPostSlugs, PostData } from "../../lib/post";

interface PostProps {
  data: PostData;
  source: MDXRemoteSerializeResult;
}

const transition: Transition = {
  type: "spring",
  bounce: 0,
  duration: 1,
};
const motionProps = (delay: number, exitDelay: number): MotionProps => ({
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { ...transition, delay: delay } },
  exit: { opacity: 0, y: 20, transition: { ...transition, delay: exitDelay } },
});

export default function Post({ data, source }: PostProps) {
  const [isPresent, safeToRemove] = usePresence();

  // Wait for the exit animation propogation hack to finish
  useEffect(() => {
    if (!isPresent) setTimeout(safeToRemove, 1250);
  }, [isPresent]);

  return (
    <div className="flex w-full justify-center">
      <Column className="mt-40">
        <AnimatePresence>
          {isPresent && (
            <>
              <motion.h1
                className="font-title text-5xl font-bold"
                {...motionProps(0, 0.2)}
              >
                {data.title}
              </motion.h1>
              <motion.div
                className="my-6 h-[2px] w-full bg-[#e8e8e8] dark:bg-[#2e2e2e]"
                {...motionProps(0.1, 0.1)}
              />
              <motion.div {...motionProps} {...motionProps(0.2, 0)}>
                <MDXRemote {...source} />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </Column>
    </div>
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
