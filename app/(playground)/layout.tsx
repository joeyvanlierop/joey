import { Column } from "@components/column";
import { MdxContent } from "app/writing/[slug]/mdx-content";
import dayjs from "dayjs";
import Link from "next/link";

export default function PlaygroundLayout({ children }) {
  return (
    <div className="flex w-full justify-center">
      <Column className="gap-10">
        <div className="flex flex-col justify-center items-start">
          <Link
            className="font-header font-medium text-mono-400 mb-4 no-underline"
            href="/"
          >
            Joey Van Lierop
          </Link>
          <h1 className="font-header font-medium mb-0">Title</h1>
        </div>
        {children}
      </Column>
    </div>
  );
}
