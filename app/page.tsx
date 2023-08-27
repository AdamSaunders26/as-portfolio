"use client";

import Image from "next/image";

import profilePic2 from "/images/profilePic2.jpg";
import Socials from "./Components/Socials";

export default function Home() {
  const punctuationClass = "text-base";
  const pronounClass = "text-base text-neutral-700 dark:text-neutral-200";
  return (
    <main className=" mx-4  mt-24 sm:mt-16 grid grid-cols-1 items-center  sm:grid-cols-2">
      <div className="flex flex-col mb-2  mx-4">
        <Image
          className="rounded-full  w-64 h-64 0 my-4 sm:max-h-[36rem] place-self-center object-cover"
          src={profilePic2}
          priority={true}
          placeholder="blur"
          alt="Adam smiling and looking into the camera"
        />
      </div>
      <article className="place-self-center p-4  mx-4 w-full h-full rounded-md bg-white dark:bg-black sm:mt-4">
        <div className="border-sky-600 border-b-2">
          <h2 className="text-2xl font-bold text-sky-700 dark:text-sky-500">
            Adam Saunders <span className={punctuationClass}>(</span>
            <span className={pronounClass}>he</span>
            <span className={punctuationClass}> / </span>
            <span className={pronounClass}>him</span>
            <span className={punctuationClass}>)</span>
          </h2>
          <h3 className="text-xl mb-2 font-bold  ">Software Developer</h3>
        </div>
        <p className="mt-2 pb-2 border-sky-600 border-b-2">
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
          Having trained as a primary school teacher and working with 30 small
          children each day, programming is a breath of fresh air. Although I
          have many fond memories of the classes I've taught and schools I've
          worked at, coding has gotten me excited to get out of bed in the
          mornings again. I love the constant battle between taking on tricky
          challenges and then actually finding solutions for them. This
          portfolio website is the first thing I have created since leaving the
          Northcoders course - I hope you enjoy browsing through the site.
          Please don't hesitate to get in touch if you have a great idea you'd
          like to collaborate on or if you think I'd be a good fit for a vacancy
          at your company.
        </p>
      </article>
      <Socials horizontal={true} cv={true} />
    </main>
  );
}
