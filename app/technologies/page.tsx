import { backEndTechs, frontEndTechs, languageArr } from "../data/technologies";
import TechSection from "./TechSection";

export default function TechnologiesPage() {
  return (
    <main className="flex flex-col m-2 text-neutral-700">
      <TechSection sectionName={"Languages"} techArray={languageArr} />
      <div className="flex ">
        <TechSection sectionName={"Front-End"} techArray={frontEndTechs} />
        <TechSection sectionName={"Back-End"} techArray={backEndTechs} />
      </div>
    </main>
  );
}
