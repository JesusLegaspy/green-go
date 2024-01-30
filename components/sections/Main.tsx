import Image from 'next/image';
import hero from '../../public/hero.jpg';
import { FaCar } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";
import { FaTruckPickup } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";
import { FaCaravan } from "react-icons/fa6";
import { FaTractor } from "react-icons/fa6";

const Main = () => {

  return (
    <div className='max-w-screen-2xl bg-blue-500 w-full'>
      <div className='z-3 flex flex-col bg-indigo-400'>
        <div className='h-24 w-full bg-zinc-500'>header-top</div>
        <div className='w-full bg-purple-200 text-center uppercase'>
          Hope's vehicle service experts
        </div>
      </div>
      <div className='relative bg-red-500 h-[75vh] min-h-[700px] overflow-hidden'>
        <Image
          alt='Hero - car engine compartment'
          src={hero}
          className='object-cover'
          fill
        />
        <div className='absolute inset-0 bg-yellow-600'>
          <div className='flex flex-col justify-around items-center h-full bg-teal-400'>
            <div className='text-2xl bg-blue-200'>
              <div className='mr-8'>You have the wheels</div>
              <div className='text-right'>we have the skills</div>
            </div>
            <div className='grid grid-cols-3 gap-5 bg-red-300 w-full md:w-5/8 lg:w-1/2 px-5 text-6xl sm:text-8xl'>
              <div className='flex justify-center items-center w-full aspect-square bg-purple-400'><FaCar /></div>
              <div className='flex justify-center items-center w-full aspect-square bg-purple-400'><FaMotorcycle /></div>
              <div className='flex justify-center items-center w-full aspect-square bg-purple-400'><FaTruckPickup /></div>
              <div className='flex justify-center items-center w-full aspect-square bg-purple-400'><FaTruck /></div>
              <div className='flex justify-center items-center w-full aspect-square bg-purple-400'><FaCaravan /></div>
              <div className='flex justify-center items-center w-full aspect-square bg-purple-400'><FaTractor /></div>
            </div>
            <div className='bg-amber-200 w-fit px-8 py-4 text-4xl rounded-2xl'>
              Appointment
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Main;