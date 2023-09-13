"use client";

import { ProjectType } from "@/app/data/projects";
import Image from "next/image";
import { useState } from "react";
import ImageModal from "../ImageModal";

export default function ProjectDetailsCard({ slide }: { slide: ProjectType }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div
      key={slide.key}
      className="  items-center rounded-md   p-4 lg:grid lg:grid-cols-3"
    >
      {modalOpen ? (
        <ImageModal
          imageSrc={slide.imageSrc}
          alt={slide.alt}
          setModalOpen={setModalOpen}
        />
      ) : null}
      <Image
        src={slide.imageSrc}
        alt={slide.alt}
        className="col-span-2  rounded-xl border-4 border-sky-600  hover:cursor-zoom-in"
        priority={true}
        placeholder="blur"
        onClick={() => {
          setModalOpen((curr) => !curr);
        }}
      />
      <article className="m-2 mt-4 rounded-md  bg-white px-4 py-2 text-xl dark:bg-black lg:ml-10 lg:mt-2">
        {slide.details}
      </article>
    </div>
  );
}
