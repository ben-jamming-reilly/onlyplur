import type { Metadata } from "next";
import { Inter, Micro_5 } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const micro = Micro_5({ subsets: ["latin"], weight: "400" });

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
