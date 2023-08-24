import { Dispatch, RefObject, SetStateAction } from "react";
import { ProjectType } from "../data/projects";

interface Props {
  carouselRef: RefObject<HTMLDivElement>;
  projects: ProjectType[];
  scrollSnapPoint: number;
  currentProject: number;
  setCurrentProject: Dispatch<SetStateAction<number>>;
}

export default function CarouselIndicator({
  carouselRef,
  projects,
  scrollSnapPoint,
  currentProject,
  setCurrentProject,
}: Props) {
  return (
    <div className="flex flex-wrap  justify-center    ">
      {projects.map(({ project, key }) => {
        return (
          <p
            key={key}
            onClick={() => {
              if (carouselRef.current) {
                carouselRef.current.scrollLeft = scrollSnapPoint * key;
              }
            }}
            className={` text-center place-self-center ml-2  px-2 font-semibold text-neutral-700 rounded-md hover:cursor-pointer  ${
              currentProject === key
                ? " bg-sky-600  text-white font-light"
                : " hover:bg-sky-100"
            }`}
          >
            {project}
          </p>
        );
      })}
    </div>
  );
}
