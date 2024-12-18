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
  description: "Software development agency",
  icons: "@/public/p_letter.svg",
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
      <body className={`${cairo.variable} font-cairo antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
