import "../styles/globals.css";

import { Footer } from "@components/footer";
import localFont from "next/font/local";
import Providers from "./providers";

// Fonts
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

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`dark:bg-[#101010] ${inter.variable} ${kaisei.variable} ${sohne.variable}`}
    >
      <body
        className={
          "font-sans text-[#1a1a1a]  dark:text-[#f2f2f2] h-full relative"
        }
      >
        <Providers>
          <main className="md:py-32 pb-24 min-h-[100dvh] relative">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
