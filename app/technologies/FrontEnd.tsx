import {
  AxiosLogo,
  CSSLogo,
  HTMLLogo,
  NextLogo,
  ReactLogo,
  TailwindLogo,
} from "../data/SVGcomponents";

export default function FrontEnd() {
  return (
    <section className="border-4">
      <h2>Front-End</h2>
      <div className="flex flex-wrap justify-around ">
        <ReactLogo />
        <NextLogo />
        <TailwindLogo />
        <AxiosLogo />
        <HTMLLogo />
        <CSSLogo />
      </div>
    </section>
  );
}
