import {
  backEndTechs,
  frontEndTechs,
  languageArr,
  otherTechs,
} from "../data/technologies";
import TechSection from "./TechSection";

export default function SkillsPage() {
  return (
    <main className="m-2 mt-24 flex  flex-col sm:mt-16">
      <h2 className="m-2 text-2xl font-bold text-sky-700 dark:text-sky-500">
        Skills
      </h2>
      <p className="mx-2">
        This is a non-exhaustive list of technologies I have worked with in the
        past and have a good working knowledge of.
      </p>
      <div className="flex flex-col justify-center sm:flex-row ">
        <TechSection sectionName={"Languages"} techArray={languageArr} />
        <TechSection sectionName={"Other"} techArray={otherTechs} />
      </div>
      <div className="flex flex-col justify-center sm:flex-row ">
        <TechSection sectionName={"Front-End"} techArray={frontEndTechs} />
        <TechSection sectionName={"Back-End"} techArray={backEndTechs} />
      </div>
    </main>
  );
}
