"use client";

import Image from "next/image";
import profilePic from "/images/profilepic.jpg";

export default function Home() {
  return (
    <main className="container mx-auto grid grid-cols-1 items-center  sm:grid-cols-2">
      <Image
        className="rounded-xl max-w-[22rem] w-auto max-h-80 my-8 sm:max-h-[28rem] place-self-center shadow-lg object-contain"
        src={profilePic}
        priority={true}
        placeholder="blur"
        alt="Adam and his wife smiling along the coast of Crete"
      />
      <article className="place-self-center p-4 mx-4 rounded-lg bg-emerald-100">
        Team-oriented problem-solver with a new found love for coding. Since
        joining the Northcoders software development bootcamp, I’ve found that I
        love how programming allows me to challenge myself and find new ways of
        approaching tasks. Changing careers from teaching to software
        development is a big jump, but it allows me to bring many skills I
        developed as a teacher to coding, such as communicating clearly and
        effectively, being reflective and building relationships.
      </article>
    </main>
  );
}
