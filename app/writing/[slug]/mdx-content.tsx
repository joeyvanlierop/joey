"use client";

import { Nook } from "@components/home";
import * as Journal from "@components/journal";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

const components = { Journal, Nook, Image };

export function MdxContent({ source }) {
  return <MDXRemote {...source} components={components} />;
}
