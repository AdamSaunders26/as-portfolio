"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

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
    <header className="flex flex-col px-4 py-2 justify-between items-center shadow-lg font-semibold bg-white dark:bg-neutral-900 w-screen left-0 top-0 fixed z-20  text-neutral-700 dark:text-neutral-200 border-b-2 border-sky-600 sm:flex-row">
      <div className="flex ">
        <div
          onClick={() => {
            setDarkMode((curr) => !curr);
          }}
          className=" place-self-center"
        >
          {darkMode ? (
            <BsMoon className="w-6 h-6 active:scale-50 active:duration-100" />
          ) : (
            <BsSun className="w-6 h-6 active:scale-50 active:duration-100" />
          )}
        </div>
        <h1 className="font-bold text-3xl mx-4 text-center sm:text-2xl lg:text-3xl text-sky-700 dark:text-sky-500">
          Adam Saunders
        </h1>
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
