import { StaticImageData } from "next/image";
import ncnews from "../../images/ncnews-mockup.jpg";

export interface ProjectType {
  key: number;
  project: string;
  imageSrc: StaticImageData;
  alt: string;
  details: string;
}
export const projects: ProjectType[] = [
  {
    key: 0,
    project: "NC News",
    imageSrc: ncnews,
    alt: "NC News website displayed on a laptop and phone",
    details:
      "0. NC News is a web app which utilises the backend API which I had already created at this point. It is an ongoing work in progress which is  still lacking some features I'd like to implement. There were many challenges that had to be faced in order to complete this task. Blah blah blah etc",
  },
  {
    key: 1,
    project: "NC News API",
    imageSrc: ncnews,
    alt: "NC News website displayed on a laptop and phone",
    details:
      "1. NC News is a web app which utilises the backend API which I had already created at this point. It is an ongoing work in progress which is  still lacking some features I'd like to implement. There were many challenges that had to be faced in order to complete this task. Blah blah blah etc",
  },
  {
    key: 2,
    project: "Soundwaves",
    imageSrc: ncnews,
    alt: "NC News website displayed on a laptop and phone",
    details:
      "2. NC News is a web app which utilises the backend API which I had already created at this point. It is an ongoing work in progress which is  still lacking some features I'd like to implement. There were many challenges that had to be faced in order to complete this task. Blah blah blah etc",
  },
  {
    key: 3,
    imageSrc: ncnews,
    project: "Portfolio",
    alt: "NC News website displayed on a laptop and phone",
    details:
      "3. NC News is a web app which utilises the backend API which I had already created at this point. It is an ongoing work in progress which is  still lacking some features I'd like to implement. There were many challenges that had to be faced in order to complete this task. Blah blah blah etc",
  },
];
