import "../styles/animations.css";
import "../styles/blockquote.css";
import "../styles/globals.css";
import "../styles/plotly.css";
import "../styles/react-medium-image-zoom.css";
import "../styles/scroll.css";
import "../styles/theme.css";

import { Column } from "@components/column";
import { Footer } from "@components/footer";
import { Analytics } from "@vercel/analytics/react";
import { Metadata, Viewport } from "next";
import localFont from "next/font/local";

const inter = localFont({
  src: "../public/fonts/Inter-roman.latin.var.woff2",
  variable: "--font-inter",
  display: "swap",
});
const newsreader = localFont({
  src: "../public/fonts/newsreader-subset-0.woff2",
  style: "italic",
  variable: "--font-newsreader",
  display: "swap",
});
const sohne = localFont({
  src: [
    {
      path: "../public/fonts/soehne-buch.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/soehne-buch-kursiv.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-sohne",
  display: "swap",
});

export const metadata: Metadata = {
  authors: [{ name: "Joey Van Lierop" }, { name: "Joseph Van Lierop" }],
  alternates: {
    types: {
      "application/rss+xml ": "/feed"
    }
  }
};

export const viewport: Viewport = {
  themeColor: "var(--gray2)",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`bg-mono-1 ${inter.variable} ${newsreader.variable} ${sohne.variable}`}
      suppressHydrationWarning
    >
      <body className={"font-sans text-text h-full relative"}>
        <main className="md:py-32 pb-24 min-h-[100dvh] relative">

          <div className="flex flex-col items-center justify-center">
            <Column className="flex flex-col relative">
              {children}
            </Column>
          </div>
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
