import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import SLIDE_DATA from "../../data/slide.data";

const HomeSlide = () => {
  const swiperOptions = {
    navigation: true,
    modules: [Navigation, Autoplay],
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
  };

  return (
    <div className="home-slide">
      <Swiper {...swiperOptions} className="home-slide-swiper">
        {SLIDE_DATA.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="home-slide-swiper-content">
                    <h4>{data.slide_title}</h4>
                    <h1>{data.slide_header}</h1>
                   
                  </div>
                </div>

                <div className="col-lg-6">
                  <img src={data.slide_img} alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlide;
