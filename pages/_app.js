import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Head from "next/head";
// import "../styles/normalize.css";
import "../styles/reset.css";
import "../styles/global.css";

export default function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Joey</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AnimateSharedLayout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </AnimateSharedLayout>
    </>
  );
}
