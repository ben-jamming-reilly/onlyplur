import type { Metadata } from "next";
import { Jersey_10 } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

const jersey = Jersey_10({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "only plur",
  description: "Peace Love Unity Respect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jersey.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
