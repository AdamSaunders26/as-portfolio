import {
  ExpressLogo,
  JestLogo,
  NodeLogo,
  PostgreSQLLogo,
  SupabaseLogo,
} from "../data/SVGcomponents";

export default function BackEnd() {
  return (
    <section className=" border-4">
      <h2>Back-End</h2>
      <div className="flex flex-wrap justify-around">
        <NodeLogo />
        <ExpressLogo />
        <PostgreSQLLogo />
        <SupabaseLogo />
        <JestLogo />
      </div>
    </section>
  );
}
