import { Roboto_Condensed } from 'next/font/google'
import { TbEngine } from "react-icons/tb";

const robotoCondensed = Roboto_Condensed({ weight: "400", subsets: ["latin"] });

const Services = () => {
  return (
    <div className='max-w-screen-2xl w-full py-6 bg-teal-950 text-white'>
      <h2 className={`${robotoCondensed.className} text-2xl uppercase text-center`}>
        Services We Offer
      </h2>
      <div className='flex justify-center'>
        <div className='p-4 md:max-w-2xl text-white'>
          <p>
            We provide affordable and effective maintenance services for all types of vehicles. Our auto mechanics are very friendly, knowledgeable and ready to help you with your service.
          </p>
        </div>
      </div>
      <div className='flex items-center'>
        <div className='text-7xl bg-amber-100 text-black rounded-lg'>
          <TbEngine />
        </div>
        <div className='bg-cyan-900 h-fit'>
          <p className='uppercase'>Engine Tune Up</p>
        </div>
      </div>
    </div>
  );
};

export default Services;