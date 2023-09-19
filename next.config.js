/** @type {import('next').NextConfig} */
module.exports = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: process.env.NODE_ENV === "development" ? true : false,
  },
};
