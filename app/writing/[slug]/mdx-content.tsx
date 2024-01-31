"use client";

import { FancyVideo } from "@components/fancy-video";
import * as Journal from "@components/journal";
import { Nook } from "@components/nook";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import { forwardRef } from "react";

const FancyItalics = forwardRef<HTMLElement>((props, ref) => (
  <em className="fancy" ref={ref} {...props} />
));

const CustomLink = ({ href, children, ...rest }) => {
  return (
    <a href={href} target={"_blank"} rel={"noopener noreferrer"} {...rest}>
      {children}
    </a>
  );
};

const CustomTable = ({ href, children, ...rest }) => {
  return (
    <table className="w-full caption-bottom text-sm not-prose" {...rest}>
      {children}
    </table>
  );
};

const CustomTHead = ({ href, children, ...rest }) => {
  return (
    <thead className="[&_tr]:border-b" {...rest}>
      {children}
    </thead>
  );
};

const CustomTBody = ({ href, children, ...rest }) => {
  return (
    <tbody className="[&_tr:last-child]:border-0" {...rest}>
      {children}
    </tbody>
  );
};

const CustomTR = ({ href, children, ...rest }) => {
  return (
    <tr
      className="border-b border-border transition-colors hover:bg-mono-3 duration-75"
      {...rest}
    >
      {children}
    </tr>
  );
};

const CustomTH = ({ href, children, ...rest }) => {
  return (
    <th
      className="h-12 px-4 text-left align-middle font-semibold text-mono-11 [&:has([role=checkbox])]:pr-0 md:text-nowrap"
      {...rest}
    >
      {children}
    </th>
  );
};

const CustomTD = ({ href, children, ...rest }) => {
  return (
    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0" {...rest}>
      {children}
    </td>
  );
};

const CustomBlockquote = ({ children, ...rest }) => {
  return (
    <blockquote
      className="not-prose text-mono-11 [&>:not(:first-child)]:mt-4 [&>:not(:last-child)]:mb-4"
      {...rest}
    >
      {children}
    </blockquote>
  );
};

const components = {
  Journal,
  Nook,
  Image,
  Video: FancyVideo,
  em: FancyItalics,
  a: CustomLink,
  blockquote: CustomBlockquote,
  table: CustomTable,
  thead: CustomTHead,
  tbody: CustomTBody,
  tr: CustomTR,
  th: CustomTH,
  td: CustomTD,
};

export function MdxContent({ source }) {
  return <MDXRemote {...source} components={components} />;
}
