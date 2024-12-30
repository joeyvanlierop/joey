import { PostMetadata } from "@lib/post";
import dayjs from "dayjs";
import { useMemo } from "react";
import { ListSection } from "./listSection";

interface ListProps {
  posts: PostMetadata[];
}

export const List: React.FC<ListProps> = (props) => {
  const groupedPosts = useMemo(() => groupPosts(props.posts), [props.posts]);

  return (
    <div className="group w-full">
      {Object.entries(groupedPosts)
        .reverse()
        .map(([year, posts]) => (
          <ListSection year={year} posts={posts} key={year} />
        ))}
    </div>
  );
};

const groupPosts = (posts: PostMetadata[]) => {
  const newPosts: Record<number, PostMetadata[]> = {};

  posts.forEach((post) => {
    const year = dayjs(post.date).year();
    if (year in newPosts) {
      newPosts[year].push(post);
    } else {
      newPosts[year] = [post];
    }
  });

  return newPosts;
};
