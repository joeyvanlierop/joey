import { getUrl } from "@lib/url";
import { MetadataRoute } from "next";
import { getPost, getPosts } from "../lib/post";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = getUrl();

  const mostRecentPostDate = getPosts()
    .map((post) => post.data.date)
    .reduce((a, b) => (new Date(a) > new Date(b) ? a : b));

  return [
    {
      url,
      lastModified: new Date().toLocaleDateString("en-CA"),
      changeFrequency: "daily",
    },
    {
      url: `${url}/writing`,
      lastModified: mostRecentPostDate,
      changeFrequency: "weekly",
    },
    ...getPosts().map((post) => ({
      url: `${url}/writing/${post.data.slug}`,
      lastModified: getPost(post.data.slug).data.updated,
      changeFrequency: "weekly" as const,
    })),
  ];
}
