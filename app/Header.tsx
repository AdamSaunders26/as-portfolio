"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const linkClass =
    "hover:underline text-center rounded-lg px-2 active:text-emerald-700 place-self-center sm:place-self-end sm:mr-4";

  return (
    <header className="flex flex-col justify-between items-center py-4 font-semibold text-neutral-700 border-b-2 border-emerald-500 sm:flex-row">
      <div>
        <h1 className="font-bold text-3xl mx-4 text-center sm:text-2xl lg:text-3xl text-emerald-800">
          Adam Saunders
        </h1>
      </div>
      <div className="flex space-x-4 mt-2">
        <Link
          href="/"
          className={
            linkClass + (pathname === "/" ? " bg-emerald-800 text-white" : "")
          }
        >
          <p>About Me</p>
        </Link>
        <Link
          href="/projects"
          className={
            linkClass +
            (pathname === "/projects" ? " bg-emerald-800 text-white" : "")
          }
        >
          <p>Projects</p>
        </Link>
        <Link
          href="/skills"
          className={
            linkClass +
            (pathname === "/skills" ? " bg-emerald-800 text-white" : "")
          }
        >
          <p>Skills</p>
        </Link>
        <Link
          href="/contact"
          className={
            linkClass +
            (pathname === "/contact" ? " bg-emerald-800 text-white" : "")
          }
        >
          <p>Get in touch</p>
        </Link>
      </div>
    </header>
  );
}
