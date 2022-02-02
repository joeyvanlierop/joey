import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { styled } from "@stitches/react";
import { Category, Post } from "./Post";

interface ListProps {
  posts: Post[];
  categories: Category[];
}

export const List: React.FC<ListProps> = (props) => {
  const [selected, setSelected] = useState(0);
  const [posts, setPosts] = useState(props.posts);

  useEffect(() => {
    let newPosts: Post[];
    if (selected === 0) {
      newPosts = props.posts;
    } else {
      const selectedCategory = props.categories[selected];
      newPosts = props.posts.filter(
        (post) => post.category === selectedCategory
      );
    }
    setPosts(newPosts);
  }, [selected]);

  return (
    <>
      <CategoryWrapper>
        {props.categories.map((category, idx) => (
          <CategoryItem
            key={idx}
            className={idx === selected ? "selected" : ""}
            onClick={() => setSelected(idx)}
          >
            <Dot
              className={idx === selected ? "selected" : ""}
              css={{
                backgroundColor: category.color,
              }}
            />
            <Title
              css={{
                marginLeft: "12px",
                marginRight: "24px",
              }}
            >
              {category.name}
            </Title>
          </CategoryItem>
        ))}
      </CategoryWrapper>
      <ListWrapper>
        <AnimatePresence initial={false}>
          {posts.map((post) => (
            <ListItem
              key={post.title}
              color={post.category.color}
              title={post.title}
              date={post.date}
            />
          ))}
        </AnimatePresence>
      </ListWrapper>
    </>
  );
};

interface ListItemProps {
  title: string;
  date: string;
  color: string;
}

const ListItem: React.FC<ListItemProps> = (props) => {
  const animations = {
    initial: { opacity: 0, scaleY: 0, height: 0 },
    animate: { opacity: null, scaleY: 1, height: 60 },
    exit: { opacity: 0, scaleY: 0, height: 0 },
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.5,
    },
  };

  return (
    <ListItemContent {...animations}>
      <Dot
        css={{
          backgroundColor: props.color,
          marginRight: "12px",
        }}
      />
      <Title>{props.title}</Title>
      <Date>{props.date}</Date>
      <Expand />
    </ListItemContent>
  );
};

const Dot = styled("div", {
  backgroundColor: "black",
  borderRadius: "50%",
  minWidth: "8px",
  minHeight: "8px",
  width: "8px",
  height: "8px",
});

const Title = styled("h4", {
  height: "100%",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  marginRight: "16px",
});

const Date = styled("h4", {
  color: "#272727",
  opacity: "0.3",
  transition: "opacity 0.25s",
  marginLeft: "auto",
});

const Expand = styled("svg", {
  backgroundImage: "url(expand.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center bottom",
  width: "0",
  height: "20px",
  opacity: "0",
  transform: "rotate(-90deg)",
  transition: "all 0.25s",
});

const ListItemContent = styled(motion.li, {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  borderTop: "1px solid #ebebeb",
  boxShadow: "inset 0 -1px 0 0 #ebebeb",
  marginTop: "-1px",
  width: "100%",
  height: "60px",
  lineHeight: "60px",
  transition: "opacity 0.25s",
  transformOrigin: "top",
  cursor: "pointer",

  "&:hover": {
    opacity: "1 !important",
  },
  [`&:hover ${Expand}`]: {
    width: "20px",
    opacity: "1",
    marginLeft: "2px",
  },
  [`&:hover ${Date}`]: {
    opacity: "1",
  },
});

const ListWrapper = styled("ul", {
  width: "100%",

  [`&:hover ${ListItemContent}`]: {
    opacity: "0.3",
  },
});

const CategoryItem = styled("div", {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  transition: "opacity 0.25s",
  flexShrink: "1",
  minWidth: "0",
  opacity: "0.3",

  "&:hover": {
    opacity: "1 !important",
  },
});

const CategoryWrapper = styled("div", {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  height: "60px",
  lineHeight: "60px",
  width: "100%",

  "> :not(.selected)": {
    opacity: "0.3",
  },

  // @media only screen and (max-width: 768px) {
  //   justify-content: space-between,
  //   ${Title} {
  //     display: none,
  //   }
  // }
});
