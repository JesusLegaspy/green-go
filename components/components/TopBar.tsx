"use client"

import React, { useState, useEffect } from 'react';
import { FaMapMarker } from "react-icons/fa";
import { Roboto_Condensed } from 'next/font/google';
import { FaPhone } from "react-icons/fa6";
import logoMd from "@/public/gglogo_md.webp";
import Image from "next/image";
import { Alegreya } from 'next/font/google';

const alegreya = Alegreya({ subsets: ['latin'], weight: "400" });
const robotoCondensed = Roboto_Condensed({ subsets: ["latin"] });

const TopBar = () => {
  const [topPosition, setTopPostition] = useState<string>('-top-28');
  const handleScroll = () => {
    if (768 < window.screen.width) {
      if (75 < window.scrollY) {
        setTopPostition('-top-12');
        return;
      }
      setTopPostition('-top-28');
      return;
    }
    if (75 < window.scrollY && window.scrollY < 200) {
      setTopPostition('-top-12');
      return;
    }
    if (200 < window.scrollY) {
      setTopPostition('top-0');
      return;
    }
    setTopPostition('-top-28');
    return;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`z-40 fixed w-full transition-[top] ${topPosition} flex flex-col shadow-md`}>
      <div className={`bg-primary py-3 px-2 flex justify-between items-center text-xl font-bold ${robotoCondensed.className} `}>
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
      <div className='flex bg-cyan-900 p-2'>
        <div className='flex items-center w-full'>
          <div className='bg-primary p-0.5 rounded-full mt-0.5'>
            <Image
              alt='Green-go logo medium'
              src={logoMd}
              className='object-cover'
              height={64}
              width={64}
            />
          </div>
          <a href='tel:8708260950'>
            <div className={`flex bg-secondary py-1 px-3 ${alegreya.className} text-white rounded text-lg ml-6 mt-0.5`}>
              Appointment Now <FaPhone className='ml-2 text-xs self-center' />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;