import { AnimatePresence, motion, usePresence } from "framer-motion";
import { useState } from "react";
import { Category, PostData } from "../lib/post";
import { Dot } from "./dot";
import { ListItem } from "./listItem";
import { ThemeButton } from "./themeButton";

interface ListProps {
  posts: PostData[];
  categories: Category[];
  selected: number;
}

export const List: React.FC<ListProps> = (props) => {
  const [isPresent, safeToRemove] = usePresence();
  const [posts, setPosts] = useState(props.posts);

  return (
    <motion.ol
      className="group w-full"
      transition={{
        staggerChildren: 2,
        duration: 10,
      }}
    >
      <AnimatePresence>
        {posts.map((post) => {
          const category = props.categories.find(
            (category) => category.name === post.category
          );

          /**
           * Holy shit this is disgusting
           * Please fix this in the future
           */
          const filtered = posts.filter((post) => {
            const category2 = props.categories.find(
              (category) => category.name === post.category
            );
            return (
              props.categories[props.selected] === category2 ||
              props.selected === 0
            );
          });
          const actualIndex = filtered.findIndex(
            (post2) => post2.title === post.title
          );
          const delay = actualIndex / filtered.length;

          if (!isPresent) {
            setTimeout(safeToRemove, 1250);
            return null;
          }

          if (
            props.categories[props.selected] !== category &&
            props.selected !== 0
          ) {
            return null;
          }

          return (
            <ListItem
              key={`${post.title}-${post.date}`}
              color={category.color}
              {...post}
              delay={delay * 0.5}
            />
          );
        })}
      </AnimatePresence>
    </motion.ol>
  );
};
