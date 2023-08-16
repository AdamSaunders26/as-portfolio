"use client";
import Image from "next/image";
import ncnews from "../../images/ncnews-mockup.jpg";
import RightButton from "../Components/RightButton";
import LeftButton from "../Components/LeftButton";
import { useRef } from "react";
import { projects } from "../data/projects";

export default function ProjectCarousel() {
  const projectClassName =
    "border-4 sm:border-blue-500 md:border-green-500 lg:border-violet-500 snap-center basis-1/4 shrink-0 relative mx-10";
  const projectDetailsClassName =
    "w-72 sm:w-[30rem] md:w-[36rem] lg:w-[50rem] p-4";
  const carouselRef = useRef<HTMLDivElement>(null);
  return (
    <section className="my-4 grid grid-cols-11 items-center ">
      <div className="flex justify-around mx-4 col-span-11 auto-cols-max">
        <p>NC News</p>
        <p>NC News Backend</p>
        <p>Soundwaves</p>
        <p>Portfolio</p>
      </div>
      <LeftButton carouselRef={carouselRef} />
      <div
        ref={carouselRef}
        className=" p-4 my-4 col-span-9 flex  overflow-x-scroll snap-mandatory snap-x scroll-smooth"
      >
        {projects.map(({ key, imageSrc, alt, details }) => {
          return (
            <div className={projectClassName} key={key}>
              <div className={projectDetailsClassName}>
                <Image className="p-4 " src={imageSrc} alt={alt} />
                <p className="">{details}</p>
              </div>
            </div>
          );
        })}
      </div>
      <RightButton carouselRef={carouselRef} />
    </section>
  );
}
