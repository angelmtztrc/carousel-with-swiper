import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Slider = ({}: SliderProps) => {
  return (
    <Swiper className="w-full" slidesPerView={2} spaceBetween={48}>
      <SwiperSlide>
        <p className="text-gray-400">Slide 1</p>
      </SwiperSlide>
      <SwiperSlide>
        <p className="text-gray-400">Slide 2</p>
      </SwiperSlide>
    </Swiper>
  );
};

type SliderProps = {};
