interface Props {
  sectionName: string;
  techArray: [string, string, JSX.Element][];
}

export default function TechSection({ sectionName, techArray }: Props) {
  return (
    <section className="my-2 mx-2 p-2 rounded-lg bg-emerald-100">
      <h2 className="mx-2 font-semibold text-emerald-800">{sectionName}</h2>
      <div className="flex flex-wrap justify-around">
        {techArray.map(([name, link, logo]) => {
          return (
            <a
              target="_blank"
              href={link}
              className="m-2 hover:scale-110 duration-200"
            >
              {logo}
              <p className="text-center">{name}</p>
            </a>
          );
        })}
      </div>
    </section>
  );
}
