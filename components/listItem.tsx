import { PostData } from "@lib/post";
import dayjs from "dayjs";
import Link from "next/link";
import { useMemo } from "react";

export const ListItem: React.FC<PostData> = (props) => {
  const dateNumber = useMemo(
    () => dayjs(props.date).format("MM/DD"),
    [props.date]
  );

  return (
    <Link
      tabIndex={0}
      href={`/writing/${props.slug}`}
      className="group/item cursor-pointer transition-[opacity] hover:!opacity-100 focus:!opacity-100 group-hover:opacity-30 group-focus:opacity-30 no-underline"
    >
      <div className="relative ml-[25%] mb-[-1px] mt-[-1px] flex items-center justify-start border-t border-b border-[#2e2e2e] py-3">
        <p className="mr-4 w-full overflow-hidden text-ellipsis whitespace-nowrap">
          {props.title}
        </p>
        <time className="flex-shrink-0 overflow-hidden text-ellipsis whitespace-nowrap font-header text-sm text-[#707070]">
          {dateNumber}
        </time>
      </div>
    </Link>
  );
};
