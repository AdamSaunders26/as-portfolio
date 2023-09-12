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
  projectName?: string;
  githubURL?: string;
  hostedURL?: string;
  secondGithub?: string;
  techArray?: JSX.Element[];
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
      case currentScrollPosition > 0 && currentScrollPosition < scrollSnapPoint:
        setCurrentProject(0);
        break;
      case currentScrollPosition > scrollSnapPoint &&
        currentScrollPosition < scrollSnapPoint * 2:
        setCurrentProject(1);
        break;
      case currentScrollPosition > scrollSnapPoint * 2 &&
        currentScrollPosition < scrollSnapPoint * 3:
        setCurrentProject(2);
        break;
      case currentScrollPosition > scrollSnapPoint * 3 &&
        currentScrollPosition < scrollSnapPoint * 4:
        setCurrentProject(3);
        break;
      case currentScrollPosition > scrollSnapPoint * 4 &&
        currentScrollPosition < scrollSnapPoint * 5:
        setCurrentProject(4);
        break;
      case currentScrollPosition > scrollSnapPoint * 5 &&
        currentScrollPosition < scrollSnapPoint * 6:
        setCurrentProject(5);
        break;
    }
  }

  useEffect(() => {
    if (carouselRef.current) {
      setMaxScrollWidth(carouselRef.current.scrollWidth);
      setScrollSnapPoint(
        (carouselRef.current.scrollWidth * 0.78) / project.length,
      );
    }
  }, [carouselRef.current?.scrollWidth]);

  return (
    <section className=" my-4 grid grid-cols-12 rounded-md bg-white  dark:bg-black ">
      <div className="col-span-12 flex flex-col gap-2 place-self-center sm:flex-row ">
        <div className="flex flex-col ">
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-0">
            {/* <div className="flex items-center justify-between gap-2 place-self-center  text-sky-700 dark:text-sky-500">
              <a target="_blank" href={githubURL}>
                <AiFillGithub className="h-8 w-8" />
              </a>
              {secondGithub ? (
                <a target="_blank" href={secondGithub}>
                  <AiFillGithub className="h-8 w-8" />
                </a>
              ) : null}
              <a target="_blank" href={hostedURL}>
                <FiExternalLink className="m-1 h-6 w-6" />
              </a>
             
            </div> */}
            <CarouselIndicator
              carouselRef={carouselRef}
              projects={project}
              scrollSnapPoint={scrollSnapPoint}
              currentProject={currentProject}
              setCurrentProject={setCurrentProject}
            />
          </div>
        </div>
      </div>
      <LeftButton
        carouselRef={carouselRef}
        setCurrentProject={setCurrentProject}
        scrollSnapPoint={scrollSnapPoint}
      />
      <CarouselDisplay
        carouselRef={carouselRef}
        projects={project}
        handleScroll={handleScroll}
      />
      <RightButton
        carouselRef={carouselRef}
        setCurrentProject={setCurrentProject}
        scrollSnapPoint={scrollSnapPoint}
      />
    </section>
  );
}
