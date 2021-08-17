import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// components
import { SlideContent } from './SlideContent';
// interfaces
import { Person } from '../interfaces/person.interface';

export const Slider = ({ people }: SliderProps) => {
  return (
    <Swiper className="w-full" slidesPerView={2} spaceBetween={48}>
      {people.map(person => (
        <SwiperSlide key={person.id}>
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
