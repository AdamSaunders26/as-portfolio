import { RefObject } from "react";
import { BiRightArrow } from "react-icons/bi";
interface Props {
  carouselRef: RefObject<HTMLDivElement>;
}
export default function RightButton({ carouselRef }: Props) {
  return (
    <div
      className="place-self-center text-emerald-800 active:text-emerald-900 active:scale-75"
      onClick={() => {
        if (carouselRef.current) {
          carouselRef.current.scrollLeft += 600;
        }
      }}
    >
      <BiRightArrow className="h-12 w-12 " />
    </div>
  );
}
