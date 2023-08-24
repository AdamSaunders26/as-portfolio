"use client";

import Carousel from "./Carousel";
import { NCnews, NCnewsAPI, SoundWaves } from "../data/projects";
import {
  NCnewsAPITech,
  NCnewsTech,
  soundWavesTech,
} from "../data/technologies";

export default function CarouselPage() {
  return (
    <main className="mx-4 sm:mx-0 mt-24 sm:mt-14">
      <h2 className="text-2xl mx-2 my-2 font-bold text-sky-700">Projects</h2>
      <p className="mx-2 ">
        These are all the projects that are complete enough to share and
        display. There are many mini-apps that I have also worked but, but I
        would like to revisit these before adding them to this list.
      </p>
      <Carousel
        project={NCnewsAPI}
        projectName="NC News API"
        githubURL="https://github.com/AdamSaunders26/nc-news-backendProject"
        hostedURL="https://nc-news-app.onrender.com/api"
        techArray={NCnewsAPITech}
      />
      <Carousel
        project={NCnews}
        projectName="NC News"
        githubURL="https://github.com/AdamSaunders26/fe-nc-news"
        hostedURL="https://adam-saunders-front-end-project.netlify.app/"
        techArray={NCnewsTech}
      />
      <Carousel
        project={SoundWaves}
        projectName="SoundWaves"
        githubURL="https://github.com/AdamSaunders26/as-front-end-sound-waves"
        secondGithub="https://github.com/AdamSaunders26/back-end-sound-waves"
        hostedURL="https://aa-sound-waves.vercel.app/"
        techArray={soundWavesTech}
      />
    </main>
  );
}
