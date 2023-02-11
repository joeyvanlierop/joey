import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeButton } from "../components/themeButton";
import "../styles/globals.css";
import "../styles/reset.css";
import localFont from "@next/font/local";

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

export default function MyApp({ Component, pageProps, router }: AppProps) {
  dayjs.extend(advancedFormat);

  return (
    <>
      <Head>
        <title>Joey</title>
      </Head>
      <ThemeProvider attribute="class" defaultTheme="system">
        <main className={`${inter.variable} ${kaisei.variable} font-sans`}>
          <div className="absolute top-16 right-16">
            <ThemeButton />
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </main>
      </ThemeProvider>
    </>
  );
}
