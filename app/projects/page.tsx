"use client";

import RightButton from "../Components/RightButton";
import LeftButton from "../Components/LeftButton";
import { useEffect, useRef, useState } from "react";
import { projects } from "../data/projects";
import Carousel from "./Carousel";
import CarouselIndicator from "./CarouselIndicator";

export default function CarouselPage() {
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
    <main className="mx-4 ">
      <h2 className="text-2xl mx-2 my-2 font-bold text-emerald-800">
        Projects
      </h2>
      <p className="mx-2 ">
        These are all the projects that I consider of a good enough standard to
        share and display. There are many mini-apps that I have also worked but,
        but I would like to revisit these before adding them to this list.
      </p>
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
    </main>
  );
}
