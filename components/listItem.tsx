import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import dayjs from "dayjs";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useMemo } from "react";
import { PostData } from "@lib/post";
import { Dot } from "./dot";

type ListItemProps = PostData & {
  color: string;
  delay: number;
};

const variants: Variants = {
  open: { scaleY: 1, opacity: 1, height: 64 },
  closed: { scaleY: 0, opacity: 0, height: 0 },
};

export const ListItem: React.FC<ListItemProps> = (props) => {
  const dateNumber = useMemo(
    () => dayjs(props.date).format("MMMM Do"),
    [props.date]
  );

  return (
    <motion.li
      variants={variants}
      initial={"closed"}
      animate={"open"}
      exit={"closed"}
      transition={{
        type: "spring",
        bounce: 0,
        duration: 0.75,
        delay: props.delay,
      }}
      tabIndex={0}
    >
      <Link
        href={`/posts/${props.slug}`}
        className="group/item w-100 relative flex h-16 origin-top cursor-pointer items-center
                  justify-start transition-[opacity] hover:!opacity-100 focus:!opacity-100 group-hover:opacity-30 group-focus:opacity-30"
      >
        <Dot className="mr-3" color={props.color} />
        <p className="mr-4 overflow-hidden text-ellipsis whitespace-nowrap">
          {props.title}
        </p>
        <hr className="grow border-neutral-700" />
        <p className="ml-4 overflow-hidden text-ellipsis whitespace-nowrap opacity-30 transition-opacity group-hover:!opacity-100">
          {dateNumber}
        </p>
        <ArrowTopRightIcon
          className="expand h-full w-0 bg-bottom opacity-0 transition-all
                      group-hover/item:ml-[2px] group-hover/item:w-[22px] group-hover/item:opacity-100"
        />
      </Link>
    </motion.li>
  );
};
