import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const cairo = localFont({
  src: [
    {
      path: "./fonts/Cairo-Light.woff2",
      weight: "300",
    },
    {
      path: "./fonts/Cairo-Regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/Cairo-Bold.woff2",
      weight: "700",
    },
    {
      path: "./fonts/Cairo-Black.woff2",
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
  icons: "/P_letter.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cairo.variable} font-cairo antialiased`}>
        {children}
      </body>
    </html>
  );
}
