import React from 'react'
import Parallax from 'react-next-parallax'

const Climb = () => {
  return (
    <div className='Climbsec'>
        <div className='h-[4vh] bgbluec'>
        <div className='w-[70%] flex justify-start mx-auto  '>
<h1 className='activebg'>MOUNTAIN1</h1>
<h1 className='nona underl'>MOUNTAIN2</h1>
        </div>
         </div>
         <div  className="relative top-40 ml-[16vw] z-20 w-[80vw] sm:w-[80vw] md:w-[40vw] lg:w-[54vw] xl:w-[24vw] 2xl:w-[22vw] h-[34vh] sm:h-[34vh] md:h-[24vh] lg:h-[34vh] xl:h-[24vh] 2xl:h-[28vh] heromodal flex flex-col gap-8 rounded-lg bg-green-90 px-7 py-8 bg-silver-opacity">
         <Parallax offsetMultiplier={2} scale={2.2}>
          <div data-parallax-offset="-5" className="flex flex-col">
            <div className="flexBetween pt-[0]">
                <h1 className='font-extrabold text-[2.6rem] mtcl'>SCHEDULE</h1>
            </div>
            <div className="flexBetween ">
              <div className="flex flex-col ">
                <p className="text-black font-bold text-[1rem]">2Nov,2023</p>
                <p className="text-black font-bold text-[1rem]">Take Training </p>
              </div>
              <div className="flex flex-col ">
                <p className="text-black font-bold text-[1rem] ">12Nov,2023</p>
                <p className="text-black font-bold text-[1rem]">Take Training </p>
              </div>
            </div>
            <div className="flexBetween mt-6">
              <div className="flex flex-col ">
                <p className="text-black font-bold text-[1rem] ">22Nov,2023</p>
                <p className="text-black font-bold text-[1rem]">Take Training </p>
              </div>
              <div className="flex flex-col ">
                <p className="text-black font-bold text-[1rem] ">2Bec,2023</p>
                <p className="text-black font-bold text-[1rem]">Take Training </p>
              </div>
            </div>
          </div>
         </Parallax>
        </div>
    </div>
  )
}

export default Climb
