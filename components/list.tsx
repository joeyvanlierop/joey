import { useMemo, useState } from "react";
import { Category, PostData } from "@lib/post";
import { ListItem } from "./listItem";
import dayjs from "dayjs";
import { ListSection } from "./listSection";

interface ListProps {
  posts: PostData[];
  categories: Category[];
}

export const List: React.FC<ListProps> = (props) => {
  const groupedPosts = useMemo(() => groupPosts(props.posts), [props.posts]);
  console.log(groupedPosts);

  return (
    <div className="group w-full">
      {Object.entries(groupedPosts).map(([year, posts]) => (
        <ListSection year={year}>
          {posts.map((post) => {
            const category = props.categories.find(
              (category) => category.name === post.category
            );

            return (
              <ListItem
                key={`${post.title}-${post.date}`}
                color={category.color}
                {...post}
              />
            );
          })}
        </ListSection>
      ))}
    </div>
  );
};

const groupPosts = (posts: PostData[]) => {
  const newPosts: Record<number, PostData[]> = {};

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
