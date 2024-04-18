import React from "react";
import '../index.css'
const Card = ({ image, title, subtitle,description }) => {
  return (
    <div className=' max-w-custom mx-auto rounded overflow-hidden shadow-lg  border border-gray-300 md:ml-6 ml-1'>
      <img
        src={image}
        alt={title}
        className='w-200 md:w-500 h-55 md:h-44 rounded px-4 md:px-0 md:ml-6 mt-4 mb-4'
      />

      <div className='px-6 py-4  '>
        <div class='flex'>
          <div class='font-medium text-sm mb-2 mr-2  text-gray-800'>
            {title}
          </div>
          <div class='font-medium text-sm mb-2 text-gray-800'>{subtitle}</div>
        </div>

        <p className=' font-bold text-gray-900  text-lg  '>{description}</p>
      </div>
    </div>
  );
};

export default Card;
