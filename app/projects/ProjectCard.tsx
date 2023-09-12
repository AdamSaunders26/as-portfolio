import React from "react";
import { ProjectType } from "../data/projects";
import Carousel from "./Carousel";

interface Props {
  projectName: string;
  techArray: JSX.Element[];
  project: ProjectType[];
}

export default function ProjectCard({
  projectName,
  techArray,
  project,
}: Props) {
  return (
    <section className="m-2 flex flex-col rounded-md bg-white p-2 dark:bg-black">
      <h3 className="  w-fit place-self-center rounded-md  border-2 border-sky-600 bg-white px-2 text-2xl font-bold dark:border-sky-500 dark:bg-black">
        {projectName}
      </h3>
      <div className="mt-2 flex flex-wrap justify-center gap-2">
        {techArray.map((logo, index) => {
          return <React.Fragment key={index}>{logo}</React.Fragment>;
        })}
      </div>
      <Carousel project={project} />
    </section>
  );
}
