import "../styles/globals.css";

import { Center } from "@components/center";
import { Definition } from "@components/definition";
import { Image } from "@components/image";
import { Spacer } from "@components/spacer";
import { Stack } from "@components/stack";
import { MDXProvider } from "@mdx-js/react";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Head from "next/head";

// Fonts
const inter = localFont({
  src: "../public/fonts/Inter-roman.latin.var.woff2",
  variable: "--font-inter",
  display: "swap",
});
const kaisei = localFont({
  src: "../public/fonts/kaisei-tokumin-latin-700-normal.woff2",
  weight: "700",
  variable: "--font-kaisei",
  display: "swap",
});
const sohne = localFont({
  src: [
    {
      path: "../public/fonts/soehne-buch.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/soehne-buch-kursiv.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-sohne",
  display: "swap",
});

// MDX Components
const components = { Definition, Center, Spacer, Image, Stack };

export default function MyApp({ Component, pageProps, router }: AppProps) {
  dayjs.extend(advancedFormat);

  return (
    <>
      <Head>
        <title>Joey</title>
      </Head>
      <ThemeProvider attribute="class" defaultTheme="system">
        <MDXProvider components={components}>
          <main
            className={`${inter.variable} ${kaisei.variable} ${sohne.variable} font-sans`}
          >
            <Component {...pageProps} key={router.route} />
          </main>
        </MDXProvider>
      </ThemeProvider>
    </>
  );
}
