import { StaticImageData } from "next/image";
import ncnews1 from "../../images/nc-news1.png";
import ncnews2 from "../../images/nc-news2.png";
import ncnews3 from "../../images/nc-news3.png";
import ncapi1 from "../../images/nc-api1.png";
import ncapi2 from "../../images/nc-api2.png";
import soundwaves1 from "../../images/soundwaves1.png";
import soundwaves2 from "../../images/soundwaves2.png";
import soundwaves3 from "../../images/soundwaves3.png";
import portfolio1 from "../../images/portfolio1.png";
import portfolio2 from "../../images/portfolio2.png";
import portfolio3 from "../../images/portfolio3.png";
import appIdeaGenerator1 from "../../images/appIdeaGenerator1.png";
import appIdeaGenerator2 from "../../images/appIdeaGenerator2.png";
import appIdeaGenerator3 from "../../images/appIdeaGenerator3.png";
import classroomToolkit1 from "../../images/classroomtoolkit1.png";
import classroomToolkit2 from "../../images/classroomtoolkit2.png";
import {
  AppIdeaGeneratorTech,
  ClassroomToolkitTech,
  NCnewsAPITech,
  NCnewsTech,
  PortfolioTech,
  soundWavesTech,
} from "./technologies";

export interface ProjectType {
  key: number;
  slideName: string;
  imageSrc: StaticImageData;
  alt: string;
  details: string;
}

export const NCnews: ProjectType[] = [
  {
    key: 0,
    slideName: "All articles",
    imageSrc: ncnews1,
    alt: "A view of all the articles on NC News.",
    details:
      "NC News was the second main solo project I completed. It's a news viewing platform similar to Reddit. Users can view different posts and filter them by categories such as when they were posted and how many comments they have. I spent a lot of time styling this using pure CSS before I had discovered Tailwind but I was proud of how it turned out.",
  },
  {
    key: 1,
    slideName: "Article view",
    imageSrc: ncnews2,
    alt: "A detailed view of an articles about Node.js on NC News.",
    details:
      "I only had a week to create this project so time was very tight. Users are able to post comments and vote on articles but I would like to further extend this by allowing users to post their own articles and then view a profile page of all the articles they have posted. I would also love to add user account creation, potentially using Oauth2.",
  },
  {
    key: 2,
    slideName: "Mobile view",
    imageSrc: ncnews3,
    alt: "Three images of NC News as viewed from a mobile, showing the main article list and a detailed article view.",
    details:
      "This was the first time I used breakpoints to create a seperate mobile specific view. The project was designed with a mobile-first approach, so most of the content looks better on mobile and could use some refining on the desktop view. It was also challenging to ensure the content was still easily readable on a range of phone sizes.",
  },
];

export const NCnewsAPI: ProjectType[] = [
  {
    key: 0,
    slideName: "/api endpoint",
    imageSrc: ncapi1,
    alt: "A view of all the /api endpoint on the NC News API.",
    details:
      "This was the first solo project I completed on the Northcoders bootcamp. Whilst it was very different working by myself after being used to paired programming, it was nice to be able to work at my own pace. The API has 14 endpoints currently, for a range of CRUD operations.",
  },
  {
    key: 1,
    slideName: "/api/articles endpoint",
    imageSrc: ncapi2,
    alt: "A view of the /api/articles endpoint, showing article details in JSON format.",
    details:
      "The API is linked to a PostgreSQL database and retreives data from four different tables, using joins when needed. It accepts queries for some of the GET endpoints and includes support for parametric endpoints as well. It was built using Jest to help with Test Driven Development, ensuring all endpoints work as expected for the front-end.",
  },
];

