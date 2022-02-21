import type { AppProps } from "next/app";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { lightTheme, darkTheme, globalStyles } from "../stitches.config";
import Head from "next/head";
import "../styles/reset.css";
// import "../styles/global.css";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { useState, useEffect } from "react";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  globalStyles();
  dayjs.extend(advancedFormat);

  return (
    <>
      <Head>
        <title>Joey</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange={!isMounted}
        value={{ light: lightTheme.className, dark: darkTheme.className }}
      >
        <AnimateSharedLayout>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </AnimateSharedLayout>
      </ThemeProvider>
    </>
  );
}
