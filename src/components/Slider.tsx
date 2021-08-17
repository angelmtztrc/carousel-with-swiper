import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SlideContent } from './SlideContent';

export const Slider = ({}: SliderProps) => {
  return (
    <Swiper className="w-full" slidesPerView={2} spaceBetween={48}>
      <SwiperSlide>
        <SlideContent />
      </SwiperSlide>
      <SwiperSlide>
        <SlideContent />
      </SwiperSlide>
      <SwiperSlide>
        <SlideContent />
      </SwiperSlide>
    </Swiper>
  );
};

type SliderProps = {};