export const SoundWaves: ProjectType[] = [
  {
    key: 0,
    slideName: "Login Page",
    imageSrc: soundwaves1,
    alt: "The default screen of SoundWaves, showing users you can log in as.",
    details:
      "SoundWaves was the result of a group project. It's a social media style app which is almost a hybrid between Twitter (X) and Reddit with the major difference being that users post audio clips, or SoundWaves. As we only had two weeks to create a front and back end, we had to settle on pre-generated users as we didn't have time to implement authentication. Users can choose between different users before navigating using the hamburger menu. ",
  },
  {
    key: 1,
    slideName: "View/Submit Waves",
    imageSrc: soundwaves2,
    alt: "Screenshots of all waves, boards and new wave page",
    details:
      "We were encouraged to use new technologies for this task which made the project quite challenging! We decided to use Next.js and Typescript for the front-end. Typescript had a bit of a steep learning curve but we eventually got used to it and found it to be very useful at times. The Ocean displays all submitted waves but users can also visit specific boards for waves related to a given topic. Recording waves was one of our biggest challenges as we had to figure out a way to send the audio data into a back-end and then into an S3 bucket on Supabase.",
  },
  {
    key: 2,
    slideName: "Single Wave",
    imageSrc: soundwaves3,
    alt: "Screenshots of the single wave page, showing a transcipt and comments",
    details:
      "Another large challenge was ensuring the waves could be played continuously across the app. You can see a 'Now Playing' bar at the bottom which uses React Context to allow it to play audio seamlessly. We also wanted to ensure explicit waves were monitored, so we included transcription in our back-end which is then run against a filter to tag any waves which have explicit content",
  },
];

export const Portfolio: ProjectType[] = [
  {
    key: 0,
    slideName: "About",
    imageSrc: portfolio1,
    alt: "The about screen of adam-saunders.dev, there is a picture of Adam next to a short bio.",
    details:
      "This website is the latest thing I've created! It features support for different screen sizes and includes an automatic dark/light mode which can be toggled manually as well. I wanted to carry on with Next.js and Typescript as I had found it to be a good combination whilst working on SoundWaves. I spent quite a bit of time on styling the site before settling on the blue accented theme. Tailwind made it very easy to style this effectively and I really like how all the styling is right next to the components themselves.",
  },
  {
    key: 1,
    slideName: "Projects",
    imageSrc: portfolio2,
    alt: "Screenshot of the projects page, showing the several projects",
    details:
      "The carousel I used to display the project images was probably the most challenging section of the site as I didn't want to use a package like Swiper because it felt like something I could do myself and I wanted to test my abilities. I had already used the useRef hook for audio in SoundWaves so it was fairly easy to use it for the scroll bar here. Then it was simply a combination of flex and grid along with overflow and fixed positioning for the different slides. However, creating an indicator/selector proved tricky as different screen sizes scroll different amounts and it wasn't as simple as dividng the maximum scroll width by the number of slides.",
  },
  {
    key: 2,
    slideName: "Contact Form",
    imageSrc: portfolio3,
    alt: "Screen shot of the contact form, with some links to different sites on the left.",
    details:
      "This was one of the only sections I used a package for, SendGrid, to handle the emails. I also put a lot of time into validating the different inputs and making sure the user was provided enough feedback to understand what was required. I was also keen to ensure there was a sumbiting state and success message to ensure users would know that their message had been delivered successfully. I also wanted to make sure there was feedback for any submission errors that may occur as well.",
  },
];

