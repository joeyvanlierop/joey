import fs from "fs";
import path from "path";
import { getPostSlugs } from "../Post";
import { getUrl } from "./common";

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
  <url>
    <loc>https://jsonplaceholder.typicode.com/guide</loc>
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

  fs.writeFileSync(path.join("public", "sitemap.xml"), sitemap);
};

generateSitemap();
