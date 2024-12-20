/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";

const cairo = localFont({
  src: [
    {
      path: "../fonts/Cairo-Light.woff2",
      weight: "300",
    },
    {
      path: "../fonts/Cairo-Regular.woff2",
      weight: "400",
    },
    {
      path: "../fonts/Cairo-Bold.woff2",
      weight: "700",
    },
    {
      path: "../fonts/Cairo-Black.woff2",
      weight: "900",
    },
  ],
  variable: "--cairo",
  weight: "300 400 700 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Progo",
  description: "progo eg | Software development agency",
  icons: "/favicon.ico",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <meta property="og:title" content="progo" />
        <meta
          property="og:description"
          content="progo eg | Software development agency"
        />
        <meta property="og:url" content="https://progoeg.com" />
        <meta property="og:site_name" content="progo" />
        <meta property="og:locale" content="ar" />
        <meta property="og:locale:alternate" content="en" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:type" content="website" />
      </head>
      <body className={`${cairo.variable} font-cairo antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
