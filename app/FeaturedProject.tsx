import Image from "next/image";
import classroomToolkitImg from "../images/classroomToolkit-FP.png";
export default function FeaturedProject() {
  return (
    <article className=" mt-4 h-fit rounded-md px-4 py-2 dark:bg-black">
      <h3 className="text-xl">
        Currently working on:{" "}
        <span className="text-sky-700 dark:text-sky-500">
          Classroom Toolkit
        </span>
      </h3>
      <div className="flex  gap-4 ">
        <Image
          src={classroomToolkitImg}
          className="max-h-[16rem] w-fit rounded-xl p-2"
          priority={true}
          placeholder="blur"
          alt="A screenshot of the classes page on Classroom-toolkit.co.uk"
        />
        <p>
          Classroom Toolkit is a site aimed at teachers to help make their lives
          easier. It's build using Next.js and Typescript, using Next's API
          route handlers as the back-end API which is linked to a PostgreSQL
          database using Prisma. It currently only functions as a simple class
          manager. Next up will be a selection of customisable tracker which
          could be used for keepinb track of which pupils have completed
          homework or as a behaviour record.
        </p>
      </div>
    </article>
  );
}
