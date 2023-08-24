"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkClass =
    "hover:underline text-center rounded-md px-2 text-lg active:text-emerald-700 place-self-center sm:place-self-end ";

  return (
    <header className="flex flex-col px-4 py-2 justify-between items-center shadow-lg font-semibold bg-white w-screen left-0 top-0 fixed z-20  text-neutral-700  border-b-2 border-sky-600 sm:flex-row">
      <div>
        <h1 className="font-bold text-3xl mx-4 text-center sm:text-2xl lg:text-3xl text-sky-700">
          Adam Saunders
        </h1>
      </div>
      <div className="flex my-2  gap-2 ">
        <div
          className={
            linkClass +
            (pathname === "/" ? " bg-sky-600 text-white font-light" : "")
          }
        >
          <Link href="/">
            <p>About Me</p>
          </Link>
        </div>
        <div
          className={
            linkClass +
            (pathname === "/projects"
              ? "  bg-sky-600 text-white font-light"
              : "")
          }
        >
          <Link href="/projects">
            <p>Projects</p>
          </Link>
        </div>
        <div
          className={
            linkClass +
            (pathname === "/technologies"
              ? " bg-sky-600 text-white font-light"
              : "")
          }
        >
          <Link href="/technologies">
            <p>Techs</p>
          </Link>
        </div>
        <div
          className={
            linkClass +
            (pathname === "/contact" ? " bg-sky-600 text-white font-light" : "")
          }
        >
          <Link href="/contact">
            <p>Get in touch</p>
          </Link>
        </div>
      </div>
    </header>
  );
}
