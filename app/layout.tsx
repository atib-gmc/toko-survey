import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maxima Survey",
  description: "Toko Beli Survey Terpercaya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} p-10 overflow-x-hidden`}>
        <NavBar />
        <div className=" mt-14 ">{children}</div>
      </body>
    </html>
  );
}
