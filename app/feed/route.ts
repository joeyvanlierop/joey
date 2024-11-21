import { generateFeed } from "@lib/rss";

export async function GET() {
  const feed = generateFeed();
  return new Response(feed.atom1(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
