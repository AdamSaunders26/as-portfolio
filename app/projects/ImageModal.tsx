import Image, { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";
import { AiOutlineFullscreenExit, AiOutlineCloseCircle } from "react-icons/ai";

interface Props {
  imageSrc: StaticImageData;
  alt: string;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}
export default function ImageModal({ imageSrc, alt, setModalOpen }: Props) {
  return (
    <div className="fixed left-0 top-0 z-30 block h-full w-full overflow-hidden bg-black bg-opacity-60">
      <div className=" ">
        <AiOutlineCloseCircle
          onClick={() => {
            setModalOpen((curr) => !curr);
          }}
          className="absolute right-0 top-0  z-50 m-2 h-8 w-8 rounded-full bg-black bg-opacity-50 p-1 text-white hover:cursor-pointer"
        />
        <Image
          className="absolute left-1/2 top-1/2 z-40  max-h-[98%] max-w-[98%] -translate-x-1/2 -translate-y-1/2  overflow-hidden  object-contain opacity-100 hover:cursor-zoom-out"
          src={imageSrc}
          alt={alt}
          onClick={() => {
            setModalOpen((curr) => !curr);
          }}
        />
      </div>
    </div>
  );
}
