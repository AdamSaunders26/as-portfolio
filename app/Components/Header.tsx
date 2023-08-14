import Link from "next/link";

export default function Header() {
  const linkClass = "hover:underline decoration-solid active:text-emerald-700";
  return (
    <header className="flex justify-between items-center py-4 font-semibold text-neutral-700 border-b-2 border-emerald-500">
      <div>
        <p className="font-bold text-3xl  text-emerald-800">Adam Saunders</p>
      </div>
      <Link href="/" className={linkClass}>
        <p>About Me</p>
      </Link>
      <Link href="/projects" className={linkClass}>
        <p>Projects</p>
      </Link>
      <Link href="/contact" className={linkClass}>
        <p>Get in touch</p>
      </Link>
    </header>
  );
}
