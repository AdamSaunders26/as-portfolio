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
      {projects.map(({ key, imageSrc, alt, details, project }) => {
        return (
          <div
            className={" snap-center basis-1/4 shrink-0 relative mx-10"}
            key={key}
          >
            <div className={"w-72 sm:w-[26rem] md:w-[32rem] lg:w-[46rem] "}>
              <Image
                className="p-2 "
                src={imageSrc}
                alt={alt}
                priority={true}
                placeholder="blur"
              />
              {project === "Login Page" ? (
                <p className="text-red-500 p-2">
                  Warning: Currently audio cannot be played on Safari or on iOS
                  devices to an issue with the way they handle audio
                </p>
              ) : null}
              <p className="bg-white rounded-lg p-2 my-2">{details}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
