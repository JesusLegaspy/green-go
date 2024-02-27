import Image from 'next/image';
import hero from '@/public/hero.jpg';
import atvIcon from '@/public/atv-icon.png';
import carIcon from '@/public/car-icon.png';
import motorcycleIcon from '@/public/motorcycle-icon.png';
import mufflerIcon from '@/public/muffler-icon.png';
import { Gidugu } from 'next/font/google'
import { Gurajada } from 'next/font/google'
import { FaCar } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";
import { FaTruckPickup } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";
import { FaCaravan } from "react-icons/fa6";
import { FaTractor } from "react-icons/fa6";
import { Shrikhand } from 'next/font/google';

const gidugu = Gidugu({ subsets: ['latin'], weight: "400" });
const gurajada = Gurajada({ subsets: ['latin'], weight: "400" });
const shrikhand = Shrikhand({ subsets: ['latin'], weight: "400" });


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
          <div className='grid grid-cols-3 gap-5 w-full sm:w-3/4 md:w-3/5 lg:w-4/12 xl:w-3/12 px-5 text-6xl sm:text-7xl'>
            <div className='relative flex justify-center items-center w-full aspect-square bg-senary rounded-2xl'>
              <Image
                src={carIcon}
                alt={'Car icon'}
                className='object-contain p-3'
                fill
              />
            </div>
            <div className='relative flex justify-center items-center w-full aspect-square bg-senary rounded-2xl'>
              <Image
                src={mufflerIcon}
                alt={'Car icon'}
                className='object-contain p-3'
                fill
              />
            </div>
            <div className='relative flex justify-center items-center w-full aspect-square bg-senary rounded-2xl'>
              <Image
                src={atvIcon}
                alt={'Car icon'}
                className='object-contain p-3'
                fill
              />
            </div>
            <div className='relative flex justify-center items-center w-full aspect-square bg-senary rounded-2xl'>
              <Image
                src={motorcycleIcon}
                alt={'Car icon'}
                className='object-contain p-3'
                fill
              />
            </div>
            <div className='relative flex justify-center items-center w-full aspect-square bg-senary rounded-2xl'>
              <FaCaravan />
            </div>
            <div className='relative flex justify-center items-center w-full aspect-square bg-senary rounded-2xl'>
              <FaTractor />
            </div>
          </div>
          <a href="tel:8708260950">
            <div className={`bg-orange-600 text-white w-fit px-8 py-2 text-6xl rounded-xl sm:mb-6 ${gurajada.className}`}>
              Appointment
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;