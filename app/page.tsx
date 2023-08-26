"use client";

import Image from "next/image";
import profilePic from "/images/profilepic.jpg";
import Socials from "./Components/Socials";

export default function Home() {
  return (
    <main className=" mx-4  mt-24 sm:mt-16 grid grid-cols-1 items-center  sm:grid-cols-2">
      <div className="flex flex-col mb-2  mx-4">
        <Image
          // className="rounded-full  w-auto 0 my-4 sm:max-h-[36rem] place-self-center object-contain"
          className="rounded-full  w-64 h-64 0 my-4 sm:max-h-[36rem] place-self-center object-cover"
          src={profilePic}
          priority={true}
          placeholder="blur"
          alt="Adam and his wife smiling along the coast of Crete"
        />

        <span className="font-extrabold text-red-600">
          CURRENTLY A WORK IN PROGRESS, MANY FEATURES ARE NOT YET IMPLEMENTED OR
          MAY CONTAIN BUGS.
        </span>
      </div>
      <article className="place-self-center p-4  mx-4 w-full h-full rounded-md bg-white dark:bg-black sm:mt-4">
        <div className="border-sky-600 border-b-2">
          <h2 className="text-2xl font-bold text-sky-700 dark:text-sky-500">
            Adam Saunders
          </h2>
          <h3 className="text-xl mb-2 font-bold  ">Software Developer</h3>
        </div>
        <p className="mt-2">
          Team-oriented problem-solver with a new found love for coding. Since
          completing the Northcoders software development bootcamp, I’ve found
          that I love how programming allows me to challenge myself and find new
          ways of approaching tasks. Changing careers from teaching to software
          development is a big jump, but it allows me to bring many skills I
          developed as a teacher to coding, such as communicating clearly and
          effectively, being reflective and building relationships.
        </p>
      </article>
      <Socials horizontal={true} />
    </main>
  );
}
