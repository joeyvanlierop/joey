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

const CustomBlockquote = ({ children, ...rest }) => {
  return (
    <blockquote
      className="not-prose text-mono-11 [&:not(:first-child)]:mt-6 [&:not(:last-child)]:mb-6 [&>:not(:first-child)]:mt-3 [&>:not(:last-child)]:mb-3"
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
};

export function MdxContent({ source }) {
  return <MDXRemote {...source} components={components} />;
}
