import "../styles/globals.css";

import { MDXProvider } from "@mdx-js/react";
import localFont from "@next/font/local";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Center } from "../components/center";
import { Definition } from "../components/definition";
import { Spacer } from "../components/spacer";

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

// MDX Components
const components = { Definition, Center, Spacer };

export default function MyApp({ Component, pageProps, router }: AppProps) {
  dayjs.extend(advancedFormat);

  return (
    <>
      <Head>
        <title>Joey</title>
      </Head>
      <ThemeProvider attribute="class" defaultTheme="system">
        <MDXProvider components={components}>
          <main className={`${inter.variable} ${kaisei.variable} font-sans`}>
            <AnimatePresence mode="wait" initial={false}>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </main>
        </MDXProvider>
      </ThemeProvider>
    </>
  );
}
