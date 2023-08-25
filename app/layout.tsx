import "./globals.css";
import type { Metadata } from "next";
import { Quicksand, Oxygen, Cabin } from "next/font/google";
import Header from "./Header";
import { useContext, useState } from "react";
import DarkModeHTML from "./DarkModeHTML";

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
  return <DarkModeHTML font={cabin}>{children}</DarkModeHTML>;
}
