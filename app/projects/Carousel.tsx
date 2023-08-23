import { useEffect, useRef, useState } from "react";
import LeftButton from "../Components/LeftButton";
import RightButton from "../Components/RightButton";
import CarouselDisplay from "./CarouselDisplay";
import CarouselIndicator from "./CarouselIndicator";
import { ProjectType } from "../data/projects";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { JavaScriptLogo, NodeLogo } from "../Components/SVGcomponents";

interface Props {
  project: ProjectType[];
  projectName: string;
  githubURL: string;
  hostedURL: string;
  secondGithub?: string;
}

export default function Carousel({
  project,
  projectName,
  githubURL,
  secondGithub,
  hostedURL,
}: Props) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentProject, setCurrentProject] = useState<number>(0);
  const [scrollSnapPoint, setScrollSnapPoint] = useState<number>(0);
  const [maxScrollWidth, setMaxScrollWidth] = useState<number>(0);

  function handleScroll(e: React.UIEvent<HTMLDivElement, UIEvent>) {
    const currentScrollPosition = (e.target as HTMLDivElement).scrollLeft;
    switch (true) {
      case currentScrollPosition < scrollSnapPoint:
        setCurrentProject(0);
        break;
      case currentScrollPosition < scrollSnapPoint * 2:
        setCurrentProject(1);
        break;
      case currentScrollPosition < scrollSnapPoint * 3:
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
    <section className=" grid grid-cols-11 my-4 py-4 rounded-xl bg-emerald-100 ">
      <div className="col-span-11 flex flex-col sm:flex-row place-self-center gap-2 ">
        <div className="flex items-center place-self-center gap-2 mx-4 text-emerald-800">
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
          <h3 className="  text-2xl font-bold place-self-center ml-4 bg-white border-2 border-emerald-800 rounded-lg px-2">
            {projectName}
          </h3>
        </div>
        <CarouselIndicator
          carouselRef={carouselRef}
          projects={project}
          scrollSnapPoint={scrollSnapPoint}
          currentProject={currentProject}
        />
        {/* <div>
          <JavaScriptLogo />
          <NodeLogo />
        </div> */}
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
