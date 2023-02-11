import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import dayjs from "dayjs";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useMemo } from "react";
import { Dot } from "./dot";

interface ListItemProps {
  title: string;
  date: string;
  color: string;
  slug: string;
  delay: number;
}

const variants: Variants = {
  open: { scaleY: 1, opacity: null, height: 64 },
  closed: { scaleY: 0, opacity: 0, height: 0 },
};

export const ListItem: React.FC<ListItemProps> = (props) => {
  const dateNumber = useMemo(
    () => dayjs(props.date).format("MMMM Do").toLowerCase(),
    [props.date]
  );

  return (
    <Link href={`/posts/${props.slug}`}>
      <motion.div
        className="group/item w-100 seperated relative flex h-16 origin-top cursor-pointer items-center
                    justify-start border-t-[1px]
                    border-t-transparent transition-[opacity,border-top] hover:border-t-[#e8e8e8]
                    hover:!opacity-100 group-hover:opacity-30
                    dark:hover:border-t-[#2e2e2e]"
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
        <Dot className="mr-3" color={props.color} />
        <p className="mr-4 overflow-hidden text-ellipsis whitespace-nowrap">
          {props.title}
        </p>
        <h4 className="ml-auto overflow-hidden text-ellipsis whitespace-nowrap opacity-30 transition-opacity group-hover:!opacity-100">
          {dateNumber}
        </h4>
        <ArrowTopRightIcon
          className="expand h-full w-0 bg-bottom opacity-0 transition-all
                      group-hover/item:ml-[2px] group-hover/item:w-[22px] group-hover/item:opacity-100"
        />
      </motion.div>
    </Link>
  );
};
