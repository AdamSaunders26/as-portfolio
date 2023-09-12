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
      className="  scrollbar-thin scrollbar-track-white dark:scrollbar-track-black scrollbar-thumb-sky-600 dark:scrollbar-thumb-sky-500 col-span-12 mt-2 flex snap-x snap-mandatory overflow-x-scroll  scroll-smooth sm:col-span-10  sm:col-start-2 "
    >
      {projects.map(({ key, imageSrc, alt, details, slideName }, index) => {
        const [modalOpen, setModalOpen] = useState(false);

        const projectClass = " snap-center basis-1/4 shrink-0 relative flex  ";
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
                "mini:w-64 plus:w-[20rem] mx-2 mb-2 w-60 rounded-md border-4 border-sky-600 bg-neutral-100 dark:border-sky-500 dark:bg-black sm:w-[30rem]  md:w-[17rem] lg:w-[24rem]  xl:w-[30rem] 2xl:w-[38rem] "
              }
            >
              <Image
                className=" rounded-xl border-8 border-transparent hover:cursor-zoom-in"
                src={imageSrc}
                alt={alt}
                priority={true}
                placeholder="blur"
                onClick={() => {
                  setModalOpen((curr) => !curr);
                }}
              />
              {/* {slideName === "Login Page" ? (
                <p className="p-2 text-red-500">
                  Warning: Currently audio cannot be played on Safari or on iOS
                  devices to an issue with the way they handle audio
                </p>
              ) : null} */}
              {/* <p className=" p-2  ">{details}</p> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
