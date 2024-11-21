import { generateFeed } from "@lib/rss";

export async function GET() {
  const feed = generateFeed();
  return new Response(feed.json1(), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
