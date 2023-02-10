import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeButton } from "../components/themeButton";
import {
  darkTheme,
  globalStyles,
  lightTheme,
  styled,
} from "../stitches.config";
import "../styles/reset.css";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  globalStyles();
  dayjs.extend(advancedFormat);

  return (
    <>
      <Head>
        <title>Joey</title>
      </Head>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        value={{ light: lightTheme.className, dark: darkTheme.className }}
      >
        <TopRight>
          <ThemeButton />
        </TopRight>
        <AnimatePresence mode="wait" initial={false}>
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
