"use client";

import Image from "next/image";
import profilePic from "IMG_5173 - Low res.jpg";

export default function Home() {
  return (
    <main className="flex justify-around  grow-1 content-center items-center h-[80%] ">
      <Image
        className="rounded-xl max-w-sm w-auto max-h-[75%] object-contain border-black border-8"
        src={profilePic}
        // width={2316}
        // height={3088}
        alt="Adam and his wife smiling along the coast of Crete"
      />
      <article className="grow-3">
        <p> The all about me page!</p>
      </article>
    </main>
  );
}
