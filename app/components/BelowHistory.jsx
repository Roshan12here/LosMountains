import React from 'react';
import Image from 'next/image';
import Parallax from 'react-next-parallax';

const BelowHistory = () => {
  return (
    <div className="padding-container max-container w-full ">
      <Parallax  offsetMultiplier={2} scale={1.3}>
      <div className="flex  gap-5 lg:gap-10 w-[100%] sm:w-[80%] lg:w-[70%] xl:w-[70%] 2xl:w-[60%] mx-auto ">
      <h1 className='text-8xl sblue wsmoke  md:text-[10rem] lg:text-[14rem] pt-[-2vh]  xl:text-[12rem] 2xl:text-[12rem]'>
  02. 
</h1>
<h2 className='text-[3.6rem] sm:text-[2rem]  md:text-[2rem] lg:text-[3rem] xl:text-[3rem] mt-[1vh] sm:mt-[3vh] md:mt-[6vh] lg:mt-[8vh] xl:mt-[8.9vh] 2xl-[10vh] ml-[14vw] sm:ml-[1vw] md:ml-[-4.2vw] lg:ml-[-5.8vw] sl:ml-[-5.8vw] 2xl:ml-[-5.8vw]  History  font-extrabold'>CLimb</h2>
        <p data-parallax-offset="-5" className="text-black History hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex  font-semibold text-lg   mt-[6vh]  bg-light-blue p-4 ">
          Only with the hilink application will you no longer get lost, because we suppor relatives, and companions to explore the wilderness, traverse valleys, and reach mountain peaks.
        </p>
      </div>
      </Parallax>
    </div>
  );
};

export default BelowHistory;
