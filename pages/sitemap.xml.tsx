import { getPostSlugs } from "../lib/Post";

const HOST = "https://www.joeyvanlierop.com";

const generateSiteMap = (slugs: string[]) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--Base domain-->
     <url>
       <loc>${HOST}</loc>
     </url>
     <!--Posts-->
     ${slugs
       .map(
         (slug) => `
       <url>
           <loc>${`${HOST}/posts/${slug}`}</loc>
       </url>
     `
       )
       .join("")}
   </urlset>
 `;
};

export default function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getStaticProps({ res }) {
  // We make an API call to gather the URLs for our site
  const posts = getPostSlugs();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  // We send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
