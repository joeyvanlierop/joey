import { AnimatePresence, motion, usePresence } from "framer-motion";
import { useState } from "react";
import { Category, PostData } from "../lib/post";
import { styled } from "../stitches.config";
import { Dot } from "./dot";
import { ListItem } from "./listItem";

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
      <CategoryWrapper>
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
              <h4 className="ml-3 mr-6 h-full overflow-hidden text-ellipsis whitespace-nowrap">
                {category.name}
              </h4>
            </div>
          );
        })}
      </CategoryWrapper>
      <motion.div
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
              setTimeout(safeToRemove, 1000);
              return null;
            }

            if (props.categories[selected] !== category && selected !== 0) {
              return null;
            }

            return (
              <ListItem
                key={`${post.title}-${post.date}`}
                color={category.color}
                title={post.title}
                date={post.date}
                slug={post.slug}
                delay={delay * 0.5}
              />
            );
          })}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

const CategoryWrapper = styled("div", {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  height: "64px",
  lineHeight: "64px",
  width: "100%",
  position: "relative",

  "&::after": {
    content: "",
    height: "1px",
    backgroundColor: "$gray5",
    width: "100%",
    position: "absolute",
    top: "100%",
  },
});
