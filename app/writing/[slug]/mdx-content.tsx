"use client";

import { Nook } from "@components/home";
import * as Journal from "@components/journal";
import { MDXRemote } from "next-mdx-remote";
import NextImage from "next/image";
import { forwardRef } from "react";

const KnifeImage = () => (
  <NextImage
    src={require("@public/images/DSC06435.jpg")}
    placeholder="blur"
    alt="Da boys with their knives"
  />
);

const FancyItalics = forwardRef<HTMLElement>((props, ref) => (
  <em className="fancy" ref={ref} {...props} />
));

const components = { Journal, Nook, KnifeImage, em: FancyItalics };

export function MdxContent({ source }) {
  return <MDXRemote {...source} components={components} />;
}
