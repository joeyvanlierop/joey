import { motion, Variants } from "framer-motion";
import { Column } from "../components/column";
import { List } from "../components/list";
import { Category, getPosts } from "../lib/post";

const categories: Category[] = [
  { name: "all", color: "bg-[#d4d4d4] shadow-[#d4d4d4]" },
  { name: "random", color: "bg-[#ff9aa2] shadow-[#ff9aa2]" },
  { name: "something", color: "bg-[#85e3ff] shadow-[#85e3ff]" },
  { name: "etcetera", color: "bg-[#ffdb65] shadow-[#ffdb65]" },
];

const variants: Variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

export default function Home({ posts }) {
  return (
    <motion.div
      className="flex h-screen w-screen flex-col items-center justify-center"
      variants={variants}
      initial={"closed"}
      animate={"open"}
      exit={"closed"}
      transition={{
        duration: 1,
      }}
    >
      <Column className="mt-40">
        <List posts={posts} categories={categories} />
      </Column>
    </motion.div>
  );
}

export async function getStaticProps() {
  const posts = getPosts().map((post) => {
    return post.data;
  });

  return {
    props: {
      posts,
    },
  };
}
