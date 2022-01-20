import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
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
              color={category.color}
              style={{
                marginRight: "12px",
              }}
            />
            <Title
              style={{
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
        color={props.color}
        style={{
          marginRight: "12px",
        }}
      />
      <Title>{props.title}</Title>
      <Date>{props.date}</Date>
      <Expand />
    </ListItemContent>
  );
};

const Dot = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  min-width: 8px;
  min-height: 8px;
  width: 8px;
  height: 8px;
`;

const Title = styled.h4`
  height: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-right: 16px;
`;

const Date = styled.h4`
  color: #272727;
  opacity: 0.3;
  transition: all 0.25s;
  margin-left: auto;
`;

const Expand = styled.svg`
  background-image: url(expand.svg);
  background-repeat: no-repeat;
  background-position: center bottom;
  width: 0;
  height: 20px;
  opacity: 0;
  transform: rotate(-90deg);
  transition: all 0.25s;
`;

const ListItemContent = styled(motion.li)`
  display: flex;
  justify-content: start;
  align-items: center;
  border-top: 1px solid #ebebeb;
  box-shadow: inset 0 -1px 0 0 #ebebeb;
  margin-top: -1px;
  width: 100%;
  height: 60px;
  line-height: 60px;
  transition: opacity 0.25s;
  transform-origin: top;
  cursor: pointer;

  :hover {
    opacity: 1 !important;
  }
  :hover ${Expand} {
    width: 20px;
    opacity: 1;
    margin-left: 4px;
  }
  :hover ${Date} {
    opacity: 1;
  }
`;

const ListWrapper = styled.ul`
  width: 100%;

  :hover ${ListItemContent} {
    opacity: 0.3;
  }
`;

const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.25s;
`;

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 60px;
  line-height: 60px;

  > :not(.selected) {
    opacity: 0.3;
  }
`;
