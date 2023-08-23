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
    <div className="flex flex-wrap      ">
      {projects.map(({ project, key }) => {
        return (
          <p
            key={key}
            onClick={() => {
              if (carouselRef.current) {
                carouselRef.current.scrollLeft = scrollSnapPoint * key;
              }
            }}
            className={` text-center align-middle mx-2 py-1 px-2 font-semibold text-neutral-700 rounded-lg hover:cursor-pointer  ${
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
