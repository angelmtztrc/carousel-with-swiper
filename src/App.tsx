import React from 'react';

// api
import data from './api/data.json';
// components
import { Slider } from './components/Slider';
// interfaces
import { Person } from './interfaces/person.interface';

export const App = () => {
  const people: Person[] = data;

  return (
    <div className="bg-gray-900">
      <div className="flex items-center justify-center min-h-screen">
        <div className="container mx-auto">
          <h1 className="mb-12 text-center text-white text-4xl font-medium">
            Testimonials
          </h1>
          <Slider people={people} />
        </div>
      </div>
    </div>
  );
};
