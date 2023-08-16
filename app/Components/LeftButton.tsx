import { RefObject, Dispatch, SetStateAction } from "react";
import { BiLeftArrow } from "react-icons/bi";
interface Props {
  carouselRef: RefObject<HTMLDivElement>;
  setCurrentProject: Dispatch<SetStateAction<number>>;
}
export default function LeftButton({ carouselRef, setCurrentProject }: Props) {
  return (
    <div
      className="place-self-center text-emerald-800 active:text-emerald-900 active:scale-75"
      onClick={() => {
        if (carouselRef.current) {
          carouselRef.current.scrollLeft -= 525;
          setCurrentProject((current) => {
            return current > 0 ? (current -= 1) : current;
          });
        }
      }}
    >
      <BiLeftArrow className="h-12 w-12" />
    </div>
  );
}
