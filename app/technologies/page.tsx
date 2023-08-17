import BackEnd from "./BackEnd";
import FrontEnd from "./FrontEnd";
import Languages from "./Languages";

export default function SkillsPage() {
  return (
    <main className="flex m-4 text-neutral-700">
      <FrontEnd />
      <div>
        <Languages />
        <BackEnd />
      </div>
    </main>
  );
}
