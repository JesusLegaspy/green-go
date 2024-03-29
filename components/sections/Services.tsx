import { Roboto_Condensed } from 'next/font/google'
import Image from 'next/image';
import Service from '../components/Service';
import { TbEngine } from "react-icons/tb";
import { LuComputer } from "react-icons/lu";
import { GiCarWheel } from "react-icons/gi";
import { FaTemperatureHigh } from "react-icons/fa";
import { GiSpring } from "react-icons/gi";
import { MdElectricBolt } from "react-icons/md";
import { FaGasPump } from "react-icons/fa6";
import { ImKey2 } from "react-icons/im";
import { FaCarCrash } from "react-icons/fa";
import muffler from '@/public/muffler.webp';

const robotoCondensed = Roboto_Condensed({ weight: "400", subsets: ["latin"] });

const Services = () => {
  return (
    <div className='w-full py-6 bg-quinary text-white pb-12'>
      <h2 className={`${robotoCondensed.className} text-2xl uppercase text-center`}>
        Services We Offer
      </h2>
      <div className='flex justify-center mb-4'>
        <div className='p-4 md:max-w-2xl text-white'>
          <p>
            We provide affordable and effective maintenance services for all types of vehicles. Our auto mechanics are very friendly, knowledgeable and ready to help you with your service.
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        <Service Icon={TbEngine} text="Engine Tune Up" />
        <Service Icon={LuComputer} text="Computer Diagnostics" />
        <Service Icon={GiCarWheel} text="Brakes and Wheel Balance" />
        <Service Icon={FaTemperatureHigh} text="Air Conditioning and Cooling" />
        <Service Icon={GiSpring} text="Suspension and Struts" />
        <Service Icon={MdElectricBolt} text="Electrical - Battery, Alternator, Starter" />
        <Service Icon={FaGasPump} text="Fuel - Injector, Pump" />
        <Service Icon={ImKey2} text="Ignition - Spark Plugs, etc." />
        <Service Icon={FaCarCrash} text="Chassis - Axle, CV Joint" />
        <div className='flex items-center justify-center mb-12'>
          <div className='text-7xl bg-tertiary text-black rounded-lg p-2'>
            <Image
              src={muffler}
              alt={'muffler'}
              height={56}
            />
          </div>
          <div className='flex items-center bg-quaternary w-8/12 h-12 max-w-sm'>
            <p className='uppercase pl-3'>Exhaust - Muffler, Catalytic Converter</p>
          </div>
        </div>
      </div>
      <div className='flex justify-center w-full'>
        <div className='bg-secondary max-w-sm rounded-md p-4 mx-8'>
          <p>
            We provide proven reliability with an excellent track record in quality and assurance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;