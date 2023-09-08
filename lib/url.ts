export const getUrl = () => {
  return process.env.VERCEL_ENV === "production"
    ? "https://www.joeyvanlierop.com"
    : `https://${process.env.VERCEL_URL}`;
};
