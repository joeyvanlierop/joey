"use client";

import { Nook } from "@components/home";
import * as Journal from "@components/journal";
import { MDXRemote } from "next-mdx-remote";

const components = { Journal, Nook };

export function MdxContent({ source }) {
  return <MDXRemote {...source} components={components} />;
}
