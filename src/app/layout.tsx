import type { Metadata } from "next";
import { Bricolage_Grotesque, Noto_Sans_Arabic, Source_Sans_3 } from "next/font/google";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  axes: ["opsz"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin", "latin-ext"],
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-noto-arabic",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Atheeq Syed — AI Strategy & Product",
  description:
    "AI strategist, product manager, and AI vibe coder — from strategy decks to working PoCs. Based in Paris.",
  openGraph: {
    title: "Atheeq Syed — AI Strategy & Product",
    description:
      "AI strategist, product manager, and AI vibe coder — from strategy decks to working PoCs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bricolage.variable} ${sourceSans.variable} ${notoArabic.variable} min-h-full antialiased`}
      >
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
