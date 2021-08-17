import React from 'react';
import SwiperCore, { Autoplay, A11y } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

// components
import { SlideContent } from './SlideContent';
// interfaces
import { Person } from '../interfaces/person.interface';

SwiperCore.use([Autoplay, A11y]);

export const Slider = ({ people }: SliderProps) => {
  return (
    <Swiper
      className="w-full"
      loop={true}
      slidesPerView={2}
      spaceBetween={48}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {people.map(person => (
        <SwiperSlide key={person.id} className="h-full">
          <SlideContent person={person} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

type SliderProps = {
  people: Person[];
};

const defaultProps = {
  people: []
};

Slider.defaultProps = defaultProps;
