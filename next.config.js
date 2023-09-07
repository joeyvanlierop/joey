/** @type {import('next').NextConfig} */
module.exports = {
  /* config options here */
  output: "export",
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: process.env.NODE_ENV === "development" ? true : false,
  },
};
