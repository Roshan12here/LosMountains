import React from 'react'
import Image from 'next/image'
import Parallax from 'react-next-parallax'

const History = () => {
  return (
    <div className='Historysec  '>
          <Parallax offsetMultiplier={2} scale={1.3} className='w-[100%] sm:w-[100%] md:w-[70%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%] h-[46vh] pt-0 pb-6 mx-auto flex flex-col'>
        <div className='' data-parallax-offset="-5">

        <h1 className='text-8xl sblue wsmoke  md:text-[10rem] lg:text-[14rem] pt-[-2vh] mb-0 md:mt-[10rem] md:mb-0 xl:text-[12rem] 2xl:text-[12rem]'>
  01.
</h1>
<h1 className='text-[2rem] ml-[13vw] History font-extrabold  mt-[1vh] sm:md-[1vh] md:mt-[-2vh] lg:mt-[-10vh] xl:mt-[-10vh] 2xl:mt-[-10vh] sm:text-[1rem] md:text-[2rem] lg:text-[3rem] xl:text-[3rem]'>History</h1>
      <p className='text-lg pt-[2px] ml-[13vw]  mt-3 font-extrabold History'>
Nestled in the serene esembrace of towering peaks, our mountain camp stands as a testament to adventure and tranquility. Established decad ago.embrace of towering peaks, our mountain camp stands  .</p>
        </div>
          </Parallax>
          <div className="bg-blue-950 bg-opacity-50 p-4">
  <div className="flex w-full mx-auto justify-center items-center gap-1vw">
    <div className="w-[25%] sm:w-[100%] mb-4 sm:mb-0">
      <Parallax offsetMultiplier={2} scale={2.2} className=''>
        <Image
          src="/last.jpg"
          alt="Image 1"
          width={300}
          height={200}
          className="rounded-lg w-full h-auto"
        />
      </Parallax>
    </div>
    <div className="w-[25%] sm:w-[100%] mb-4 sm:mb-0">
      <Parallax offsetMultiplier={2} scale={2.2}>
        <Image
          src="/Hero.jpg"
          alt="Image 2"
          width={300}
          height={200}
          className="rounded-lg w-full h-auto"
        />
      </Parallax>
    </div>
    <div className="w-[25%] sm:w-[100%] mb-4 sm:mb-0">
      <Parallax offsetMultiplier={2} scale={2.2}>
        <Image
          src="/mountains.jpg"
          alt="Image 3"
          width={300}
          height={200}
          className="rounded-lg w-full h-auto"
        />
      </Parallax>
    </div>
    <div className="w-[25%] sm:w-[100%] mb-4 sm:mb-0">
      <Parallax offsetMultiplier={2} scale={2.2}>
        <Image
          src="/snow.jpg"
          alt="Image 4"
          width={300}
          height={200}
          className="rounded-lg w-full h-auto"
        />
      </Parallax>
    </div>
  </div>
</div>

    </div>
  )
}

export default History
