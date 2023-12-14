"use client"

import React from 'react';
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';

const Hero = () => {
  return (
    <Parallax >
    <div className='hero-section flex-col flex items-center min-h-screen' >
      <header className=" w-[100%] sm:w-[100%] md:w-[70%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%]  flex  justify-between p-4">
        <div className="flex items-center ">
          <div className="flex sm:flex md:flex lg:flex  relative  xl:flex 2xl:flex rounded-full overflow-hidden mt-6 ml-[-1vw]">
            <Image
              src="/Logo15.png"
              width={60}
              height={60}
              alt="Logo"
              className='rounded-full '
              />
          </div>
          <div className="sm:hidden md:flex hidden   float-right md:ml-[36rem] xl:flex 2xl:flex flex-row space-x-4 lg:flex mt-6 ">
            <li className="underline text-lg sm:hidden  lg:flex xl:flex list-none cursor-pointer mr-8">History</li>
            <li className="underline text-lg sm:hidden lg:flex xl:flex cursor-pointer list-none mr-4">Team</li>
          </div>
        </div>
      </header>
      <h1  className='text-6xl sm:text-6xl md:text-7xl lg:text-9xl mt-14 mb-0 md:mt-[10rem] md:mb-0 text-center'>LOSANGELES <br /> <span className=''>MOUNTAINS</span></h1>
    </div>
              </Parallax>
  )
};

export default Hero;
