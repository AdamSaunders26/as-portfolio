import { Dispatch, SetStateAction } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

interface Props {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

export default function DarkModeButton({ darkMode, setDarkMode }: Props) {
  const darkModeClass =
    "w-6 h-6 active:scale-75 hover:cursor-pointer hover:animate-pulse ";
  return (
    <div
      onClick={() => {
        setDarkMode((curr) => !curr);
      }}
    >
      {darkMode ? (
        <BsMoonFill className={darkModeClass + "text-sky-500"} />
      ) : (
        <BsSunFill className={darkModeClass + "text-sky-700"} />
      )}
    </div>
  );
}
