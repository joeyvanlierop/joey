import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Stuff I made" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="bg-white text-[#121212] dark:bg-[#121212] dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
