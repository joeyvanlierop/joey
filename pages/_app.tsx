import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import { ThemeButton } from "../components/ThemeButton";
import {
  darkTheme,
  globalStyles,
  lightTheme,
  styled,
} from "../stitches.config";
import "../styles/reset.css";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  globalStyles();
  dayjs.extend(advancedFormat);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Joey</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        value={{ light: lightTheme.className, dark: darkTheme.className }}
      >
        <TopRight>
          <ThemeButton />
        </TopRight>
        <AnimatePresence exitBeforeEnter={true} initial={false}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

const TopRight = styled("div", {
  position: "absolute",
  top: "50px",
  right: "50px",
});
