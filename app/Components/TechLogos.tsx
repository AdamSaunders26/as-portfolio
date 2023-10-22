import React from "react";

export default function TechLogos({
  techArray,
}: {
  techArray: (string | JSX.Element)[][];
}) {
  return techArray.map((logo, index) => {
    return (
      <div className="group relative" key={index}>
        {logo[1]}{" "}
        <div className="absolute m-2 w-max rounded-md border-2 border-sky-500 bg-white px-2 opacity-0 group-hover:opacity-100 dark:bg-black">
          {logo[0]}
        </div>
      </div>
    );
  });
}
