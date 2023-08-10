"use client";

import { Center } from "@components/center";
import { Definition } from "@components/definition";
import { Image } from "@components/image";
import { Spacer } from "@components/spacer";
import { Stack } from "@components/stack";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "next-themes";

const components = { Definition, Center, Spacer, Image, Stack };

export default function Providers({ children }) {
  return (
    // TODO: Use system style
    <ThemeProvider attribute="class" defaultTheme="dark">
      <MDXProvider components={components}>{children}</MDXProvider>
    </ThemeProvider>
  );
}
