import Image from 'next/image';
import hero from '@/public/hero.jpg';
import { Gidugu } from 'next/font/google'
import { Gurajada } from 'next/font/google'
import { FaCar } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";
import { FaTruckPickup } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";
import { FaCaravan } from "react-icons/fa6";
import { FaTractor } from "react-icons/fa6";

const gidugu = Gidugu({ subsets: ['latin'], weight: "400" });
const gurajada = Gurajada({ subsets: ['latin'], weight: "400" });


const Hero = () => {
  return (
    <div className='relative h-[75vh] overflow-hidden'>
      <Image
        alt='Hero - car engine compartment'
        src={hero}
        className='object-cover'
        fill
        priority
      />
      <div className='absolute inset-0'>
        <div className='flex flex-col justify-around items-center h-full'>
          <div className={`text-5xl sm:text-6xl text-white ${gidugu.className}`}>
            <div className='mr-8'>You have the wheels</div>
            <div className='text-right'>we have the skills</div>
          </div>
          <div className='grid grid-cols-3 gap-5 w-full sm:w-3/4 md:w-3/5 lg:w-4/12 xl:w-3/12 px-5 text-6xl sm:text-8xl'>
            <div className='flex justify-center items-center w-full aspect-square bg-senary p-2'><FaCar /></div>
            <div className='flex justify-center items-center w-full aspect-square bg-senary p-2'><FaMotorcycle /></div>
            <div className='flex justify-center items-center w-full aspect-square bg-senary p-2'><FaTruckPickup /></div>
            <div className='flex justify-center items-center w-full aspect-square bg-senary p-2'><FaTruck /></div>
            <div className='flex justify-center items-center w-full aspect-square bg-senary p-2'><FaCaravan /></div>
            <div className='flex justify-center items-center w-full aspect-square bg-senary p-2'><FaTractor /></div>
          </div>
          <div className={`bg-orange-600 text-white w-fit px-8 py-2 text-6xl rounded-xl sm:mb-6 ${gurajada.className}`}>
            Appointment
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;