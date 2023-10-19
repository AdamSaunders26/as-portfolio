"use client";

import { NextFont } from "next/dist/compiled/@next/font";
import Header from "./(app)/Header";
import { useEffect, useState } from "react";

interface Props {
  font: NextFont;
  children: React.ReactNode;
}

export default function DarkModeHTML({ font, children }: Props) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  return (
    <html
      lang="en"
      className={
        darkMode
          ? font.className + " dark 2xl:text-2xl"
          : font.className + "2xl:text-2xl"
      }
    >
      <body className="scrollbar-thin dark:scrollbar-track-neutral-900 dark:scrollbar-thumb-sky-500 scrollbar-track-neutral-200 scrollbar-thumb-sky-600 container mx-auto flex h-screen flex-col bg-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-200  ">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        {children}
      </body>
    </html>
  );
}
