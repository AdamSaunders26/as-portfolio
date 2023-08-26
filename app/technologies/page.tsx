import { backEndTechs, frontEndTechs, languageArr } from "../data/technologies";
import TechSection from "./TechSection";

export default function TechnologiesPage() {
  return (
    <main className="flex flex-col m-2  mt-24 sm:mt-16">
      <h2 className="text-2xl m-2 font-bold text-sky-700 dark:text-sky-500">
        Technologies
      </h2>
      <p className="mx-2">
        This is a non-exhaustive list of technologies I have worked with in the
        past and have a good working knowledge of.
      </p>
      <TechSection sectionName={"Languages"} techArray={languageArr} />
      <div className="flex justify-center ">
        <TechSection sectionName={"Front-End"} techArray={frontEndTechs} />
        <TechSection sectionName={"Back-End"} techArray={backEndTechs} />
      </div>
    </main>
  );
}
