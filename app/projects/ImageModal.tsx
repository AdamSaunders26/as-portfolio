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
    <div className="fixed z-10 w-full h-full left-0 top-0 bg-black bg-opacity-60 block overflow-hidden">
      <div className=" ">
        <AiOutlineCloseCircle
          onClick={() => {
            setModalOpen((curr) => !curr);
          }}
          className="m-2 w-8 h-8  bg-black bg-opacity-50 p-1 rounded-full text-white absolute z-30 top-0 right-0 hover:cursor-pointer"
        />
        <Image
          className="absolute top-1/2 left-1/2 z-20  object-contain overflow-hidden max-w-[98%] max-h-[98%]  opacity-100 -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer"
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
