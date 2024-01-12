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

const components = {
  Journal,
  Nook,
  Image,
  Video: FancyVideo,
  em: FancyItalics,
  a: CustomLink,
};

export function MdxContent({ source }) {
  return <MDXRemote {...source} components={components} />;
}
