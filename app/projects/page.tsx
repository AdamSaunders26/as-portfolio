import Image from "next/image";
import { CarouselItem, Carousel } from "../Components/Carousel";
import ncnews from "../../images/ncnews-mockup.jpg";

export default function ProjectPage() {
  return (
    <main>
      <Carousel>
        <CarouselItem>
          <Image
            src={ncnews}
            alt="The NC-News website displayed on a laptop and phone"
          />
          <Image
            src={ncnews}
            alt="The2 NC-News website displayed on a laptop and phone"
          />
        </CarouselItem>
      </Carousel>
    </main>
  );
}
