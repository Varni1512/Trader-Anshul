
import React from 'react';

function RecapCard({ title, description, rate, image }) {
  return (
    <div className="bg-white rounded-lg shadow p-4  transition-transform duration-300">
      {image ? (
        <img
          src={image}
          alt={title}
          className="h-40 w-full object-cover rounded mb-4"
        />
      ) : (
        <div className="h-40 bg-gray-100 rounded mb-4"></div>
      )}
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-[18px] text-gray-600 mb-2">{description}</p>
      <div className="flex justify-between items-center text-sm mt-2 text-[#2C5530]">
        <p className="font-normal text-gray-500">Success Rate: {rate}</p>
        <a
          href="#"
          className="text-green-700 font-medium hover:underline hover:text-green-900 transition-colors"
        >
          Learn More →
        </a>
      </div>


    </div>
  );
}

export default RecapCard;
