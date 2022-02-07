import { styled } from "../stitches.config";
import { List } from "../components/List/List";
import { Category } from "../lib/Post";
import matter from "gray-matter";
import fs from "fs";
import path from "path";

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
  const posts = fs.readdirSync(path.join("pages", "posts")).map((file) => {
    const { data } = matter(fs.readFileSync(path.join("pages", "posts", file)));
    return data;
  });

  return {
    props: {
      posts,
    },
  };
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
