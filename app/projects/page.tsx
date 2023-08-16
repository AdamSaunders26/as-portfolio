import Image from "next/image";
import { CarouselItem, Carousel } from "../Components/Carousel";
import ncnews from "../../images/ncnews-mockup.jpg";
import ProjectCarousel from "./ProjectCarousel";

export default function ProjectPage() {
  return (
    <main>
      <div>
        <ProjectCarousel />
      </div>
    </main>
  );
}
