import React from "react";

const Card = ({ image, title, subtitle,description }) => {
  return (
    <div className=' w-100 rounded overflow-hidden shadow-lg  border border-gray-400'>
      <img
        src={image}
        alt={title}
        className='w-200 md:w-100 h-55 md:h-64  md:ml-2 rounded  mt-4 mb-4'
      />
      <div className='px-6 py-4'>
        <div class='flex'>
          <div class='font-medium text-sm mb-2 mr-2  text-gray-800'>
            {title}
          </div>
          <div class='font-medium text-sm mb-2 text-gray-800'>{subtitle}</div>
        </div>

        <p className=' font-bold text-gray-900  text-2xl '>{description}</p>
      </div>
    </div>
  );
};

export default Card;
