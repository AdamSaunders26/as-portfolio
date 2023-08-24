"use client";

import Image from "next/image";
import profilePic from "/images/profilepic.jpg";

export default function Home() {
  return (
    <main className="mx-4  grid grid-cols-1 items-center  sm:grid-cols-2">
      <Image
        className="rounded-md max-w-[22rem] w-auto max-h-80 my-8 sm:max-h-[28rem] place-self-center object-contain"
        src={profilePic}
        priority={true}
        placeholder="blur"
        alt="Adam and his wife smiling along the coast of Crete"
      />
      <article className="place-self-center p-4  mx-4 rounded-md bg-emerald-100 sm:mt-4">
        <span className="font-extrabold text-red-600">
          CURRENTLY A WORK IN PROGRESS, MANY FEATURES ARE NOT YET IMPLEMENTED OR
          MAY CONTAIN BUGS.
        </span>
        Team-oriented problem-solver with a new found love for coding. Since
        completing the Northcoders software development bootcamp, I’ve found
        that I love how programming allows me to challenge myself and find new
        ways of approaching tasks. Changing careers from teaching to software
        development is a big jump, but it allows me to bring many skills I
        developed as a teacher to coding, such as communicating clearly and
        effectively, being reflective and building relationships.
      </article>
    </main>
  );
}
