import fs from "fs";
import path from "path";

export const getUrl = () => {
  return process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://www.joeyvanlierop.com";
};

export const writePublicFile = (file: string, filename: string) => {
  fs.writeFileSync(path.join("public", filename), file);
};
