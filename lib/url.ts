export const getUrl = () => {
  return process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://www.joeyvanlierop.com";
};
