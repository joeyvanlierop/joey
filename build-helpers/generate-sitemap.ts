import { getPostSlugs } from "@lib/post";
import { getUrl, writePublicFile } from "./utils";

const generateSitemap = () => {
  const url = getUrl();
  const postSlugs = getPostSlugs();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!--Root-->
  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.3</priority>
  </url>
  <!--Posts-->
  ${postSlugs
    .map((slug) => {
      return `<url>
    <loc>${`${url}/posts/${slug}`}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
    `;
    })
    .join("")}
</urlset>`;

  writePublicFile(sitemap, "sitemap.xml");
};

generateSitemap();
