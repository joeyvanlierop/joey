import { Column } from "@components/column";
import { Metadata, Viewport } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  authors: [{ name: "Joey Van Lierop" }, { name: "Joseph Van Lierop" }],
};

export const viewport: Viewport = {
  themeColor: "var(--gray2)",
};

export default function RootLayout({ children }) {
  return (
    <div className="flex w-full justify-center">
      <Column className="gap-14">
        <div className="flex flex-col justify-center items-start">
          <Link
            className="font-header font-medium text-mono-9 mb-4 no-underline"
            href="/"
          >
            Joey Van Lierop
          </Link>
          <Link
            className="font-header font-medium text-mono-9 mb-4 no-underline"
            href="/writing"
          >
            Writing
          </Link>
          {/* <h1 className="font-header font-medium mb-0">{post.data.title}</h1>
          <FancyDate published={post.data.date} updated={post.data.updated} /> */}
        </div>
        <article className="prose dark:prose-invert prose-headings:font-header prose-headings:text-base prose-headings:font-medium">
          {children}
        </article>
      </Column>
    </div>
  );
}
