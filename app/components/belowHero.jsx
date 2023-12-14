import React from 'react';
import Image from 'next/image';

const BelowHero = () => {
  return (
    <section className='w-[60%] h-[14vh] pb-24 mx-auto bgw'>
      <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
        <ul className='flex items-center'>
          <Image
            src='/Logo15.png'
            alt='camp'
            width={100}
            height={100} 
            className='rounded-lg'
          />
          <h1 className='text-2xl mt-4 black'>LOSANGELES <br /> <span className='blue'>MOUNTAINS</span> </h1>
        </ul>
        <ul className='flex justify-between mb-[4vh]'>
          <li className='text-blue-900 cursor-pointer transition-colors hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex hover:text-blue-950 text-2xl underline duration-300 mr-12 mt-[6vh]'>01 History</li>
          <li className='text-blue-900 cursor-pointer transition-colors hidden sm:text-green md:flex lg:flex xl:flex 2xl:flex hover:text-blue-950 text-2xl underline duration-300 mr-12 mt-[6vh]'>02 Team</li>
        </ul>
      </div>
    </section>
  );
};

export default BelowHero;
