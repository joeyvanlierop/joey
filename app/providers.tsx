"use client";

import { Center } from "@components/center";
import { Definition } from "@components/definition";
import { Image } from "@components/image";
import { Spacer } from "@components/spacer";
import { Stack } from "@components/stack";
import { Stars } from "@components/stars";
import { MDXProvider } from "@mdx-js/react";

const components = { Definition, Center, Spacer, Image, Stack, Stars };

export default function Providers({ children }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
