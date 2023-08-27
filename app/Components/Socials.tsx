import { BsGithub, BsLinkedin, BsFiletypePdf } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

interface Props {
  horizontal?: boolean;
  cv?: boolean;
}

export default function Socials({ horizontal = false, cv = false }: Props) {
  const listClass =
    "mx-4 my-2 sm:mx-0  flex flex-wrap  justify-center gap-2   text-sky-700 dark:text-sky-500 font-semibold text-lg";
  const logoClass =
    "flex items-center mt-2  text-sm sm:text-base sm:mt-4 sm:ml-4 sm:w-max";
  return (
    <ul
      className={
        horizontal
          ? listClass + " sm:flex-row sm:justify-around sm:gap-0 sm:col-span-2"
          : listClass + " sm:flex-col "
      }
    >
      <li>
        <a
          className={logoClass}
          target="_break"
          href="https://www.linkedin.com/in/adam-saunders-13a304142/"
        >
          <BsLinkedin className="w-8 h-8 mr-2 text-sky-600" /> Linkedin
        </a>
      </li>
      <li>
        <a
          className={logoClass}
          target="_break"
          href="https://github.com/AdamSaunders26"
        >
          <BsGithub className="w-8 h-8 mr-2 text-sky-600" /> Github
        </a>
      </li>
      {cv ? (
        <li>
          <a
            className={logoClass}
            target="_blank"
            href="Adam Saunders - Junior Developer CV .pdf"
          >
            <BsFiletypePdf className="w-8 h-8 mr-1 text-sky-600" /> CV
          </a>
        </li>
      ) : null}
      <li>
        <a
          className={logoClass + " hidden sm:flex"}
          target="_blank"
          href="mailto:contact@adam-saunders.dev"
        >
          <HiOutlineMail className="w-8 h-8 mr-2 text-sky-600" />{" "}
          contact@adam-saunders.dev
        </a>
      </li>
      <li>
        <a
          className={logoClass + " sm:hidden"}
          target="_blank"
          href="mailto:contact@adam-saunders.dev"
        >
          <HiOutlineMail className="w-8 h-8 mr-2 text-sky-600" /> Email
        </a>
      </li>
    </ul>
  );
}
