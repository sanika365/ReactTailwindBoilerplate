import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faStickyNote,
  faCalendarAlt,
  faBars,
  faSearch,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import { faConnectdevelop } from "@fortawesome/free-brands-svg-icons"; // Importing connectdevelop icon

const Navbar = () => {
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleTabClick = (index) => {
    setSliderPosition(index);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-white-50 shadow-md'>
      <div className='container mx-auto px-4 md:px-0 h-16 flex items-center justify-between relative'>
        <div className='flex items-center'>
          <FontAwesomeIcon
            icon={faConnectdevelop}
            className='text-4xl hidden md:block'
          />
          <a href='/' className='text-3xl font-normal text-gray-800 md:ml-4'>
            BRILLIANT
          </a>
          <div className='hidden md:flex md:ml-10'>
            <a
              href='/home'
              className={`text-lg font-normal text-gray-800 ml-4 relative hover:text-black ${
                sliderPosition === 0 ? "active" : ""
              }`}
              onClick={() => handleTabClick(0)}
            >
              <FontAwesomeIcon icon={faHome} className='mr-2' /> Home
              {sliderPosition === 0 && <div className='slider' />}
            </a>
            <a
              href='/courses'
              className={`text-lg font-normal text-gray-500 ml-4 relative hover:text-black ${
                sliderPosition === 1 ? "active" : ""
              }`}
              onClick={() => handleTabClick(1)}
            >
              <FontAwesomeIcon icon={faStickyNote} className='mr-2' /> Courses
              {sliderPosition === 1 && <div className='slider' />}
            </a>
            <a
              href='/today'
              className={`text-lg font-normal text-gray-500 ml-4 relative hover:text-black ${
                sliderPosition === 2 ? "active" : ""
              }`}
              onClick={() => handleTabClick(2)}
            >
              <FontAwesomeIcon icon={faCalendarAlt} className='mr-2' /> Today
              {sliderPosition === 2 && <div className='slider' />}
            </a>
          </div>
        </div>
        <div className='flex items-center '>
          <button className='ml-2 md:ml-0 px-4 py-2 border border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white'>
            START TRIAL
          </button>
          <span className='font-bold  ml-2 md:ml-5'>2</span>
          <FontAwesomeIcon icon={faBolt} className='  ml-2  mr-2 yellow-bolt' />
          <FontAwesomeIcon
            icon={faBars}
            className='ml-4 md:hidden'
            onClick={toggleMenu}
          />
          <div className='relative hidden md:block'>
            {" "}
            {/* Rendering search bar only on desktop */}
            <input
              className='px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-100 bg-gray-100 text-gray-800 w-full'
              style={{ height: "28px" }}
            />
            <FontAwesomeIcon
              icon={faSearch}
              className='text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2'
            />
          </div>
        </div>
      </div>
      <div
        className={`md:hidden bg-white shadow-md ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <a
          href='/home'
          className={`block px-4 py-2 text-gray-800 hover:bg-gray-200 ${
            sliderPosition === 0 ? "bg-gray-200" : ""
          }`}
          onClick={() => {
            handleTabClick(0);
            toggleMenu();
          }}
        >
          <FontAwesomeIcon icon={faHome} className='mr-2' /> Home
        </a>
        <a
          href='/courses'
          className={`block px-4 py-2 text-gray-800 hover:bg-gray-200 ${
            sliderPosition === 1 ? "bg-gray-200" : ""
          }`}
          onClick={() => {
            handleTabClick(1);
            toggleMenu();
          }}
        >
          <FontAwesomeIcon icon={faStickyNote} className='mr-2' /> Courses
        </a>
        <a
          href='/today'
          className={`block px-4 py-2 text-gray-800 hover:bg-gray-200 ${
            sliderPosition === 2 ? "bg-gray-200" : ""
          }`}
          onClick={() => {
            handleTabClick(2);
            toggleMenu();
          }}
        >
          <FontAwesomeIcon icon={faCalendarAlt} className='mr-2' /> Today
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
