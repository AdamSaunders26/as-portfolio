"use client";

import { ProjectOverviewType, ProjectType } from "@/app/data/projects";
import React, { useEffect, useState } from "react";
import { allProjects } from "@/app/data/projects";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image";

export default function ProjectDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const [currentProject, setCurrentProject] =
    useState<ProjectOverviewType | null>(null);

  useEffect(() => {
    allProjects.forEach((project) => {
      if (project.slug === params.slug) {
        setCurrentProject(project);
      }
    });
  }, []);

  if (currentProject) {
    const {
      projectName,
      project,
      techArray,
      githubURL,
      secondGithub,
      hostedURL,
    } = currentProject;

    return (
      <main className="mx-2 mt-28 sm:mt-20 ">
        <section className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <a target="_blank" href={githubURL}>
              <AiFillGithub className="h-8 w-8" />
            </a>
            {secondGithub ? (
              <a target="_blank" href={secondGithub}>
                <AiFillGithub className="h-8 w-8" />
              </a>
            ) : null}
            <h2 className="w-fit rounded-md border-2 border-sky-600 p-2 text-3xl font-bold dark:border-sky-500">
              {projectName}
            </h2>
            <a target="_blank" href={hostedURL}>
              <FiExternalLink className="m-1 h-6 w-6" />
            </a>
          </div>
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            {techArray.map((logo, index) => {
              return <React.Fragment key={index}>{logo}</React.Fragment>;
            })}
          </div>

          {project.map((slide) => {
            return (
              <div className=" my-6 items-center rounded-md   p-4 md:grid md:grid-cols-3">
                <Image
                  src={slide.imageSrc}
                  alt={slide.alt}
                  className="col-span-2 rounded-xl border-4 border-sky-600 px-2 hover:cursor-zoom-in"
                />
                <article className="m-2   rounded-md bg-white p-4 text-xl dark:bg-black">
                  {slide.details}
                </article>
              </div>
            );
          })}
        </section>
      </main>
    );
  } else {
    return <p>Project not found</p>;
  }
}
