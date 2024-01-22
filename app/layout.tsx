import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pipi web",
  description: "Aplicación basica con NEXT.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
