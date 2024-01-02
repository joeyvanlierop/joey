import "../styles/globals.css";
import "../styles/scroll.css";

import { Footer } from "@components/footer";
import { Analytics } from "@vercel/analytics/react";
import { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Providers from "./providers";

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
};

export const viewport: Viewport = {
  themeColor: "#1c1c1c",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`bg-[#1a1a1a] ${inter.variable} ${newsreader.variable} ${sohne.variable}`}
      suppressHydrationWarning
    >
      <body className={"font-sans text-[#e5e5e5] h-full relative"}>
        <Providers>
          <main className="md:py-32 pb-24 min-h-[100dvh] relative">
            {children}
          </main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
