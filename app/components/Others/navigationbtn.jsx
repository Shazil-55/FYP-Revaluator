// NavigationButtons Component
import React from 'react';

const NavigationButtons = ({ onNext, onPrev }) => {
  return (
    <div className="p-4flex items-center justify-center rounded-lg">
      <button onClick={onPrev} className="px-8 py-1 bg-white border-blue-500 border-2 text-blue-500 rounded-md mr-2 hover:bg-blue-500 hover:text-white">
        Prev
      </button>
      <button className="px-8 py-1 bg-green-500 text-white rounded-md mr-2 hover:bg-white hover:border-green-500 border-2 hover:text-green-500">
        Save
      </button>
      <button onClick={onNext} className="px-8 py-1 bg-white border-blue-500 border-2 text-blue-500 rounded-md mr-2 hover:bg-blue-500 hover:text-white">
        Next
      </button>
    </div>
  );
};

export default NavigationButtons;
