import React from "react";
import { ProjectType } from "../data/projects";
import Carousel from "./Carousel";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

interface Props {
  projectName: string;
  techArray: JSX.Element[];
  project: ProjectType[];
  githubURL: string;
  secondGithub?: string;
  hostedURL?: string;
  slug: string;
}

export default function ProjectCard({
  projectName,
  techArray,
  project,
  githubURL,
  secondGithub,
  hostedURL,
  slug,
}: Props) {
  return (
    <section className=" m-2 flex flex-col rounded-md   bg-white p-2  dark:bg-black">
      <div className=" mb-[0.25rem] flex items-center justify-between gap-2 place-self-center  text-sky-700 dark:text-sky-500">
        <a target="_blank" href={githubURL}>
          <AiFillGithub className="h-8 w-8" />
        </a>
        {secondGithub ? (
          <a target="_blank" href={secondGithub}>
            <AiFillGithub className="h-8 w-8" />
          </a>
        ) : null}
        <h3 className="  w-fit place-self-center rounded-md  border-2 border-sky-600 bg-white px-2 text-2xl font-bold text-neutral-800 dark:border-sky-500 dark:bg-black dark:text-white">
          {projectName}
        </h3>
        <a target="_blank" href={hostedURL}>
          <FiExternalLink className="m-1 h-6 w-6" />
        </a>
      </div>
      <Carousel project={project} />
      {/* <div className="mt-2 flex flex-wrap justify-center gap-2">
        {techArray.map((logo, index) => {
          return <React.Fragment key={index}>{logo}</React.Fragment>;
        })}
      </div> */}
      <div className="flex items-center gap-2 place-self-end rounded-md border-2 border-white p-2 text-lg font-semibold hover:cursor-pointer hover:border-sky-600 dark:border-black hover:dark:border-sky-600">
        <Link href={`/projects/${slug}`}>See more</Link>
        <FiArrowRight className="h-6 w-6" />
      </div>
    </section>
  );
}
