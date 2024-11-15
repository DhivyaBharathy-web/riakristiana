import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpeg";
import profilePic2 from "../../img/profile2.jpeg";
import profilePic3 from "../../img/profile3.jpeg";
import profilePic4 from "../../img/profile4.jpeg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Delhi Ganesh Thatha, your loving presence will forever be etched in our hearts. We remember your warm smile, witty jokes, and gentle guidance. Your storytelling sessions, traditional cooking, and festive celebrations created lifelong memories. Your teachings on kindness, compassion, and perseverance inspired us to be better individuals. Though you may be gone, your legacy lives on through us. We miss you dearly, Thatha.",
    },
    {
      img: profilePic2,
      review:
        "Puneeth Rajkumar, a Kannada cinema legend, will always be remembered for his brilliant acting, captivating smile, and kind heart. His legacy inspires and entertains us still.",
    },
    {
      img: profilePic3,
      review:
        "I'm grateful to have worked on the Pangachakasturi ad with the esteemed Ramya Krishnan ma'am. The shoot was a memorable experience, filled with laughter and warmth, thanks to her infectious smile and professionalism",
    },
    {
      img: profilePic4,
      review:
        "Grateful to have worked with the amazing Aalya Manasa ma'am on Sunlite Sunflower Oil! #SunliteSunflowerOil #AalyaManasa",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Capturing life's </span>
        <span>precious moments,</span>
        <span>one frame at a time.</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
