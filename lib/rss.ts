import { Feed } from "feed";
import { getPosts } from "@lib/post";

export function generateFeed() {
  const feed = new Feed({
    title: "Joey",
    description: "A bit of my brain",
    id: "https://joeyvanlierop.com/things",
    link: "https://joeyvanlierop.com/things",
    copyright: `Copyright ${new Date().getFullYear().toString()}, Joey Van Lierop`,
    language: "en",
    author: {
      name: "Joey Van Lierop",
      link: "https://joeyvanlierop.com",
    },
  });

  const posts = getPosts();
  posts.forEach((post) => {
    feed.addItem({
      id: `${post.data.slug}-${post.data.updated}`,
      link: `https://joeyvanlierop.com/things/${post.data.slug}`,
      title: post.data.title,
      description: post.data.description,
      published: new Date(post.data.date),
      date: new Date(post.data.updated),
      author: [
        {
          name: "Joey Van Lierop",
          link: "https://joeyvanlierop.com",
        },
      ],
    });
  });

  return feed;
}
