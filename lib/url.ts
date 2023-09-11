export const getUrl = () => {
  if (process.env.VERCEL_ENV === undefined) return "localhost:3000";
  if (process.env.VERCEL_ENV === "production")
    return "https://joeyvanlierop.com";
  return `https://${process.env.VERCEL_URL}`;
};
