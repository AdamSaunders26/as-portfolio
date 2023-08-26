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
  const currentTabClass =
    " bg-sky-600 dark:bg-sky-500 text-white dark:text-black font-light";
  const notCurrentTabClass = " hover:bg-sky-100 hover:dark:bg-sky-900";
  return (
    <div className="flex flex-wrap  justify-center ">
      {projects.map(({ project, key }) => {
        return (
          <p
            key={key}
            onClick={() => {
              if (carouselRef.current) {
                carouselRef.current.scrollLeft = scrollSnapPoint * key;
              }
            }}
            className={` text-center place-self-center ml-2  px-2 font-semibold  rounded-md hover:cursor-pointer  ${
              currentProject === key ? currentTabClass : notCurrentTabClass
            }`}
          >
            {project}
          </p>
        );
      })}
    </div>
  );
}
