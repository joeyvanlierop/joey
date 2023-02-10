import {
  AnimatePresence,
  motion,
  useIsPresent,
  usePresence,
} from "framer-motion";
import { useEffect, useState } from "react";
import { Category, PostData } from "../lib/post";
import { styled } from "../stitches.config";
import { Dot } from "./dot";
import { ListItem, ListItemWrapper } from "./listItem";

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
          return (
            <CategoryItem
              key={idx}
              className={idx === selected ? "selected" : ""}
              onClick={() => setSelected(idx)}
              tabIndex={0}
            >
              <Dot
                className={idx === selected ? "selected" : ""}
                style={{
                  backgroundColor: category.color,
                  boxShadow: `0 0 5px 0px ${category.color}`,
                }}
              />
              <h4
                className="h-full text-ellipsis overflow-hidden whitespace-nowrap mr-4"
                style={{
                  marginLeft: "12px",
                  marginRight: "24px",
                }}
              >
                {category.name}
              </h4>
            </CategoryItem>
          );
        })}
      </CategoryWrapper>
      <motion.div
        /**
       * width: "100%",

        [`&:hover ${ListItemWrapper}, &:focus-within ${ListItemWrapper}`]: {
          opacity: "$faded",
        },
       */
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

// const ListWrapper = styled(motion.div, {
//   width: "100%",

//   [`&:hover ${ListItemWrapper}, &:focus-within ${ListItemWrapper}`]: {
//     opacity: "$faded",
//   },
// });

const CategoryItem = styled("div", {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  transition: "opacity 0.25s",
  flexShrink: "1",
  minWidth: "0",

  "&:hover, &:focus": {
    opacity: "1 !important",
  },
});

const CategoryWrapper = styled("div", {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  height: "64px",
  lineHeight: "64px",
  width: "100%",
  position: "relative",

  "> :not(.selected)": {
    opacity: "$faded",
  },

  "&::after": {
    content: "",
    height: "1px",
    backgroundColor: "$gray5",
    width: "100%",
    position: "absolute",
    top: "100%",
  },
});
