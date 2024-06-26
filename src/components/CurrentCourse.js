import React from "react";
import "../index.css";

    const CurrentCourse = () => {
      return (
        <div className='mt-4 md:mt-0 flex justify-center items-center min-h-screen '>
          <div className=' ml-5 text-2xl font-bold  md:text-left'>
            Pick up where you left off
            <div class='container rounded flex flex-col md:flex-row mt-4 md:mt-4 -ml-0.5 max-w-5xl relative border border-gray-400 '>
              <div className='relative px-2 md:px-0'>
                <img
                  src='ss1.jpg'
                  alt='Course'
                  className='w-full md:w-400 h-54 md:h-64 mx-auto rounded md:ml-4 mt-4 mb-4 px-4 md:px-0'
                />
              </div>

              <div className='md:ml-8'>
                <div className='text-sm font-medium text-gray-900 ml-3 mt-4'>
                  Responsive-web design. Lesson 1 of 19
                </div>
                <h2 className='text-2xl font-bold ml-2 mt-5 mb-2'>
                  A Responsive Web Design
                </h2>
                <p className='text-gray-400 text-lg font-normal ml-2 mb-4 mt-5'>
                  Trust is the backbone of all websites, from commodity monies
                  to design.
                </p>
                <div className='text-center md:text-left'>
                  <button className='px-4 py-2 bg-black text-white rounded flex items-center text-normal font-normal mx-auto md:ml-0'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'
                      width='24'
                      height='24'
                      fill='currentColor'
                      className='inline-block mr-2'
                    >
                      <path d='M8 5v14l11-7z' />
                      <path d='M0 0h24v24H0z' fill='none' />
                    </svg>
                    Resume course
                  </button>
                </div>

               
                <div className='w-full max-w-screen-md h-1 mt-0 mb-8'>
                  <div
                    style={{
                      width: "100%", 
                      maxWidth: "500px",
                      height: "4px",
                      marginTop: "32px",
                      marginBottom: "32px",
                    }}
                    className='flex w-full'
                  >
                    <div
                      style={{ width: "12.33%", backgroundColor: "yellow" }}
                    ></div>
                    <div
                      style={{ width: "97.33%", backgroundColor: "gray" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };


export default CurrentCourse;
