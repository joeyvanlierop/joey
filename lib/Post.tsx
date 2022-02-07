import matter from "gray-matter";
import fs from "fs";
import path from "path";

export interface Category {
  name: string;
  color: string;
}

export interface PostData {
  title: string;
  date: string;
  category: string;
}

export interface Post {
  data: PostData;
  content: string;
}

export function getPosts(): Post[] {
  return fs
    .readdirSync(path.join("posts"))
    .map(
      (file) =>
        matter(fs.readFileSync(path.join("posts", file))) as unknown as Post
    );
}

export function getPost(post: string): Post {
  const file = fs.readFileSync(path.join("posts", `${post}.mdx`));
  return matter(file) as unknown as Post;
}

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(path.join("posts"))
    .map((file) => file.replace(".mdx", ""));
}
