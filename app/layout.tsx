import "./globals.css";
import type { Metadata } from "next";
import { Quicksand, Oxygen, Cabin } from "next/font/google";
import Header from "./Header";

const quicksand = Quicksand({ subsets: ["latin"] });
const oxygen = Oxygen({ weight: "400", subsets: ["latin"] });
const cabin = Cabin({ subsets: ["latin"] });

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
    <html lang="en" className={cabin.className}>
      <body className="bg-white h-screen container mx-auto flex flex-col ">
        <Header />
        {children}
      </body>
    </html>
  );
}
