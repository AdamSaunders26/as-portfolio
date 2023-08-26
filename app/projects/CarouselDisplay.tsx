import Image from "next/image";
import { RefObject, useState } from "react";
import { ProjectType } from "../data/projects";
import ImageModal from "./ImageModal";

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
      className="  col-span-10 col-start-2 sm:col-span-10 flex mt-2 overflow-x-scroll snap-mandatory snap-x scroll-smooth "
    >
      {projects.map(({ key, imageSrc, alt, details, project }, index) => {
        const [modalOpen, setModalOpen] = useState(false);

        const projectClass = " snap-center basis-1/4 shrink-0 relative flex ";
        return (
          <div className={projectClass} key={key}>
            {modalOpen ? (
              <ImageModal
                imageSrc={imageSrc}
                alt={alt}
                setModalOpen={setModalOpen}
              />
            ) : null}
            <div
              className={
                "w-60 mini:w-72 plus:w-[20rem] sm:w-[31rem] md:w-[32rem] lg:w-[46rem] rounded-md border-sky-600 dark:border-sky-500 border-4 mx-2 mb-2 "
              }
            >
              <Image
                className=" border-8 border-transparent rounded-xl hover:cursor-pointer"
                src={imageSrc}
                alt={alt}
                priority={true}
                placeholder="blur"
                onClick={() => {
                  setModalOpen((curr) => !curr);
                  console.log({ alt });
                }}
              />
              {project === "Login Page" ? (
                <p className="text-red-500 p-2">
                  Warning: Currently audio cannot be played on Safari or on iOS
                  devices to an issue with the way they handle audio
                </p>
              ) : null}
              <p className=" p-2  ">{details}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
