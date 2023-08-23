import { StaticImageData } from "next/image";
import ncnews from "../../images/ncnews-mockup.jpg";
import nc_news from "../../images/nc-news-mockup.png";
import ncnews1 from "../../images/nc-news1.png";
import ncnews2 from "../../images/nc-news2.png";
import ncnews3 from "../../images/nc-news3.png";

export interface ProjectType {
  key: number;
  project: string;
  imageSrc: StaticImageData;
  alt: string;
  details: string;
}

export const NCnews: ProjectType[] = [
  {
    key: 0,
    project: "All articles",
    imageSrc: ncnews1,
    alt: "A view of all the articles on NC News.",
    details:
      "NC News was the second main solo project I completed. It's a news viewing platform similar to Reddit. Users can view different posts and filter them by categories such as when they were posted and how many comments they have. I spent a lot of time styling this using pure CSS before I had discovered Tailwind but I was proud of how it turned out.",
  },
  {
    key: 1,
    project: "Article view",
    imageSrc: ncnews2,
    alt: "A detailed view of an articles about Node.js on NC News.",
    details:
      "I only had a week to create this project so time was very tight. Users are able to post comments and vote on articles but I would like to further extend this by allowing users to post their own articles and then view a profile page of all the articles they have posted. I would also love to add user account creation, potentially using Oauth2.",
  },
  {
    key: 2,
    project: "Mobile view",
    imageSrc: ncnews3,
    alt: "Three images of NC News as viewed from a mobile, showing the main article list and a detailed article view.",
    details:
      "This was the first time I used breakpoints to create a seperate mobile specific view. The project was designed with a mobile-first approach, so most of the content looks better on mobile and could use some refining on the desktop view. It was also challenging to ensure the content was still easily readable on a range of phone sizes.",
  },
];
