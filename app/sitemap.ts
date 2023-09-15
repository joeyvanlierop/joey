import fs from "fs";
import path from "path";
import { getUrl } from "@lib/url";
import { MetadataRoute } from "next";
import { getPost, getPostSlugs, getPosts } from "../lib/post";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = getUrl();
  const postSlugs = getPostSlugs();

  return [
    {
      url,
      lastModified: new Date().toLocaleDateString(),
      changeFrequency: "daily",
    },
    {
      url: `${url}/writing`,
      lastModified: "2023-09-14",
      changeFrequency: "weekly",
    },
    ...getPosts().map((post) => ({
      url: `${url}/writing/${post.data.slug}`,
      lastModified: getPost(post.data.slug).data.updated,
      changeFrequency: "weekly",
    })),
    ...fs
      .readdirSync(path.join("app", "(playground)"), { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => ({
        url: `${url}/${dirent.name}`,
      })),
  ];
}
