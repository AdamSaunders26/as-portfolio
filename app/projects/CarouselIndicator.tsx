import { RefObject } from "react";
import { ProjectType } from "../data/projects";

interface Props {
  carouselRef: RefObject<HTMLDivElement>;
  projects: ProjectType[];
  scrollSnapPoint: number;
  currentProject: number;
}

export default function CarouselIndicator({
  carouselRef,
  projects,
  scrollSnapPoint,
  currentProject,
}: Props) {
  return (
    <div className="flex flex-wrap mt-2 mx-2 justify-center items-center  col-span-11 auto-cols-max ">
      {projects.map(({ project, key }) => {
        return (
          <p
            key={key}
            onClick={() => {
              if (carouselRef.current) {
                carouselRef.current.scrollLeft = scrollSnapPoint * key;
              }
            }}
            className={` text-center mx-2 p-2 px-4 font-semibold text-neutral-700 rounded-lg hover:cursor-pointer  ${
              currentProject === key
                ? " bg-emerald-800  text-white"
                : " hover:bg-emerald-100"
            }`}
          >
            {project}
          </p>
        );
      })}
    </div>
  );
}
