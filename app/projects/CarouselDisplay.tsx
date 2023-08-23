import Image from "next/image";
import { RefObject } from "react";
import { ProjectType } from "../data/projects";

interface Props {
  carouselRef: RefObject<HTMLDivElement>;
  projects: ProjectType[];
  handleScroll: (e: React.UIEvent<HTMLDivElement, UIEvent>) => void;
}

export default function CarouselDisplay({
  carouselRef,
  projects,
  handleScroll,
}: Props) {
  return (
    <div
      ref={carouselRef}
      onScroll={(e) => {
        handleScroll(e);
      }}
      className=" px-4 col-span-9 flex mt-2 overflow-x-scroll snap-mandatory snap-x scroll-smooth "
    >
      {projects.map(({ key, imageSrc, alt, details }) => {
        return (
          <div
            className={" snap-center basis-1/4 shrink-0 relative mx-10"}
            key={key}
          >
            <div className={"w-72 sm:w-[30rem] md:w-[36rem] lg:w-[50rem] "}>
              <Image
                className="p-2 "
                src={imageSrc}
                alt={alt}
                priority={true}
              />
              <p className="bg-emerald-100 rounded-lg p-2 my-2">{details}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
