"use client"

import React, { useState, useEffect } from 'react';
import { FaMapMarker } from "react-icons/fa";
import { Roboto_Condensed } from 'next/font/google';
import { FaPhone } from "react-icons/fa6";


const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });

const TopBar = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const handleScroll = () => {
    if (window.scrollY > 50 && scrollPosition === 0) {
      setScrollPosition(100);
    } else {
      setScrollPosition(0);
    }

  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="lg:hidden w-full">
      <div className={`z-40 fixed flex justify-between items-center text-xl font-bold bg-primary py-3 px-2 w-full transition-[top] ${scrollPosition < 50 ? 'top-[-50px]' : 'top-0'} ${robotoCondensed.className}`}>
        <div className='flex items-center'>
          <FaMapMarker />
          <div className='text-xs'>
            1211 West 3rd Street, Hope, AR 71801
          </div>
        </div>
        <div className='flex items-center'>
          <FaPhone />
          <div className='text-sm ml-2'>870-826-0950</div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;