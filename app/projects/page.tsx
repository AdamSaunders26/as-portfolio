"use client";

import Carousel from "./Carousel";
import { NCnews } from "../data/projects";

export default function CarouselPage() {
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
      <Carousel project={NCnews} projectName="NC News" />
    </main>
  );
}
