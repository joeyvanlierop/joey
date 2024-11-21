import { Feed } from "feed";
import { getPosts } from "./post";

export function generateFeed() {
  const feed = new Feed({
    title: "Joey",
    description: "A bit of my brain",
    id: "https://joeyvanlierop.com/writing",
    link: "https://joeyvanlierop.com/writing",
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
      id: `https://joeyvanlierop.com/writing/${post.data.slug}`,
      link: `https://joeyvanlierop.com/writing/${post.data.slug}`,
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
