import fs from "fs";
import path from "path";
import { getUrl } from "./common";

const generateRobots = () => {
  const url = getUrl();

  const robots = `# Allow all crawlers
User-agent: *
Allow: /

# Sitemaps
Sitemap: ${url}/sitemap.xml
`;

  fs.writeFileSync(path.join("public", "robots.txt"), robots);
};

generateRobots();
