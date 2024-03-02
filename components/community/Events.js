import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import {
  event1,
  event2,
  event3,
  event4,
  event5,
  event6,
  event7,
} from "./EventImage";

function Events() {
  const events = [
    {
      image: event1,
    },
    {
      image: event2,
    },
    {
      image: event3,
    },
    {
      image: event4,
    },
    {
      image: event5,
    },
    {
      image: event6,
    },
    {
      image: event7,
    },
  ];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="my-5">
      <h1 className="title text-5xl my-20">Happenings</h1>

      <div className="features-carousel">
        <Carousel
          responsive={responsive}
          ssr
          showDots={false}          
          autoPlay
          infinite={true}
          slidesToSlide={1}
          
          itemClass="image-item"
          deviceType={""}
          centerMode={true}
        >
          {events.map((image) => {
            return <Image key={image} src={image.image} alt={image} height={330} width={330} />;
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Events;
