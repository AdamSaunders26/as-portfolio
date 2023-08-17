import Link from "next/link";

export default function Header() {
  const linkClass =
    "hover:underline decoration-solid active:text-emerald-700 place-self-center sm:place-self-end sm:mr-4";
  return (
    <header className="grid grid-cols-1 items-center py-4 font-semibold text-neutral-700 border-b-2 border-emerald-500 sm:grid-cols-2">
      <div>
        <p className="font-bold text-3xl text-center sm:text-2xl lg:text-3xl text-emerald-800">
          Adam Saunders
        </p>
      </div>
      <div className="flex justify-around mt-2">
        <Link href="/" className={linkClass}>
          <p>About Me</p>
        </Link>
        <Link href="/projects" className={linkClass}>
          <p>Projects</p>
        </Link>
        <Link href="/contact" className={linkClass}>
          <p>Get in touch</p>
        </Link>
      </div>
    </header>
  );
}
