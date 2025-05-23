import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/sections/navbar/Navbar";
import Footer from "./components/sections/footer/Footer";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TEDx FUKashere",
  description: "Official TEDx FUKashere Event Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
