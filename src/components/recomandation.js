import React from "react";
import '../index.css';
import Card from './Card1';
const Recommended  = () => {
    return (
      <div className='text-2xl font-bold   md:text-left ml-4 mt-20 md:ml-20'>
        Recommended for you
        <div className='container flex flex-wrap mt-8 mx-auto  relative md:ml-4 max-w-sm  '>
          {" "}
          <Card
            image='algebra.jpg'
            title='Pre-Algebra .'
            subtitle= 'Lesson 1 of 28'
            description='Understanding variables'
           
          />
        </div>
      </div>
    );
}
export default Recommended;

