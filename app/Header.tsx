"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import DarkModeButton from "./Components/DarkModeButton";

export default function Header({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}) {
  const pathname = usePathname();

  const linkClass =
    "hover:underline text-center rounded-md px-2 text-lg active:text-emerald-700 place-self-center sm:place-self-end ";
  const currentClass = " bg-sky-600 text-white dark:text-black font-light";

  return (
    <header className="flex flex-col px-2 sm:px-4 py-2 justify-between items-center shadow-lg font-semibold bg-white dark:bg-neutral-900 w-screen left-0 top-0 fixed z-20  text-neutral-700 dark:text-neutral-200 border-b-2 border-sky-600 sm:flex-row">
      <div className="flex ">
        <div className=" place-self-center  hidden sm:flex">
          <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <h1 className="font-bold text-3xl mx-4 text-center sm:text-2xl lg:text-3xl text-sky-700 dark:text-sky-500">
          Adam Saunders
        </h1>
        <div className=" place-self-center fixed right-0 top-0 m-4 sm:hidden">
          <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </div>
      <div className="flex my-2 sm:mr-4 gap-2 ">
        <div className={linkClass + (pathname === "/" ? currentClass : "")}>
          <Link href="/">
            <p>About Me</p>
          </Link>
        </div>
        <div
          className={linkClass + (pathname === "/projects" ? currentClass : "")}
        >
          <Link href="/projects">
            <p>Projects</p>
          </Link>
        </div>
        <div
          className={
            linkClass + (pathname === "/technologies" ? currentClass : "")
          }
        >
          <Link href="/technologies">
            <p>Techs</p>
          </Link>
        </div>
        <div
          className={linkClass + (pathname === "/contact" ? currentClass : "")}
        >
          <Link href="/contact">
            <p>Get in touch</p>
          </Link>
        </div>
      </div>
    </header>
  );
}
