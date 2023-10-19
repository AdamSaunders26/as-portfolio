"use client";

import Image from "next/image";

import profilePic2 from "/images/profilePic2.jpg";
import Socials from "./Components/Socials";
import Pronouns from "./(app)/Pronouns";
import FeaturedProject from "./FeaturedProject";

export default function Home() {
  return (
    <main className=" mx-4  mt-24 flex h-full flex-col items-center sm:mt-16  sm:grid  sm:grid-cols-3 ">
      <div className="mx-4 mb-2 flex  flex-col">
        <Image
          className="  my-4 h-64 w-64 place-self-center rounded-full object-cover sm:max-h-[36rem]"
          src={profilePic2}
          priority={true}
          placeholder="blur"
          alt="Adam smiling and looking into the camera"
        />
      </div>
      <article className="col-span-2 mt-4 flex h-max w-full flex-col justify-center place-self-center rounded-md bg-white px-4 py-2 dark:bg-black sm:mt-4">
        <div className="border-b-2 border-sky-600">
          <h2 className="text-2xl font-bold text-sky-700 dark:text-sky-500">
            Adam Saunders <Pronouns subject="he" object="him" />
          </h2>
          <h3 className="mb-2 text-xl font-bold  ">Software Developer</h3>
        </div>
        <p className="mt-2 border-b-2 border-sky-600 pb-2">
          Recent{" "}
          <a
            className="text-sky-700 dark:text-sky-500 "
            target="_blank"
            href="https://northcoders.com/"
          >
            Northcoders
          </a>{" "}
          graduate coding in JavaScript who enjoys working in a team and solving
          problems through code.
        </p>
        <p className="mt-2">
          After having trained as a primary school teacher and working with 30
          excitable children each day, programming is a breath of fresh air.
          Although I have many fond memories of the classes I've taught and
          schools I've worked at, coding has gotten me excited to get out of bed
          in the mornings again. I love the constant battle between taking on
          tricky challenges and then actually finding solutions for them. This
          portfolio website is the first thing I have created since leaving the
          Northcoders course - I hope you enjoy browsing through the site.
          Please don't hesitate to get in touch if you have a great idea you'd
          like to collaborate on or if you think I'd be a good fit for a vacancy
          at your company.
        </p>
      </article>
      <FeaturedProject />
      <Socials horizontal={true} cv={true} />
    </main>
  );
}
