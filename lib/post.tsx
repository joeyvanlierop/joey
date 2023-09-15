import dayjs from "dayjs";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface PostData {
  title: string;
  date: string;
  updated: string;
  description: string;
  slug: string;
  redirect?: string;
  visibility: "public" | "private" | "ish";
}

export interface Post {
  data: PostData;
  content: string;
}

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(path.join("writing"))
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

export function getPost(slug: string): Post {
  const file = fs.readFileSync(path.join("writing", `${slug}.mdx`));
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
