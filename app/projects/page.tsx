"use client";

import Carousel from "./Carousel";
import { NCnews, NCnewsAPI, Portfolio, SoundWaves } from "../data/projects";
import {
  NCnewsAPITech,
  NCnewsTech,
  PortfolioTech,
  soundWavesTech,
} from "../data/technologies";

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
      <Carousel
        project={SoundWaves}
        projectName="SoundWaves"
        githubURL="https://github.com/AdamSaunders26/as-front-end-sound-waves"
        secondGithub="https://github.com/AdamSaunders26/back-end-sound-waves"
        hostedURL="https://aa-sound-waves.vercel.app/"
        techArray={soundWavesTech}
      />
      <Carousel
        project={NCnews}
        projectName="NC News"
        githubURL="https://github.com/AdamSaunders26/fe-nc-news"
        hostedURL="https://adam-saunders-front-end-project.netlify.app/"
        techArray={NCnewsTech}
      />
      <Carousel
        project={NCnewsAPI}
        projectName="NC News API"
        githubURL="https://github.com/AdamSaunders26/nc-news-backendProject"
        hostedURL="https://nc-news-app.onrender.com/api"
        techArray={NCnewsAPITech}
      />
      <Carousel
        project={Portfolio}
        projectName="Portfolio"
        githubURL="https://github.com/AdamSaunders26/as-portfolio"
        hostedURL="https://www.adam-saunders.dev/"
        techArray={PortfolioTech}
      />
    </main>
  );
}
