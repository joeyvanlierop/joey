"use client";

import { Nook } from "@components/home";
import * as Journal from "@components/journal";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import knife from "@public/images/DSC06435.jpg";

const ImageKnife = () => (
  <Image src={knife} alt="Sunset on The West Coast Trail" placeholder="blur" />
);

const components = { Journal, Nook, ImageKnife };

export function MdxContent({ source }) {
  return <MDXRemote {...source} components={components} />;
}
