import { RefObject, Dispatch, SetStateAction } from "react";
import { BiRightArrow } from "react-icons/bi";
interface Props {
  carouselRef: RefObject<HTMLDivElement>;
  setCurrentProject: Dispatch<SetStateAction<number>>;
  scrollSnapPoint: number;
}
export default function RightButton({
  carouselRef,
  setCurrentProject,
  scrollSnapPoint,
}: Props) {
  return (
    <div
      className="hidden place-self-center text-sky-600 active:scale-75 active:text-sky-800 sm:block  "
      onClick={() => {
        if (carouselRef.current) {
          carouselRef.current.scrollLeft += scrollSnapPoint;
        }
      }}
    >
      <BiRightArrow className="h-4 w-4 sm:h-12 sm:w-12 " />
    </div>
  );
}
