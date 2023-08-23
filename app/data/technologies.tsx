import {
  AxiosLogo,
  CSSLogo,
  ExpressLogo,
  HTMLLogo,
  JavaScriptLogo,
  JestLogo,
  MiniAxiosLogo,
  MiniExpressLogo,
  NextLogo,
  NodeLogo,
  PostgreSQLLogo,
  ReactLogo,
  SupabaseLogo,
  TailwindLogo,
  TypeScriptLogo,
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
];

export const frontEndTechs: [string, string, JSX.Element][] = [
  ["React", "https://react.dev", <ReactLogo />],
  ["Next.js", "https://nextjs.org/", <NextLogo />],
  ["Tailwind CSS", "https://tailwindcss.com/", <TailwindLogo />],
  ["Axios", "https://axios-http.com/", <AxiosLogo />],
  ["HTML5", "https://en.wikipedia.org/wiki/HTML", <HTMLLogo />],
  ["CSS3", "https://en.wikipedia.org/wiki/CSS", <CSSLogo />],
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
  // <AxiosLogo isCarousel={true} />,
  <CSSLogo isCarousel={true} />,
];

export const soundWavesTech = [
  <TypeScriptLogo isCarousel={true} />,
  <NextLogo isCarousel={true} />,
  <ReactLogo isCarousel={true} />,
  <TailwindLogo isCarousel={true} />,
  // <MiniAxiosLogo isCarousel={true} />,
  <NodeLogo isCarousel={true} />,
  <MiniExpressLogo isCarousel={true} />,
  <SupabaseLogo isCarousel={true} />,
  <PostgreSQLLogo isCarousel={true} />,
  <JestLogo isCarousel={true} />,
];
