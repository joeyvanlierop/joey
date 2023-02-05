import dayjs from "dayjs";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface Category {
  name: string;
  color: string;
}

export interface PostData {
  title: string;
  date: string;
  category: string;
  slug: string;
  published: boolean;
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
  post.data.slug = slug;
  return post;
}

export function getPosts(): Post[] {
  return getPostSlugs()
    .map((slug) => getPost(slug))
    .filter((post) => post.data.published)
    .sort((postA, postB) => dayjs(postB.data.date).diff(postA.data.date));
}
