import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";
import { darkTheme, globalStyles, lightTheme } from "../stitches.config";
import "../styles/reset.css";

export default function MyApp({ Component, pageProps, router }: AppProps) {
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
        defaultTheme="system"
        disableTransitionOnChange={false}
        value={{ light: lightTheme.className, dark: darkTheme.className }}
      >
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}
