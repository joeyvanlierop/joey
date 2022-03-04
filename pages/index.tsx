import { List } from "../components/List/List";
import { Category, getPosts } from "../lib/Post";
import { styled } from "../stitches.config";

const categories: Category[] = [
  { name: "All", color: "#d4d4d4" },
  { name: "Random", color: "#ff9aa2" },
  { name: "Ratings", color: "#85e3ff" },
  { name: "Etcetera", color: "#ffdb65" },
];

export default function Home({ posts }) {
  return (
    <Center>
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

export const Center = styled("div", {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Column = styled("div", {
  width: "50%",
  position: "absolute",
  top: "30%",

  "@bp2": {
    width: "90%",
  },
});
