import { RefObject, Dispatch, SetStateAction } from "react";
import { BiRightArrow } from "react-icons/bi";
interface Props {
  carouselRef: RefObject<HTMLDivElement>;
  setCurrentProject: Dispatch<SetStateAction<number>>;
}
export default function RightButton({ carouselRef, setCurrentProject }: Props) {
  return (
    <div
      className="place-self-center text-emerald-800 active:text-emerald-900 active:scale-75"
      onClick={() => {
        if (carouselRef.current) {
          carouselRef.current.scrollLeft += 525;
        }
      }}
    >
      <BiRightArrow className="h-8 w-8 sm:h-12 sm:w-12 " />
    </div>
  );
}
