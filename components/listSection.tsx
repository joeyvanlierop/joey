import { Category, PostData } from "@lib/post";
import { ListItem } from "./listItem";
import dayjs from "dayjs";
import { ReactNode } from "react";

interface ListSectionProps {
  year: string;
  children: ReactNode[];
}

export const ListSection: React.FC<ListSectionProps> = (props) => {
  return (
    <section className="border-t border-[#2e2e2e] relative">
      <span className="text-[#707070] absolute top-3 font-header text-sm">{props.year}</span>
      <ol>
        {props.children}
      </ol>
    </section>
  );
};
