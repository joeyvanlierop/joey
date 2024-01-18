const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  output: "export",
  images: {
    unoptimized: process.env.NODE_ENV === "development" ? true : false,
  },
};

module.exports = withMDX(nextConfig);
