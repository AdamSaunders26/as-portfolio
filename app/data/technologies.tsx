import { AiFillGithub } from "react-icons/ai";
import {
  AxiosLogo,
  CSSLogo,
  ExpoLogo,
  ExpressLogo,
  GithubLogo,
  HTMLLogo,
  JavaScriptLogo,
  JestLogo,
  MiniAxiosLogo,
  MiniExpressLogo,
  NextAuthLogo,
  NextLogo,
  NodeLogo,
  OpenAiLogo,
  PostgreSQLLogo,
  PrismaLogo,
  ReactLogo,
  ReactNativeLogo,
  ShadcnLogo,
  SupabaseLogo,
  TailwindLogo,
  TypeScriptLogo,
  ZodLogo,
} from "../Components/SVGcomponents";

export const languageArr: [string, string, JSX.Element][] = [
  [
    "JavaScript",
    "https://en.wikipedia.org/wiki/JavaScript",
    <JavaScriptLogo />,
  ],
  ["TypeScript", "https://www.typescriptlang.org/", <TypeScriptLogo />],
];

export const backEndTechs: [string, string, JSX.Element][] = [
  ["Node.js", "https://nodejs.org/en", <NodeLogo />],
  ["Express", "https://expressjs.com/", <ExpressLogo />],
  ["PostgreSQL", "https://www.postgresql.org/", <PostgreSQLLogo />],
  ["Supabase", "https://supabase.com/", <SupabaseLogo />],
  ["Jest", "https://jestjs.io/", <JestLogo />],
  ["Prisma", "https://www.prisma.io/", <PrismaLogo />],
];

export const frontEndTechs: [string, string, JSX.Element][] = [
  ["React", "https://react.dev", <ReactLogo />],
  ["React Native", "https://reactnative.dev", <ReactLogo />],
  ["Next.js", "https://nextjs.org/", <NextLogo />],
  ["Tailwind CSS", "https://tailwindcss.com/", <TailwindLogo />],
  ["Axios", "https://axios-http.com/", <AxiosLogo />],
  ["HTML 5", "https://en.wikipedia.org/wiki/HTML", <HTMLLogo />],
  ["CSS 3", "https://en.wikipedia.org/wiki/CSS", <CSSLogo />],
  ["Next-Auth", "https://next-auth.js.org/", <NextAuthLogo />],
  ["Shadcn UI", "https://ui.shadcn.com/", <ShadcnLogo />],
  ["Zod", "https://zod.dev/", <ZodLogo />],
];

export const otherTechs: [string, string, JSX.Element][] = [
  ["Github", "https://github.com/", <GithubLogo />],
  ["Expo", "https://expo.dev/", <ExpoLogo />],
  ["OpenAI", "https://openai.com/", <OpenAiLogo />],
];
export const NCnewsAPITech = [
  <JavaScriptLogo isCarousel={true} />,
  <NodeLogo isCarousel={true} />,
  <MiniExpressLogo isCarousel={true} />,
  <PostgreSQLLogo isCarousel={true} />,
  <JestLogo isCarousel={true} />,
];

export const NCnewsTech = [
  <JavaScriptLogo isCarousel={true} />,
  <ReactLogo isCarousel={true} />,
  <CSSLogo isCarousel={true} />,
];

export const soundWavesTech = [
  <TypeScriptLogo isCarousel={true} />,
  <NextLogo isCarousel={true} />,
  <ReactLogo isCarousel={true} />,
  <TailwindLogo isCarousel={true} />,
  <NodeLogo isCarousel={true} />,
  <MiniExpressLogo isCarousel={true} />,
  <SupabaseLogo isCarousel={true} />,
  <PostgreSQLLogo isCarousel={true} />,
  <JestLogo isCarousel={true} />,
];

export const PortfolioTech = [
  <TypeScriptLogo isCarousel={true} />,
  <NextLogo isCarousel={true} />,
  <ReactLogo isCarousel={true} />,
  <TailwindLogo isCarousel={true} />,
];

export const AppIdeaGeneratorTech = [
  <TypeScriptLogo isCarousel={true} />,
  <ReactNativeLogo isCarousel={true} />,
  <TailwindLogo isCarousel={true} />,
  <ExpoLogo isCarousel={true} />,
  <OpenAiLogo isCarousel={true} />,
];
export const ClassroomToolkitTech = [
  <TypeScriptLogo isCarousel={true} />,
  <NextLogo isCarousel={true} />,
  <ReactLogo isCarousel={true} />,
  <TailwindLogo isCarousel={true} />,
  <PrismaLogo isCarousel={true} />,
  <ZodLogo isCarousel={true} />,
  <ShadcnLogo isCarousel={true} />,
  <NextAuthLogo isCarousel={true} />,
];
