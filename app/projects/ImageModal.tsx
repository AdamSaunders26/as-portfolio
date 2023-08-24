import Image, { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

interface Props {
  imageSrc: StaticImageData;
  alt: string;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}
export default function ImageModal({ imageSrc, alt, setModalOpen }: Props) {
  return (
    <div className="fixed z-10 w-full h-full left-0 top-0 rounded-full">
      <p
        onClick={() => {
          setModalOpen((curr) => !curr);
        }}
      >
        Close
      </p>
      <Image className="m-2" src={imageSrc} alt={alt} />
    </div>
  );
}
