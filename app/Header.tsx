"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkClass =
    "hover:underline text-center rounded-lg px-2  active:text-emerald-700 place-self-center sm:place-self-end ";

  return (
    <header className="flex flex-col mt-2 px-2 justify-between items-center font-semibold text-neutral-700  border-b-2 border-emerald-500 sm:flex-row">
      <div>
        <h1 className="font-bold text-3xl mx-4 text-center sm:text-2xl lg:text-3xl text-emerald-800">
          Adam Saunders
        </h1>
      </div>
      <div className="flex my-2  gap-2 ">
        <div
          className={
            linkClass + (pathname === "/" ? " bg-emerald-800 text-white" : "")
          }
        >
          <Link href="/">
            <p>About Me</p>
          </Link>
        </div>
        <div
          className={
            linkClass +
            (pathname === "/projects" ? " bg-emerald-800 text-white" : "")
          }
        >
          <Link href="/projects">
            <p>Projects</p>
          </Link>
        </div>
        <div
          className={
            linkClass +
            (pathname === "/technologies" ? " bg-emerald-800 text-white" : "")
          }
        >
          <Link href="/technologies">
            <p>Techs</p>
          </Link>
        </div>
        <div
          className={
            linkClass +
            (pathname === "/contact" ? " bg-emerald-800 text-white" : "")
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
