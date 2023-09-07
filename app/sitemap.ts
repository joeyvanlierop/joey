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
    },
    ...postSlugs.map((slug) => {
      return {
        url: `${url}/writing/${slug}`,
        lastModified: getPost(slug).data.updated,
      };
    }),
  ];
}
