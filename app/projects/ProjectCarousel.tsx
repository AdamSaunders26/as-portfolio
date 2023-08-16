import Image from "next/image";
import ncnews from "../../images/ncnews-mockup.jpg";
import RightButton from "../Components/RightButton";
import LeftButton from "../Components/LeftButton";

export default function ProjectCarousel() {
  return (
    <section className="my-4 grid grid-cols-11 items-center ">
      <div className="flex justify-around mx-4 col-span-11 auto-cols-max">
        <p>NC News</p>
        <p>NC News Backend</p>
        <p>Soundwaves</p>
        <p>Portfolio</p>
      </div>
      <div className="place-self-center text-emerald-800">
        <LeftButton />
      </div>
      <div className=" p-4 my-4 col-span-9 flex overflow-auto">
        <div className="border-4 border-blue-500">
          <Image
            className="p-4"
            src={ncnews}
            alt="NC News website displayed on a laptop and phone"
          />
          <p>
            NC News is a utilies the backend API which I had alreayd created at
            thsi point. It is an ongoing work in progress which is still lacking
            some features I'd like to implement. There were many challenges that
            had to be faced in order to complete this task.
          </p>
        </div>
        <div className="border-4 border-red-500">
          <Image
            className="p-4"
            src={ncnews}
            alt="NC News website displayed on a laptop and phone"
          />
          <p>
            NC News is a utilies the backend API which I had alreayd created at
            thsi point. It is an ongoing work in progress which is still lacking
            some features I'd like to implement. There were many challenges that
            had to be faced in order to complete this task.
          </p>
        </div>
      </div>
      <div className="place-self-center text-emerald-800">
        <RightButton />
      </div>
    </section>
  );
}
