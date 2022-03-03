import { motion } from "framer-motion";
import { useMemo } from "react";
import { styled } from "../../stitches.config";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import dayjs from "dayjs";
import Link from "next/link";

interface ListItemProps {
  title: string;
  date: string;
  color: string;
  slug: string;
}

export const ListItem: React.FC<ListItemProps> = (props) => {
  const dateNumber = useMemo(
    () => dayjs(props.date).format("Do"),
    [props.date]
  );

  return (
    <Link href={`/posts/${props.slug}`} passHref={true}>
      <ListItemWrapper
        initial={{ scaleY: 0, height: 0 }}
        animate={{ scaleY: 1, height: 60 }}
        exit={{ scaleY: 0, height: 0 }}
        transition={{
          type: "spring",
          bounce: 0,
          duration: 0.5,
        }}
        tabIndex={0}
      >
        <Dot
          css={{
            backgroundColor: props.color,
            boxShadow: `0 0 5px 0px ${props.color}`,
            marginRight: "12px",
          }}
        />
        <Title layoutId={props.title} layout="position">
          {props.title}
        </Title>
        <DatePublished>{dateNumber}</DatePublished>
        <Expand />
      </ListItemWrapper>
    </Link>
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

export const Title = styled(motion.p, {
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  marginRight: "16px",
});

const DatePublished = styled("h4", {
  opacity: "0.3",
  transition: "opacity 0.25s",
  marginLeft: "auto",
});

const Expand = styled(ArrowTopRightIcon, {
  opacity: "0",
  width: "0",
  height: "100%",
  backgroundPosition: "center bottom",
  transition: "all 0.25s",
});

export const ListItemWrapper = styled(motion.a, {
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  width: "100%",
  height: "60px",
  transition: "opacity 250ms",
  transformOrigin: "top",
  cursor: "pointer",
  position: "relative",
  textDecoration: "none",
  color: "inherit",

  // borderTop: "1px solid $gray5",
  // boxShadow: "inset 0 -1px 0 0 $gray5",
  "&::before, &::after": {
    content: "",
    height: "1px",
    backgroundColor: "$gray5",
    width: "100%",
    position: "absolute",
    top: "0%",
  },
  "&::after": {
    top: "100%",
  },

  "&:hover, &:focus": {
    opacity: "1 !important",
  },
  [`&:hover ${Expand}, &:focus ${Expand}`]: {
    width: "22px",
    opacity: "1",
    marginLeft: "2px",
  },
  [`&:hover ${DatePublished}, &:focus ${DatePublished}`]: {
    opacity: "1",
  },
});
