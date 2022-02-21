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

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(path.join("posts"))
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

export function getPost(slug: string): Post {
  const file = fs.readFileSync(path.join("posts", `${slug}.mdx`));
  const post = matter(file) as unknown as Post;
  Object.keys(post.data).forEach((key) => {
    if (post.data[key] === undefined) throw `Post ${slug} is missing ${key}`;
  });
  return post;
}

export function getPosts(): Post[] {
  return getPostSlugs().map((slug) => getPost(slug));
}
