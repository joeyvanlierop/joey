import { motion, Variants } from "framer-motion";
import { List } from "../components/List/List";
import { Category, getPosts } from "../lib/Post";
import { styled } from "../stitches.config";

const categories: Category[] = [
  { name: "all", color: "#d4d4d4" },
  { name: "random", color: "#ff9aa2" },
  { name: "something", color: "#85e3ff" },
  { name: "etcetera", color: "#ffdb65" },
];

const variants: Variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

export default function Home({ posts }) {
  return (
    <Center
      variants={variants}
      initial={"closed"}
      animate={"open"}
      exit={"closed"}
      transition={{
        duration: 1,
      }}
    >
      <Column>
        <List posts={posts} categories={categories} />
      </Column>
    </Center>
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

export const Center = styled(motion.div, {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const Column = styled(motion.div, {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  marginTop: "10rem",
  width: "50%",
  "@bp2": {
    width: "90%",
  },
});
