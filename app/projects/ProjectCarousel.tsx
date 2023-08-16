"use client";
import Image from "next/image";
import ncnews from "../../images/ncnews-mockup.jpg";
import RightButton from "../Components/RightButton";
import LeftButton from "../Components/LeftButton";
import Link from "next/link";
import { useRef } from "react";

export default function ProjectCarousel() {
  const projectClassName =
    "border-4 sm:border-blue-500 md:border-green-500 lg:border-violet-500 snap-center basis-1/4 shrink-0 relative mx-10";
  const projectDetailsClassName =
    "w-72 sm:w-[30rem] md:w-[38rem] lg:w-[50rem] p-4";
  const carouselRef = useRef();
  return (
    <section className="my-4 grid grid-cols-11 items-center ">
      <div className="flex justify-around mx-4 col-span-11 auto-cols-max">
        <p>NC News</p>
        <p>NC News Backend</p>
        <p>Soundwaves</p>
        <p>Portfolio</p>
      </div>
      <div className="place-self-center text-emerald-800">
        <LeftButton carouselRef={carouselRef} />
      </div>
      <div
        ref={carouselRef}
        className=" p-4 my-4 col-span-9 flex  overflow-x-scroll   snap-mandatory snap-x "
      >
        <div className={projectClassName} id="project-1">
          <div className={projectDetailsClassName}>
            <Image
              className="p-4 "
              src={ncnews}
              alt="NC News website displayed on a laptop and phone"
            />
            <p className="">
              0. NC News is a utilies the backend API which I had alreayd
              created at thsi point. It is an ongoing work in progress which is
              still lacking some features I'd like to implement. There were many
              challenges that had to be faced in order to complete this task.
            </p>
          </div>
        </div>
        <div className={projectClassName} id="project-2">
          <div className={projectDetailsClassName}>
            <Image
              className="p-4 "
              src={ncnews}
              alt="NC News website displayed on a laptop and phone"
            />
            <p className="">
              1. NC News is a utilies the backend API which I had alreayd
              created at thsi point. It is an ongoing work in progress which is
              still lacking some features I'd like to implement. There were many
              challenges that had to be faced in order to complete this task.
            </p>
          </div>
        </div>
      </div>
      <div className="place-self-center text-emerald-800">
        <RightButton carouselRef={carouselRef} />
      </div>
    </section>
  );
}
