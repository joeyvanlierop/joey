import { motion, useIsPresent, usePresence, Variants } from "framer-motion";
import { useMemo } from "react";
import { styled } from "../stitches.config";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import dayjs from "dayjs";
import Link from "next/link";
import { Dot } from "./dot";

interface ListItemProps {
  title: string;
  date: string;
  color: string;
  slug: string;
  delay: number;
}

const variants: Variants = {
  open: { scaleY: 1, height: 64 },
  closed: { scaleY: 0, height: 0 },
};

export const ListItem: React.FC<ListItemProps> = (props) => {
  const dateNumber = useMemo(
    () => dayjs(props.date).format("MMMM Do").toLowerCase(),
    [props.date]
  );

  return (
    <Link href={`/posts/${props.slug}`} passHref={true}>
      <motion.a
        className="group/item flex justify-start items-center w-100 h-16 origin-top cursor-pointer relative
                    group-hover:opacity-30 hover:!opacity-100
                    border-t-[1px] border-t-transparent hover:border-t-[#2e2e2e]
                    after:h-[1px] after:bg-[#2e2e2e] after:w-full after:absolute after:top-full
                    transition-[opacity,border-top]"
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
        <Dot
          className="mr-3"
          style={{
            backgroundColor: props.color,
            boxShadow: `0 0 5px 0px ${props.color}`,
          }}
        />
        <p className="text-ellipsis overflow-hidden whitespace-nowrap mr-4">
          {props.title}
        </p>
        <h4 className="opacity-30 group-hover:!opacity-100 transition-opacity text-ellipsis ml-auto overflow-hidden whitespace-nowrap">
          {dateNumber}
        </h4>
        <ArrowTopRightIcon
          className="expand opacity-0 w-0 h-full bg-bottom transition-all
                      group-hover/item:w-[22px] group-hover/item:opacity-100 group-hover/item:ml-[2px]"
        />
      </motion.a>
    </Link>
  );
};
