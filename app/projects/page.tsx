"use client";

import Carousel from "./Carousel";
import { allProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function CarouselPage() {
  return (
    <main className="mx-2 mt-24 sm:mt-16 sm:max-h-0">
      <h2 className="mx-2 my-2 text-2xl font-semibold text-sky-700 dark:text-sky-500">
        Projects
      </h2>
      <p className="mx-2 ">
        These are all the projects that are complete enough to share and
        display. There are many mini-apps that I have also worked on, but I
        would like to revisit these before adding them to this list.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {allProjects.map(
          ({
            project,
            projectName,
            githubURL,
            secondGithub,
            hostedURL,
            techArray,
          }) => {
            return (
              <ProjectCard
                projectName={projectName}
                techArray={techArray}
                project={project}
              />
              //   key={projectName}
              //   project={project}
              //   projectName={projectName}
              //   githubURL={githubURL}
              //   secondGithub={secondGithub}
              //   hostedURL={hostedURL}
              //   techArray={techArray}
              // />
            );
          },
        )}
      </div>
    </main>
  );
}
