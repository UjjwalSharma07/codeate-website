import React from "react";
// import "../Testimonials/Testimonial.css"
import { useState, useEffect } from "react";
import { Autoplay, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/home/Eventgallery.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";

const Frame = (props) => {
  return (
    <div className={`${styles.Frame}`}>
      <div className={`${styles.event_image}`}>
        <a href={props.href}>
          <img
            src={props.img}
            className={`${styles.img_fluid}`}
            alt="thumbnail"
          />
        </a>
      </div>
    </div>
  );
};
const data = [
  {
    href: "https://Codeate.ggeeks.me",
    // img: "https://github.com/KapadiaShubham/Codeate-media/blob/master/home/img/Event1.jpeg?raw=true"
    img: "/images/events/Event1.jpeg",
  },
  {
    href: "https://Codeate.ggeeks.me",
    img: "/images/events/Event2.jpeg",
  },
  {
    href: "https://Codeate.ggeeks.me",
    img: "/images/events/Event3.jpeg",
  },
  {
    href: "https://Codeate.ggeeks.me",
    img: "/images/events/Event4.jpeg",
  },
  {
    href: "https://Codeate.ggeeks.me",
    img: "/images/events/Event5.jpeg",
  },
  {
    href: "https://Codeate.ggeeks.me",
    img: "/images/events/Event6.jpeg",
  },
  {
    href: "https://Codeate.ggeeks.me",
    img: "/images/events/Event7.jpeg",
  },
];
const Eventgallery = () => {
  const [matches1500, setMatches1500] = useState();
  const [matches1300, setMatches1300] = useState();
  const [matches900, setMatches900] = useState();
  const [matches550, setMatches550] = useState();
  useEffect(() => {
    setMatches1500(window.matchMedia("(max-width: 1500px)").matches);
    setMatches1300(window.matchMedia("(max-width: 1300px)").matches);
    setMatches900(window.matchMedia("(max-width: 900px)").matches);
    setMatches550(window.matchMedia("(max-width: 550px)").matches);

    window
      .matchMedia("(max-width: 1500px)")
      .addEventListener("change", (e) => setMatches1500(e.matches));
    window
      .matchMedia("(max-width: 1300px)")
      .addEventListener("change", (e) => setMatches1300(e.matches));
    window
      .matchMedia("(max-width: 900px) and (min-width: 550px)")
      .addEventListener("change", (e) => setMatches900(e.matches));
    window
      .matchMedia("(max-width: 550px)")
      .addEventListener("change", (e) => setMatches550(e.matches));
  }, []);
  useEffect(() => {
    console.log(matches550, matches900, matches1300, matches1500);
  }, [matches550, matches900, matches1300, matches1500]);
  return (
    <div className={`${styles.Event_gallery}`}>
      <div>
        <h1 className="title text-5xl mb-10">Event Gallery</h1>
      </div>
      <div className={`${styles.galleryholder}`}>
        <Swiper
          modules={[Autoplay, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={
            !matches1500
              ? 5
              : !matches1300
              ? 4
              : !matches900 && !matches550
              ? 3
              : matches900
              ? 2
              : 1
          }
          navigation={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // autoplay={false}
          loop={true}
          pagination={{ clickable: true }}
          className={"mySwiper"}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide className="myswiperslide" key={index}>
                <Frame key={index} href={item.href} img={item.img} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Eventgallery;
