import { BiRightArrow } from "react-icons/bi";

export default function RightButton({ carouselRef }) {
  return (
    <div
      onClick={() => {
        carouselRef.current.scrollLeft += 600;
      }}
    >
      <BiRightArrow />
    </div>
  );
}
