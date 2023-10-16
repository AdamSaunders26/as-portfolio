import Image from "next/image";
import classroomToolkitImg from "../images/classroomToolkit-FP.png";
export default function FeaturedProject() {
  return (
    <article className=" col-span-3 mt-4 h-fit w-fit place-self-center rounded-md bg-white px-4 py-2 dark:bg-black">
      <h3 className="text-xl">
        Currently working on:{" "}
        <span className="text-sky-700 dark:text-sky-500">
          Classroom Toolkit
        </span>
      </h3>
      <div className="flex   flex-col gap-4 sm:flex-row ">
        <Image
          src={classroomToolkitImg}
          className="w-fit rounded-xl p-2 sm:max-h-[10rem] lg:max-h-[16rem]"
          priority={true}
          placeholder="blur"
          alt="A screenshot of the classes page on Classroom-toolkit.co.uk"
        />
        <div className="flex max-w-[30rem] flex-col justify-between">
          <p className="">
            Classroom Toolkit is a site aimed at teachers to help make their
            lives easier. It's build using Next.js and Typescript, using Next's
            API route handlers as the back-end API which is linked to a
            PostgreSQL database using Prisma. It currently only functions as a
            simple class manager. Next up will be a selection of customisable
            tracker which could be used for keeping track of which pupils have
            completed homework or as a behaviour record.
          </p>
          <button className="place-self-end rounded-md bg-sky-600 p-2 text-white ">
            Visit project page
          </button>
        </div>
      </div>
    </article>
  );
}
