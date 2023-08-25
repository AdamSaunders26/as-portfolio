"use client";

import { NextFont } from "next/dist/compiled/@next/font";
import Header from "./Header";
import { useState } from "react";

interface Props {
  font: NextFont;
  children: React.ReactNode;
}

export default function DarkModeHTML({ font, children }: Props) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <html
      lang="en"
      className={darkMode ? font.className + " dark " : font.className}
    >
      <body className="bg-neutral-200 dark:bg-neutral-900 h-screen container mx-auto flex flex-col ">
        <Header setDarkMode={setDarkMode} />
        {children}
        <p
          className="text-red-500"
          onClick={() => {
            setDarkMode((curr) => !curr);
          }}
        >
          Dark
        </p>
      </body>
    </html>
  );
}
