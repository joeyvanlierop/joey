import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import dayjs from "dayjs";
import Link from "next/link";
import { useMemo } from "react";
import { PostData } from "@lib/post";
import { Dot } from "./dot";

type ListItemProps = PostData & {
  color: string;
};

export const ListItem: React.FC<ListItemProps> = (props) => {
  const dateNumber = useMemo(
    () => dayjs(props.date).format("MM/DD"),
    [props.date]
  );

  return (
    <li
      tabIndex={0}
      className="group/item cursor-pointer transition-[opacity] hover:!opacity-100 focus:!opacity-100 group-hover:opacity-30 group-focus:opacity-30"
    >
      <Link
        href={`/posts/${props.slug}`}
        className="relative ml-[25%] mb-[-1px] mt-[-1px] flex items-center justify-start border-t border-b border-[#2e2e2e] py-3"
      >
        <p className="mr-4 w-full overflow-hidden text-ellipsis whitespace-nowrap">
          {props.title}
        </p>
        <p className="flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap font-header text-sm text-[#707070]">
          {dateNumber}
        </p>
      </Link>
    </li>
  );
};
