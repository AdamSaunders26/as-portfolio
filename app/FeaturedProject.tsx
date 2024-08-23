import Image from "next/image";
import classroomToolkitImg from "../images/classroomtoolkit1.png";
import bcatImg from "../images/bcat2.png";
import Link from "next/link";
export default function FeaturedProject() {
  return (
    <article className=" sn:py-4 col-span-3 mt-4 h-fit w-fit place-self-center rounded-md bg-white px-4 py-2 dark:bg-black">
      <h3 className="text-2xl ">
        Currently working on:{"  "}
        <span className="font-bold text-sky-700 dark:text-sky-500">
          Band Coach Arranger Tool
        </span>
      </h3>
      <div className="flex items-center gap-2 justify-between flex-col  sm:flex-row ">
        <Image
          src={bcatImg}
          className="   rounded-xl p-2 sm:max-h-[10rem] sm:w-[60%] sm:pr-4 lg:max-h-fit"
          priority={true}
          placeholder="blur"
          alt="A screenshot of the classes page on Classroom-toolkit.co.uk"
        />
        <div className="flex  sm:pt-4 flex-col justify-between">
          <p className="">
            The Band Coach Arranger Tool is a fairly niche app to help musicians
            or music teachers record different sections of song arrangements. It
            allows users to create multiple different sections for songs and
            includes: an area for different rhythms, an area to record chord
            inversions and an area to record different drum beats. It has been
            designed as a{" "}
            <a
              className="text-sky-600 hover:underline"
              target="_blank"
              href="https://en.wikipedia.org/wiki/Progressive_web_app"
            >
              Progressive Web App
            </a>{" "}
            to ensure that it can easily be accessed on work devices and will
            store data regardless of web connectivity.
          </p>
          <Link
            className="my-2 place-self-end rounded-md bg-sky-600 p-2 text-white "
            href={"/projects/bcat"}
          >
            Visit project page
          </Link>
        </div>
      </div>
    </article>
  );
}
