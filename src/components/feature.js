import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
const Feature = () => {
  return (
    
    <div className='mt-10 md:text-left'>
      <h3 className='text-2xl font-bold ml-4 md:ml-20 mt-6 md:mt-0'>
        Featured learning paths
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-0 mt-8 ml-4 md:ml-20 md:mt-6 justify-center items-center'>
        <div className='max-w-lg mx-auto md:ml-0 md:mr-0 md:mt-0'>
          <div className='rounded overflow-hidden shadow-lg border border-gray-300'>
            <div className='flex flex-col md:flex-row'>
              <img
                src='ss4.jpg'
                alt='Mathematical thinking'
                className='w-1/2 md:w-48 md:h-44 object-cover md:mt-6 md:ml-4 mx-auto'
              />
              <div className='px-4 py-4'>
                <div className='font-medium text-sm text-gray-900 mb-2'>
                  6 courses
                </div>
                <div className='font-bold text-lg md:text-xl text-gray-800 mb-2'>
                  Foundational math
                </div>
                <p className='text-gray-500 font-normal text-sm md:text-base'>
                  This is a 7-course path starting with pre-algebra and building
                  up to Fundamental of algebra and geometry
                </p>
                <button className='bg-yellow-500 hover:bg-yellow-600 text-black font-medium mt-4 py-2 px-4 rounded-full flex items-center justify-center w-64 md:w-auto mx-auto'>
                  <FontAwesomeIcon icon={faBookmark} className='mr-2' />
                  <span>In Progress</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-lg mx-auto md:ml-0 md:mr-0 md:mt-0'>
          <div className='rounded overflow-hidden shadow-lg border border-gray-300'>
            <div className='flex flex-col md:flex-row'>
              <img
                src='ss4.jpg'
                alt='Mathematical thinking'
                className='w-1/2 md:w-48 md:h-44 object-cover md:mt-6 md:ml-4 mx-auto'
              />

              <div className='px-4 py-4'>
                <div className='font-medium text-sm text-gray-900 mb-2'>
                  7 courses
                </div>
                <div className='font-bold text-lg md:text-xl mb-2'>
                  Mathematical thinking
                </div>
                <p className='text-gray-500 font-normal text-sm md:text-base'>
                  This course starts with everyday math and builds up to the
                  fundamentals of geometry and algebra.
                </p>
                <button className='bg-yellow-500 hover:bg-yellow-600 text-black font-medium mt-4 py-2 px-4 rounded-full flex items-center justify-center w-64 md:w-auto mx-auto'>
                  <FontAwesomeIcon icon={faBookmark} className='mr-2' />
                  <span>In Progress</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;