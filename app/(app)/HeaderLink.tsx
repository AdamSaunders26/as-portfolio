import Link from "next/link";

interface Props {
  linkClass: string;
  pathname: string;
  currentClass: string;
  linkName: string;
}

export default function HeaderLink({
  linkClass,
  pathname,
  currentClass,
  linkName,
}: Props) {
  return (
    <div className={linkClass + (pathname === linkName ? currentClass : "")}>
      <Link href={"/" + linkName.toLowerCase()}>
        {linkName === "/" ? <p>About</p> : <p>{linkName}</p>}
      </Link>
    </div>
  );
}
