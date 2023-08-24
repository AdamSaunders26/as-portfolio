import { StaticImageData } from "next/image";
import ncnews1 from "../../images/nc-news1.png";
import ncnews2 from "../../images/nc-news2.png";
import ncnews3 from "../../images/nc-news3.png";
import ncapi1 from "../../images/nc-api1.png";
import ncapi2 from "../../images/nc-api2.png";
import soundwaves1 from "../../images/soundwaves1.png";
import soundwaves2 from "../../images/soundwaves2.png";
import soundwaves3 from "../../images/soundwaves3.png";

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
  // {
  //   key: 2,
  //   project: "Mobile view",
  //   imageSrc: ncnews3,
  //   alt: "Three images of NC News as viewed from a mobile, showing the main article list and a detailed article view.",
  //   details:
  //     "This was the first time I used breakpoints to create a seperate mobile specific view. The project was designed with a mobile-first approach, so most of the content looks better on mobile and could use some refining on the desktop view. It was also challenging to ensure the content was still easily readable on a range of phone sizes.",
  // },
];

export const NCnewsAPI: ProjectType[] = [
  {
    key: 0,
    project: "/api endpoint",
    imageSrc: ncapi1,
    alt: "A view of all the /api endpoint on the NC News API.",
    details:
      "This was the first solo project I completed on the Northcoders bootcamp. Whilst it was very different working by myself after being used to paired programming, it was nice to be able to work at my own pace. The API has 14 endpoints currently, for a range of CRUD operations.",
  },
  {
    key: 1,
    project: "/api/articles endpoint",
    imageSrc: ncapi2,
    alt: "A view of the /api/articles endpoint, showing article details in JSON format.",
    details:
      "The API is linked to a PostgreSQL database and retreives data from four different tables, using joins when needed. It accepts queries for some of the GET endpoints and includes support for parametric endpoints as well. It was built using Jest to help with Test Driven Development, ensuring all endpoints work as expected for the front-end.",
  },
];

export const SoundWaves: ProjectType[] = [
  {
    key: 0,
    project: "Login Page",
    imageSrc: soundwaves1,
    alt: "The default screen of SoundWaves, showing users you can log in as.",
    details:
      "SoundWaves was the result of a group project. It's a social media style app which is almost a hybrid between Twitter (X) and Reddit with the major difference being that users post audio clips, or SoundWaves. As we only had two weeks to create a front and back end, we had to settle on pre-generated users as we didn't have time to implement authentication. Users can choose between different users before navigating using the hamburger menu. ",
  },
  {
    key: 1,
    project: "View/Submit Waves",
    imageSrc: soundwaves2,
    alt: "Screenshots of all waves, boards and new wave page",
    details:
      "We were encouraged to use new technologies for this task which made the project quite challenging! We decided to use Next.js and Typescript for the front-end. Typescript had a bit of a steep learning curve but we eventually got used to it and found it to be very useful at times. The Ocean displays all submitted waves but users can also visit specific boards for waves related to a given topic. Recording waves was one of our biggest challenges as we had to figure out a way to send the audio data into a back-end and then into an S3 bucket on Supabase.",
  },
  {
    key: 2,
    project: "Single Wave",
    imageSrc: soundwaves3,
    alt: "Screenshots of the single wave page, showing a transcipt and comments",
    details:
      "Another large challenge was ensuring the waves could be played continiously across the app. You can see a 'Now Playing' bar at the bottom which uses React Context to allow it to play audio seamlessly. We also wanted to ensure explicit waves were monitored, so we included transcription in our back-end which is then run against a filter to tag any waves which have explicit content",
  },
];
