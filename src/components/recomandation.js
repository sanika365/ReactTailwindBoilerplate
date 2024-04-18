import React from "react";
import '../index.css';
import Card from './Card1';
const Recommended  = () => {
    return (
      <div className='ml-4 md:ml-20 mt-20'>
        <h2 className='text-2xl font-bold text-left'>Recommended for you</h2>
        <div className='mt-4'>
          <Card
            image='ss3.jpg'
            title='Pre-Algebra .'
            subtitle='Lesson 1 of 28'
            description='Understanding variables'
          />
        </div>
      </div>
    );
}
export default Recommended;

