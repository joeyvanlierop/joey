import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Head from "next/head";
import "../styles/reset.css";
import "../styles/normalize.css";
import "../styles/global.css";

function MyApp({ Component, pageProps, router }) {
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

export default MyApp;
