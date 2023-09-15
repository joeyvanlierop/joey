import { getUrl } from "@lib/url";
import fs from "fs";
import { MetadataRoute } from "next";
import path from "path";
import { getPost, getPosts } from "../lib/post";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = getUrl();

  return [
    {
      url,
      lastModified: new Date().toLocaleDateString("en-CA"),
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
