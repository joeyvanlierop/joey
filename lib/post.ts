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

export function getAllThingSlugs(): string[] {
  return fs
    .readdirSync(path.join("things"))
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

export function getThing(slug: string): Post {
  const file = fs.readFileSync(path.join("things", `${slug}.mdx`));
  const post = matter(file) as unknown as Post;
  post.data.slug = slug;
  return post;
}

export function getThings(ignoreVisibility?: boolean): Post[] {
  return getAllThingSlugs()
    .map((slug) => getThing(slug))
    .filter((post) => ignoreVisibility || post.data.visibility !== "private")
    .sort((postA, postB) => dayjs(postB.data.date).diff(postA.data.date));
}

export function getMostRecentThings(ignoreVisibility?: boolean): Post {
  return getThings(ignoreVisibility)[0];
}
