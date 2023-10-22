"use client";

import { ProjectOverviewType } from "@/app/data/projects";
import React, { useEffect, useState } from "react";
import { allProjects } from "@/app/data/projects";
import ProjectDetailsHeader from "./ProjectDetailsHeader";
import ProjectDetailsCard from "./ProjectDetailsCard";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

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
    return (
      <main className="mx-2 mt-28 sm:mt-20 ">
        <div className="-mt-2 mb-2 ml-2 flex w-fit items-center gap-2 rounded-md  border-2 border-neutral-200 p-2 text-lg font-semibold hover:cursor-pointer hover:border-sky-600 dark:border-neutral-900 hover:dark:border-sky-600 sm:-mb-8  ">
          <FiArrowLeft className="h-6 w-6" />
          <Link href={`/projects`}>Back to projects</Link>
        </div>
        <section className="flex flex-col items-center">
          <ProjectDetailsHeader currentProject={currentProject} />
          {currentProject.project.map((slide) => {
            return <ProjectDetailsCard key={slide.key} slide={slide} />;
          })}
        </section>
      </main>
    );
  } else {
    return <p>Project not found</p>;
  }
}
