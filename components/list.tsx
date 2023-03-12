import { AnimatePresence, motion, usePresence } from "framer-motion";
import { useState } from "react";
import { Category, PostData } from "../lib/post";
import { Dot } from "./dot";
import { ListItem } from "./listItem";
import { ThemeButton } from "./themeButton";

interface ListProps {
  posts: PostData[];
  categories: Category[];
}

export const List: React.FC<ListProps> = (props) => {
  const [isPresent, safeToRemove] = usePresence();
  const [selected, setSelected] = useState(0);
  const [posts, setPosts] = useState(props.posts);

  return (
    <>
      <div className="seperated relative flex h-16 w-full items-center justify-start leading-[64px]">
        {props.categories.map((category, idx) => {
          const isSelected = selected == idx;

          return (
            <div
              key={idx}
              onClick={() => setSelected(idx)}
              tabIndex={0}
              className={`flex min-w-0 flex-shrink cursor-pointer items-center transition-opacity hover:opacity-100 ${
                !isSelected ? "opacity-30" : ""
              }`}
            >
              <Dot color={category.color} />
              <p className="ml-3 mr-6 h-full overflow-hidden text-ellipsis whitespace-nowrap capitalize">
                {category.name}
              </p>
            </div>
          );
        })}
      </div>
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
              return props.categories[selected] === category2 || selected === 0;
            });
            const actualIndex = filtered.findIndex(
              (post2) => post2.title === post.title
            );
            const delay = actualIndex / filtered.length;

            if (!isPresent) {
              setTimeout(safeToRemove, 1250);
              return null;
            }

            if (props.categories[selected] !== category && selected !== 0) {
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
    </>
  );
};
