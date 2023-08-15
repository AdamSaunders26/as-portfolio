import "./globals.css";
import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import Header from "./Components/Header";

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adam Saunders",
  description: "Adam Saunders' Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={quicksand.className}>
      <body className="bg-white h-full container mx-auto my-auto flex flex-col ">
        <Header />
        {children}
      </body>
    </html>
  );
}