export const AppIdeaGenerator: ProjectType[] = [
  {
    key: 0,
    slideName: "Generating",
    imageSrc: appIdeaGenerator1,
    alt: "Home page, generating page and idea list page of App Idea Generator",
    details:
      "For this project, I wanted to branch out into a different techonology - React Native. It was more different from React than I'd expected and simple things like styling text had to be done quite differently. However, Expo made it easy to test the prototype on my phone and I was able to get Tailwind (Nativewind) running to help me style the app. The way the app works, is that the user provides a focus for the ideas, such as music or engineering etc as well as a key feature and skill level. 5 ideas are then generated from these. If the text inputs are left blank, a random selection will be given.",
  },
  {
    key: 1,
    slideName: "Idea Lists",
    imageSrc: appIdeaGenerator2,
    alt: "Home page, idea list page and idea details page of App Idea Generator for art app ideas.",
    details:
      "To actually generate the ideas, OpenAI's GPT-3.5 model is used. A detailed prompt is sent to their API which returns an array of ideas, including the icons that can been seen on the Idea List. It took a little while to finetune the prompt to ensure consistency and reliablity for the response. Sometimes an invalid icon is provided which goes to a generic question mark as a fall back.",
  },
  {
    key: 2,
    slideName: "Idea Description",
    imageSrc: appIdeaGenerator3,
    alt: "Home page, idea list page and idea details page of App Idea Generator for video app ideas.",
    details:
      "OpenAI's GPT model is very capable and will generate ideas around almost any theme, including popular media or specific technologies. If I was to develop this project further, I would like to implement a list of favourited ideas that the user can view at a later time and share functionality where the user could send an idea to a friend or colleague.",
  },
];

export const ClassroomToolkit: ProjectType[] = [
  {
    key: 0,
    slideName: "Class Manager",
    imageSrc: classroomToolkit1,
    alt: "The class manager view of Classroom Toolkit",
    details:
      "Classroom Toolkit primarily funcations as a class manager because many other planned features will rely upon having a class of students to use. Children can be added to classes on at a time or a class list can be pasted in for convenience. The entire site is built with Next.js and uses route handlers to act as a backend API to integrate with a PostgreSQL database where students and classes are stored. ",
  },
  {
    key: 1,
    slideName: "Upcoming features",
    imageSrc: classroomToolkit2,
    alt: "A picture saying 'planned features'",
    details:
      "I have many features planned which I would like to implement with Classroom Toolkit. This includes a seating planner tool, timetable builder, tracking systems as well as more generic tools such as name randomisers and timers.",
  },
];

export interface ProjectOverviewType {
  project: ProjectType[];
  projectName: string;
  slug: string;
  githubURL: string;
  secondGithub?: string;
  hostedURL?: string;
  techArray: (string | JSX.Element)[][];
}

export const allProjects: ProjectOverviewType[] = [
  {
    project: ClassroomToolkit,
    projectName: "Classroom Toolkit",
    slug: "classroom-toolkit",
    githubURL: "https://github.com/AdamSaunders26/Classroom-toolkit/tree/main",
    hostedURL: "https://www.classroom-toolkit.co.uk/",
    techArray: ClassroomToolkitTech,
  },
  {
    project: SoundWaves,
    projectName: "SoundWaves",
    slug: "soundwaves",
    githubURL: "https://github.com/AdamSaunders26/as-front-end-sound-waves",
    secondGithub: "https://github.com/AdamSaunders26/back-end-sound-waves",
    hostedURL: "https://aa-sound-waves.vercel.app/",
    techArray: soundWavesTech,
  },
  {
    project: AppIdeaGenerator,
    projectName: "App Idea Gen",
    slug: "app-idea-generator",
    githubURL: "https://github.com/AdamSaunders26/IdeaGenerator",
    techArray: AppIdeaGeneratorTech,
  },
  {
    project: NCnews,
    projectName: "NC News",
    slug: "nc-news",
    githubURL: "https://github.com/AdamSaunders26/fe-nc-news",
    hostedURL: "https://adam-saunders-front-end-project.netlify.app/",
    techArray: NCnewsTech,
  },
  {
    project: NCnewsAPI,
    projectName: "NC News API",
    slug: "nc-news-api",
    githubURL: "https://github.com/AdamSaunders26/nc-news-backendProject",
    hostedURL: "https://nc-news-app.onrender.com/api",
    techArray: NCnewsAPITech,
  },
  {
    project: Portfolio,
    projectName: "Portfolio",
    slug: "portfolio",
    githubURL: "https://github.com/AdamSaunders26/as-portfolio",
    hostedURL: "https://www.adam-saunders.dev/",
    techArray: PortfolioTech,
  },
];
