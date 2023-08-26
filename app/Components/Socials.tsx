import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

export default function Socials({
  horizontal = false,
}: {
  horizontal?: boolean;
}) {
  const logoClass = "flex items-center mt-2 sm:mt-4  sm:w-max";
  const listClass =
    "mx-4 my-2 sm:mx-0  flex justify-between   text-sky-700 dark:text-sky-500 font-semibold text-lg";
  return (
    <ul
      className={
        horizontal
          ? listClass + " sm:flex-row sm:justify-center sm:gap-4 sm:col-span-2"
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
          className={logoClass + " sm:hidden "}
          target="_blank"
          href="mailto:contact@adam-saunders.dev"
        >
          <HiOutlineMail className="w-8 h-8 mr-2 text-sky-600" /> Email
        </a>
      </li>
    </ul>
  );
}
