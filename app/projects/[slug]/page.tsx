"use client";

import { ProjectOverviewType } from "@/app/data/projects";
import React, { useEffect, useState } from "react";
import { allProjects } from "@/app/data/projects";
import ProjectDetailsHeader from "./ProjectDetailsHeader";
import ProjectDetailsCard from "./ProjectDetailsCard";

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
        <section className="flex flex-col items-center">
          <ProjectDetailsHeader currentProject={currentProject} />
          {currentProject.project.map((slide) => {
            return <ProjectDetailsCard slide={slide} />;
          })}
        </section>
      </main>
    );
  } else {
    return <p>Project not found</p>;
  }
}
