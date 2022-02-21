import { styled } from "../stitches.config";
import { List } from "../components/List/List";
import { Category, getPosts } from "../lib/Post";
import { ThemeButton } from "../components/ThemeButton";

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
      <TopRight>
        <ThemeButton onClick={(theme) => console.log("THEME:", theme)} />
      </TopRight>
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
});

const TopRight = styled("div", {
  position: "absolute",
  top: "50px",
  right: "50px",
});
