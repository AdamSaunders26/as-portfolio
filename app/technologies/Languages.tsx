import { JavaScriptLogo, TypeScriptLogo } from "../data/SVGcomponents";

export default function Languages() {
  return (
    <section className="border-4 ">
      <h2 className="mx-2 font-semibold text-emerald-800">Languages</h2>
      <div className="flex justify-around">
        <a
          target="_blank"
          href="https://en.wikipedia.org/wiki/JavaScript"
          className="m-2 hover:scale-110 duration-200"
        >
          <JavaScriptLogo />
          <p className="text-center">JavaScript</p>
        </a>
        <a
          target="_blank"
          href="https://www.typescriptlang.org/"
          className="m-2 hover:scale-110 duration-200"
        >
          <TypeScriptLogo />
          <p className="text-center">TypeScript</p>
        </a>
      </div>
    </section>
  );
}
