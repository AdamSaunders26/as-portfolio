import React, { useEffect, useRef, useState } from "react";
import LeftButton from "../Components/LeftButton";
import RightButton from "../Components/RightButton";
import CarouselDisplay from "./CarouselDisplay";
import CarouselIndicator from "./CarouselIndicator";
import { ProjectType } from "../data/projects";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

interface Props {
  project: ProjectType[];
  projectName: string;
  githubURL: string;
  hostedURL: string;
  secondGithub?: string;
  techArray: JSX.Element[];
}

export default function Carousel({
  project,
  projectName,
  githubURL,
  secondGithub,
  hostedURL,
  techArray,
}: Props) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentProject, setCurrentProject] = useState<number>(0);
  const [scrollSnapPoint, setScrollSnapPoint] = useState<number>(0);
  const [maxScrollWidth, setMaxScrollWidth] = useState<number>(0);

  function handleScroll(e: React.UIEvent<HTMLDivElement, UIEvent>) {
    const currentScrollPosition = (e.target as HTMLDivElement).scrollLeft;
    switch (true) {
      case currentScrollPosition < scrollSnapPoint - 50:
        setCurrentProject(0);
        break;
      case currentScrollPosition < scrollSnapPoint * 2 - 50:
        setCurrentProject(1);
        break;
      case currentScrollPosition < scrollSnapPoint * 3 - 50:
        setCurrentProject(2);
        break;
      case currentScrollPosition < maxScrollWidth:
        setCurrentProject(3);
        break;
    }
  }

  useEffect(() => {
    if (carouselRef.current) {
      setMaxScrollWidth(carouselRef.current.scrollWidth);
      setScrollSnapPoint(carouselRef.current.scrollWidth / project.length);
    }
  }, []);

  return (
    <section className=" grid grid-cols-12 my-4 py-4 rounded-md bg-white dark:bg-black ">
      <div className="col-span-12 flex flex-col sm:flex-row place-self-center gap-2 ">
        <div className="flex flex-col ">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            <div className="flex items-center justify-between place-self-center gap-2  text-sky-700 dark:text-sky-500">
              <a target="_blank" href={githubURL}>
                <AiFillGithub className="w-8 h-8" />
              </a>
              {secondGithub ? (
                <a target="_blank" href={secondGithub}>
                  <AiFillGithub className="w-8 h-8" />
                </a>
              ) : null}
              <a target="_blank" href={hostedURL}>
                <FiExternalLink className="w-6 h-6 m-1" />
              </a>
              <h3 className="  text-2xl font-bold place-self-center  bg-white dark:bg-black border-2 border-sky-600 dark:border-sky-500 rounded-md px-2">
                {projectName}
              </h3>
            </div>
            <CarouselIndicator
              carouselRef={carouselRef}
              projects={project}
              scrollSnapPoint={scrollSnapPoint}
              currentProject={currentProject}
              setCurrentProject={setCurrentProject}
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            {techArray.map((logo, index) => {
              return <React.Fragment key={index}>{logo}</React.Fragment>;
            })}
          </div>
        </div>
      </div>
      <LeftButton
        carouselRef={carouselRef}
        setCurrentProject={setCurrentProject}
      />
      <CarouselDisplay
        carouselRef={carouselRef}
        projects={project}
        handleScroll={handleScroll}
      />
      <RightButton
        carouselRef={carouselRef}
        setCurrentProject={setCurrentProject}
      />
    </section>
  );
}
