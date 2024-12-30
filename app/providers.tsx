"use client";

import { Center } from "@components/center";
import { Definition } from "@components/definition";
import { Spacer } from "@components/spacer";
import { Stars } from "@components/stars";
import { MDXProvider } from "@mdx-js/react";

const components = { Definition, Center, Spacer, Stars };

export default function Providers({ children }) {
  // TODO: Review if there is a better fix for this
  // https://github.com/contentlayerdev/contentlayer/issues/456
  // For now we just ignore the typescript error since it isnt actually an issue (?)
  //@ts-ignore
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
