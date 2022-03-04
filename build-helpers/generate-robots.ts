import { getUrl, writePublicFile } from "./utils";

const generateRobots = () => {
  const url = getUrl();

  const robots = `# Allow all crawlers
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${url}/sitemap.xml
`;

  writePublicFile(robots, "robots.txt");
};

generateRobots();
