import dayjs from "dayjs";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface PostMetadata {
  title: string;
  date: string;
  updated: string;
  description: string;
  slug: string;
  redirect?: string;
  visibility: "public" | "private" | "ish";
}

export interface Post {
  data: PostMetadata;
  content: string;
}

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(path.join("things"))
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

export function getPost(slug: string): Post {
  const file = fs.readFileSync(path.join("things", `${slug}.mdx`));
  const post = matter(file) as unknown as Post;
  post.data.slug = slug;
  return post;
}

export function getPosts(ignoreVisibility?: boolean): Post[] {
  return getPostSlugs()
    .map((slug) => getPost(slug))
    .filter((post) => ignoreVisibility || post.data.visibility !== "private")
    .sort((postA, postB) => dayjs(postB.data.date).diff(postA.data.date));
}

export function getMostRecent(ignoreVisibility?: boolean): Post {
  return getPosts(ignoreVisibility)[0];
}
