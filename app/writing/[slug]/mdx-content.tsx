"use client";

import BoardgameStats from "@components/boardgame-stats";
import { FancyImage } from "@components/fancy-image";
import { FancyVideo } from "@components/fancy-video";
import * as Journal from "@components/journal";
import { Nook } from "@components/nook";
import { Plot } from "@components/plot";
import { Stars } from "@components/stars";
import boardgameData from "@data/boardgames.json";
import olympicShoesMen from "@data/olympic-shoes-men.json";
import olympicShoesWomen from "@data/olympic-shoes-women.json";
import { MDXRemote } from "next-mdx-remote";
import { forwardRef } from "react";

const FancyItalics = forwardRef<HTMLElement>((props, ref) => (
  <em className="fancy" ref={ref} {...props} />
));

const FancyLink = ({ href, children, ...rest }) => {
  return (
    <a href={href} target={"_blank"} rel={"noopener noreferrer"} {...rest}>
      {children}
    </a>
  );
};

const FancyTable = ({ href, children, ...rest }) => {
  return (
    <table className="w-full caption-bottom text-sm not-prose" {...rest}>
      {children}
    </table>
  );
};

const FancyTHead = ({ href, children, ...rest }) => {
  return (
    <thead className="[&_tr]:border-b" {...rest}>
      {children}
    </thead>
  );
};

const FancyTBody = ({ href, children, ...rest }) => {
  return (
    <tbody className="[&_tr:last-child]:border-0" {...rest}>
      {children}
    </tbody>
  );
};

const FancyTR = ({ href, children, ...rest }) => {
  return (
    <tr
      className="border-b border-border transition-colors hover:bg-mono-3 duration-75"
      {...rest}
    >
      {children}
    </tr>
  );
};

const FancyTH = ({ href, children, ...rest }) => {
  return (
    <th
      className="h-12 px-4 text-left align-middle font-semibold text-mono-11 [&:has([role=checkbox])]:pr-0 md:text-nowrap"
      {...rest}
    >
      {children}
    </th>
  );
};

const FancyTD = ({ href, children, ...rest }) => {
  return (
    <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0" {...rest}>
      {children}
    </td>
  );
};

const FancyBlockquote = ({ children, ...rest }) => {
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
  blockquote: FancyBlockquote,
  table: FancyTable,
  thead: FancyTHead,
  tbody: FancyTBody,
  tr: FancyTR,
  th: FancyTH,
  td: FancyTD,
  img: FancyImage,
  a: FancyLink,
  em: FancyItalics,
  Video: FancyVideo,
  Journal,
  Nook,
  Plot,
  BoardgameStats,
  Stars,
};

const data = { boardgameData, olympicShoesMen, olympicShoesWomen }

export function MdxContent({ source }) {
  return <MDXRemote {...source} components={components} scope={data} />;
}
