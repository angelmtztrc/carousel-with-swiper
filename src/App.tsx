import React from 'react';

import { Slider } from './components/Slider';

export const App = () => {
  return (
    <div className="bg-gray-900">
      <div className="flex items-center justify-center min-h-screen">
        <div className="container mx-auto">
          <h1 className="mb-12 text-center text-white text-4xl font-medium">
            Testimonials
          </h1>
          <Slider />
        </div>
      </div>
    </div>
  );
};
