import { Roboto_Condensed } from 'next/font/google'
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
import { GiSmokeBomb } from "react-icons/gi";

const robotoCondensed = Roboto_Condensed({ weight: "400", subsets: ["latin"] });

const Services = () => {
  return (
    <div className='mb-6 max-w-screen-2xl w-full py-6 bg-teal-950 text-white'>
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
        <Service Icon={MdElectricBolt} text="Electrical" />
        <Service Icon={FaGasPump} text="Fuel" />
        <Service Icon={ImKey2} text="Ignition" />
        <Service Icon={FaCarCrash} text="Chassis" />
        <Service Icon={GiSmokeBomb} text="Exhaust" />
      </div>
    </div>
  );
};

export default Services;