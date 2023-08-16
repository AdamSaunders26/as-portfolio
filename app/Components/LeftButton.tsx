import { BiLeftArrow } from "react-icons/bi";

export default function LeftButton({ carouselRef }) {
  return (
    <div
      onClick={() => {
        carouselRef.current.scrollLeft -= 600;
      }}
    >
      <BiLeftArrow />
    </div>
  );
}
