import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar/NavBar";
import { SessionProviderWrapper } from "@/lib/SessionWrapper";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bintang Survey",
  description: "Toko Beli Survey Terpercaya",
  icons: [
    { url: "/logo.png", type: "image/png" }
  ]
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={`${inter.className}  overflow-x-hidden`}>
        <SessionProviderWrapper session={session}>
          <NavBar />
          <div className="">{children}</div>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
