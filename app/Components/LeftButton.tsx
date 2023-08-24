import { RefObject, Dispatch, SetStateAction } from "react";
import { BiLeftArrow } from "react-icons/bi";
interface Props {
  carouselRef: RefObject<HTMLDivElement>;
  setCurrentProject: Dispatch<SetStateAction<number>>;
}
export default function LeftButton({ carouselRef, setCurrentProject }: Props) {
  return (
    <div
      className="place-self-center text-sky-600 active:text-sky-800 active:scale-75"
      onClick={() => {
        if (carouselRef.current) {
          carouselRef.current.scrollLeft -= 525;
        }
      }}
    >
      <BiLeftArrow className="h-8 w-8 sm:h-12 sm:w-12" />
    </div>
  );
}
