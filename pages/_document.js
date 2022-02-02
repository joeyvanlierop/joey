import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../stitches.config";

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    try {
      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            <style
              id="stitches"
              dangerouslySetInnerHTML={{ __html: getCssText() }}
            />
          </>
        ),
      };
    } catch (e) {
      console.error(e.message);
    } finally {
      null;
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Stuff I made" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
