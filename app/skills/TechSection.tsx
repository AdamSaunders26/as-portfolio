import React from "react";

interface Props {
  sectionName: string;
  techArray: [string, string, JSX.Element][];
}

export default function TechSection({ sectionName, techArray }: Props) {
  return (
    <section className="my-2 mx-2 p-2 rounded-md bg-white dark:bg-black flex-grow ">
      <h2 className="mx-2 font-semibold text-sky-700 dark:text-sky-500">
        {sectionName}
      </h2>
      <div className="flex flex-wrap justify-around">
        {techArray.map(([name, link, logo]) => {
          return (
            <React.Fragment key={link}>
              <a
                key={link}
                target="_blank"
                href={link}
                className="m-2 hover:scale-110 duration-200"
              >
                {logo}
                <p key={name} className="text-center">
                  {name}
                </p>
              </a>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
