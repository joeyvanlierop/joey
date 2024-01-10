"use client";

import { Nook } from "@components/nook";
import * as Journal from "@components/journal";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import { forwardRef } from "react";
import { useToggle } from "hooks/useToggle";

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

const Video = ({ href, children, ...rest }) => {
  const [muted, toggleMuted] = useToggle(true);

  return (
    <video
      autoPlay
      muted={muted}
      onClick={toggleMuted}
      className="mx-auto h-auto cursor-pointer"
      {...rest}
    >
      {children}
    </video>
  );
};

const components = {
  Journal,
  Nook,
  Image,
  Video,
  em: FancyItalics,
  a: CustomLink,
};

export function MdxContent({ source }) {
  return <MDXRemote {...source} components={components} />;
}
