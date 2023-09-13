import fs from "fs";
import path from "path";
import { getUrl } from "@lib/url";
import { MetadataRoute } from "next";
import { getPost, getPostSlugs } from "../lib/post";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = getUrl();
  const postSlugs = getPostSlugs();

  return [
    {
      url,
      lastModified: new Date(),
      changeFrequency: "weekly",
    },
    {
      url: `${url}/writing`,
      lastModified: new Date(),
      changeFrequency: "daily",
    },
    // @ts-ignore
    // TODO: Not sure why this is throwing an error
    ...postSlugs.map((slug) => ({
      url: `${url}/writing/${slug}`,
      lastModified: getPost(slug).data.updated,
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
