import type { Metadata } from "next";
import { Bricolage_Grotesque, Noto_Sans_Arabic, Source_Sans_3 } from "next/font/google";
import { dictionaries } from "@/i18n/dictionaries";
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
  metadataBase: new URL("https://atheeqsyed-portfolio.vercel.app"),
  title: dictionaries.en.meta.title,
  description: dictionaries.en.meta.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: dictionaries.en.meta.title,
    description: dictionaries.en.meta.description,
    type: "website",
    url: "/",
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
