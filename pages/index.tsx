import { styled } from "../stitches.config";
import { List } from "../components/List";
import { Category, Post } from "../components/Post";

const categories: Category[] = [
  { name: "All", color: "#d4d4d4" },
  { name: "Random", color: "#ff9aa2" },
  { name: "Ratings", color: "#85e3ff" },
  { name: "Etcetera", color: "#ffdb65" },
];

const posts: Post[] = [
  { category: categories[1], title: "This is a test post", date: "28th" },
  { category: categories[3], title: "This is not a test post", date: "19th" },
  {
    category: categories[1],
    title: "This may or may not be a test post",
    date: "8th",
  },
  {
    category: categories[2],
    title: "This is most definitely a test post",
    date: "2nd",
  },
];

export default function Home() {
  return (
    <Center>
      <Column>
        <List posts={posts} categories={categories} />
      </Column>
    </Center>
  );
}

const Center = styled("div", {
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
