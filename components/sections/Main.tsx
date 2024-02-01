import Image from 'next/image';
import hero from '../../public/hero.jpg';
import logo from '../../public/logo.png';
import metal from '../../public/metal.jpg';
import { FaCar } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";
import { FaTruckPickup } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";
import { FaCaravan } from "react-icons/fa6";
import { FaTractor } from "react-icons/fa6";

const Main = () => {

  return (
    <div className='max-w-screen-2xl w-full'>
      <div className='z-3 flex flex-col'>
        <div className='relative w-full'>
          <div className='relative h-24 flex justify-center'>
            <div className='absolute inset-0 left-8'>
              <Image
                alt='Green-go logo'
                src={logo}
                className='z-20 object-contain'
                fill
              />
            </div>
            <div className='z-10 absolute inset-0 bg-sky-250 opacity-75' />
            <div className='z-0 absolute inset-0'>
              <Image
                alt='Logo background'
                src={metal}
                className='object-cover'
                fill
              />
            </div>
          </div>

        </div>
        <div className='w-full bg-teal-950 text-white text-center uppercase '>
          Hope's vehicle service experts
        </div>
      </div>
      <div className='relative h-[75vh] min-h-[700px] overflow-hidden'>
        <Image
          alt='Hero - car engine compartment'
          src={hero}
          className='object-cover'
          fill
        />
        <div className='absolute inset-0'>
          <div className='flex flex-col justify-around items-center h-full'>
            <div className='text-2xl text-white'>
              <div className='mr-8'>You have the wheels</div>
              <div className='text-right'>we have the skills</div>
            </div>
            <div className='grid grid-cols-3 gap-5 w-full md:w-5/8 lg:w-1/2 px-5 text-6xl sm:text-8xl'>
              <div className='flex justify-center items-center w-full aspect-square bg-sky-50'><FaCar /></div>
              <div className='flex justify-center items-center w-full aspect-square bg-sky-50'><FaMotorcycle /></div>
              <div className='flex justify-center items-center w-full aspect-square bg-sky-50'><FaTruckPickup /></div>
              <div className='flex justify-center items-center w-full aspect-square bg-sky-50'><FaTruck /></div>
              <div className='flex justify-center items-center w-full aspect-square bg-sky-50'><FaCaravan /></div>
              <div className='flex justify-center items-center w-full aspect-square bg-sky-50'><FaTractor /></div>
            </div>
            <div className='bg-orange-600 text-white w-fit px-8 py-4 text-4xl rounded-2xl'>
              Appointment
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Main;