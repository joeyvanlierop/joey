import { PostData } from "@lib/post";
import { ReactNode } from "react";
import { ListItem } from "./listItem";

interface ListSectionProps {
  year: string;
  posts: PostData[];
}

export const ListSection: React.FC<ListSectionProps> = (props) => {
  return (
    <section className="border-t border-[#2e2e2e] relative">
      <span className="text-[#707070] absolute top-3 font-header text-sm">
        {props.year}
      </span>
      <ol>
        {props.posts.map((post) => {
          return <ListItem key={`${post.title}-${post.date}`} {...post} />;
        })}
      </ol>
    </section>
  );
};
