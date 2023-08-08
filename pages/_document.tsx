import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Stuff I made" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="bg-[#f2f2f2] text-[#1a1a1a] dark:bg-[#1a1a1a] dark:text-[#f2f2f2]">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
