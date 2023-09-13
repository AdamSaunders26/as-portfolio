import { Dispatch, SetStateAction } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

interface Props {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  mobile?: boolean;
}

export default function DarkModeButton({
  darkMode,
  setDarkMode,
  mobile,
}: Props) {
  const darkModeButtonClass =
    "w-6 h-6 active:scale-75 hover:cursor-pointer hover:animate-pulse ";
  let buttonClass = "place-self-center";
  if (mobile) {
    buttonClass += " fixed right-0 top-0 m-4 sm:hidden ";
  } else {
    buttonClass += " hidden sm:flex";
  }

  return (
    <div
      className="flex "
      onClick={() => {
        setDarkMode((curr) => !curr);
      }}
    >
      {darkMode ? (
        <div className={buttonClass}>
          <BsMoonFill className={darkModeButtonClass + "text-sky-500"} />
        </div>
      ) : (
        <div className={buttonClass}>
          <BsSunFill className={darkModeButtonClass + "text-sky-700"} />
        </div>
      )}
    </div>
  );
}
