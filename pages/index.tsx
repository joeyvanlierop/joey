import { motion, Variants } from "framer-motion";
import { Column } from "../components/column";
import { List } from "../components/list";
import { Category, getPosts } from "../lib/post";

const categories: Category[] = [
  { name: "all", color: "bg-neutral-300 shadow-neutral-300" },
  { name: "random", color: "bg-red-300 shadow-red-300" },
  { name: "plants", color: "bg-green-300 shadow-green-300" },
  { name: "skiing", color: "bg-cyan-300 shadow-cyan-300" },
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
