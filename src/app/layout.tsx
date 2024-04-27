import type { Metadata } from "next";
import { Micro_5, Jersey_10 } from "next/font/google";
import "./globals.css";

const micro = Jersey_10({ subsets: ["latin"], weight: "400" });

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
      <body className={micro.className}>{children}</body>
    </html>
  );
}
