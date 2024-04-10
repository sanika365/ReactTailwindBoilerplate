import React from "react";

const Card = ({image, title, description ,index }) => {
    const lineColor = index === 2 ? "border-yellow-500" : "border-gray-200";

    return (
      <div className='flex-1 bg-white rounded-lg shadow-md p-4 m-2 flex flex-col border border-gray-300'>
        <img
          src={image}
          alt='CardImage'
          className='w-full h-40 rounded object-cover mb-4'
        />
        <h2 className='text-sm font-medium text-gray-700 font-small'>
          {title}
        </h2>
        <p className='text-gray-900 flex-1'>{description}</p>
        <hr className={`border-t-4 ${lineColor} my-2`} />
      </div>
    );
  };

export default Card;