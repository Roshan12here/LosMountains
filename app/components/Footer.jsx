import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bgbluec text-white py-4 h-[10vh]">
      <div className="container w-[50%] mx-auto my-auto flex items-center justify-between">
      
        <div className="flex items-center  opacity-20">
          <Image
            src="/Logo15.png"
            width={60}
            height={60}
            alt="Logo"
            className="mr-2 rounded-full"
          />
          <span className="text-lg font-bold">LOSANGELES <br />MOUNTAINS</span>
        </div>

        {/* Copyright text */}
        <p className="text-sm opacity-20 hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex ">&copy; 2023  All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
