"use client";

import { Center } from "@components/center";
import { Definition } from "@components/definition";
import { Spacer } from "@components/spacer";
import { Stars } from "@components/stars";
import { MDXProvider } from "@mdx-js/react";

const components = { Definition, Center, Spacer, Stars };

export default function Providers({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
