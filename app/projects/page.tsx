"use client";

import Carousel from "./Carousel";
import { allProjects } from "../data/projects";

export default function CarouselPage() {
  return (
    <main className="mx-2 sm:max-h-0 mt-24 sm:mt-16">
      <h2 className="text-2xl mx-2 my-2 font-semibold text-sky-700 dark:text-sky-500">
        Projects
      </h2>
      <p className="mx-2 ">
        These are all the projects that are complete enough to share and
        display. There are many mini-apps that I have also worked on, but I
        would like to revisit these before adding them to this list.
      </p>
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
            <Carousel
              key={projectName}
              project={project}
              projectName={projectName}
              githubURL={githubURL}
              secondGithub={secondGithub}
              hostedURL={hostedURL}
              techArray={techArray}
            />
          );
        }
      )}
    </main>
  );
}
