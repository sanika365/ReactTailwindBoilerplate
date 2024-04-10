import React from "react";
import Card from "./Card";
const Learning = () => {
  return (
    <div className='text-2xl font-bold   md:text-left ml-4 md:ml-20'>
      Continue learning
      <div className='container flex flex-wrap mt-4  md:mt-8 mx-auto items-center relative justify-center md:ml-4 max-w-5xl '>
        <Card
          image='memory.jpg'
          title='Computer Memory Lesson 1.. '
          description='Binary Decimal and Hexadecimal'
          index={0}
        />
        <hr class='border-gray-300 my-4'></hr>
        <Card
          image='cells.jpg'
          title='Artificial Neural Networks'
          description='Computationally Modeling the Brain'
          index={1}
        />
        <Card
          image='Dna.jpg'
          title='Random Variable & Distributions'
          description='Random variable and Applications'
          index={2}
        />
        <Card
          image='casion.jpg'
          title='Casino Probability. Less..'
          description='Avoid the Scam Play at your own risk'
          index={3}
        />
      </div>
    </div>
  );
};
export default Learning;
