"use client";
import Image from "next/image";
import ncnews from "../../images/ncnews-mockup.jpg";
import RightButton from "../Components/RightButton";
import LeftButton from "../Components/LeftButton";
import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";
import Carousel from "./Carousel";
import CarouselIndicator from "./CarouselIndicator";

export default function ProjectCarousel() {
  //   const projectClassName =
  //     "border-4 sm:border-blue-500 md:border-green-500 lg:border-violet-500 snap-center basis-1/4 shrink-0 relative mx-10";
  //   const projectDetailsClassName =
  //     "w-72 sm:w-[30rem] md:w-[36rem] lg:w-[50rem] p-4";

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
      setScrollSnapPoint(carouselRef.current.scrollWidth / 4);
    }
  }, []);

  return (
    <section className=" grid grid-cols-11 items-center ">
      <CarouselIndicator
        carouselRef={carouselRef}
        projects={projects}
        scrollSnapPoint={scrollSnapPoint}
        currentProject={currentProject}
      />
      <LeftButton
        carouselRef={carouselRef}
        setCurrentProject={setCurrentProject}
      />
      <Carousel
        carouselRef={carouselRef}
        projects={projects}
        handleScroll={handleScroll}
      />
      <RightButton
        carouselRef={carouselRef}
        setCurrentProject={setCurrentProject}
      />
    </section>
  );
}
