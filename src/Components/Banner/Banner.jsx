"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";

const Banner = () => {
  return (
    <Swiper
      pagination={{ dynamicBullets: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      fadeEffect={{ crossFade: true }}
      modules={[Pagination, Autoplay, EffectFade]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Banner1></Banner1>
      </SwiperSlide>

      <SwiperSlide>
        <Banner2></Banner2>
      </SwiperSlide>

      <SwiperSlide>
        <Banner3></Banner3>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
