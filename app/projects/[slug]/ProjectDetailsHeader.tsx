import ExternalLink from "@/app/Components/ExternalLink";
import GithubLink from "@/app/Components/GithubLink";
import TechLogos from "@/app/Components/TechLogos";
import { ProjectOverviewType } from "@/app/data/projects";
import React from "react";

interface Props {
  currentProject: ProjectOverviewType;
}

export default function ProjectDetailsHeader({ currentProject }: Props) {
  const { projectName, techArray, githubURL, secondGithub, hostedURL } =
    currentProject;

  return (
    <div>
      <div className="flex items-center gap-2">
        <GithubLink url={githubURL} />
        {secondGithub ? <GithubLink url={secondGithub} /> : null}
        <h2 className="flex w-fit  rounded-md border-2 border-sky-600 p-2 text-center text-3xl font-bold dark:border-sky-500">
          {projectName}
        </h2>
        {hostedURL ? <ExternalLink url={hostedURL} /> : null}
      </div>
      <div className="mt-2 flex flex-wrap justify-center gap-2">
        <TechLogos techArray={techArray} />
      </div>
    </div>
  );
}
