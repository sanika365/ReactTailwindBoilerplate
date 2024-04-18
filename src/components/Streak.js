import React from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";





const Streak = () => {
  return (
    <div className='mt-20 md:mt-4 flex flex-col items-center  mx-4 relative sm:flex-row sm:mt-20 sm:ml-20'>
      <div className='flex  justify-center '>
        {/* <span className='font-bold text-4xl sm:text-5xl sm:ml-0'>2</span>
        <FontAwesomeIcon
          icon={faBolt}
          className='ml-2 text-4xl yellow-bolt sm:text-5xl'
        /> */}
        <img
          src='ss5.jpg'
          alt='Fundamental math'
          className='w-20 h-20 sm:w-24 sm:h-24  md:ml:16 ml-2 md:mt-8 '
        />
      </div>
      <div className='flex flex-col items-center mt-4 relative justify-between flex-1 sm:flex-row sm:items-start sm:mt-0 sm:ml-6'>
        <div className='font-bold text-3xl sm:text-3xl flex flex-col items-center justify-center h-full'>
          <div className='text-center whitespace-no-wrap'>
            You're on a <span className='whitespace-no-wrap'>2-day</span>{" "}
            streak!
          </div>
          <div className='ml-1 text-sm font-normal  mt-2 sm:text-base'>
            <span className='font-bold'>2</span> Longest Streak.{" "}
            <span className='font-bold ml-7'>19</span>{" "}
            <span className='font-normal'>Lessons Completed</span>
          </div>
        </div>

        <div className='absolute h-full border-l border-gray-300 left-1/2 transform -translate-x-1/2 hidden sm:block'></div>

        <div className='relative flex items-center justify-center'>
          {/* Vertical Line */}

          {/* Container for Weekdays */}
          <div className='flex items-start mt-4 sm:mt-0  flex-grow pl-4 ml-0 sm:ml-0'>
            <div className='flex flex-col items-center ml-8 sm:ml-2'>
              <div className='font-bold text-2xl sm:text-3xl'>W</div>
              <FontAwesomeIcon
                icon={faBolt}
                className='text-2xl yellow-bolt sm:text-3xl bg-blend-color-burn'
                size='lg'
              />
            </div>
            <div className='flex flex-col items-center ml-4 sm:ml-8'>
              <div className='font-bold text-2xl sm:text-3xl'>Th</div>
              <FontAwesomeIcon
                icon={faBolt}
                className='text-2xl yellow-bolt sm:text-3xl'
                size='lg'
                color='yellow'
              />
            </div>
            <div className='flex flex-col items-center ml-4 sm:ml-8'>
              <div className='font-bold text-2xl sm:text-3xl'>F</div>
              <FontAwesomeIcon
                icon={faBolt}
                className='text-2xl gray-bolt sm:text-3xl'
                size='lg'
                color='gray'
              />
            </div>
            <div className='flex flex-col items-center ml-4 sm:ml-8'>
              <div className='font-bold text-2xl sm:text-3xl'>S</div>
              <FontAwesomeIcon
                icon={faBolt}
                className='text-2xl gray-bolt sm:text-3xl'
                size='lg'
                color='gray'
              />
            </div>
            <div className='flex flex-col items-center ml-4 sm:ml-8'>
              <div className='font-bold text-2xl sm:text-3xl'>Su</div>
              <FontAwesomeIcon
                icon={faBolt}
                className='text-2xl gray-bolt sm:text-3xl'
                size='lg'
                color='gray'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Streak;


