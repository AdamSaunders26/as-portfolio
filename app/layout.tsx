import "./globals.css";
import type { Metadata } from "next";
import { Cabin } from "next/font/google";

import DarkModeHTML from "./DarkModeHTML";

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
  return <DarkModeHTML font={cabin}>{children}</DarkModeHTML>;
}
