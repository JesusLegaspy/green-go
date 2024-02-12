import { FaArrowRight } from "react-icons/fa";
import { Alegreya } from 'next/font/google'

const alegreya = Alegreya({ subsets: ['latin'], weight: "400" });


const Appointment = () => {
  return (
    <div className='flex h-12'>
      <div className={`flex items-center text-2xl h-full bg-secondary text-white ${alegreya.className}`}>
        <div className="px-4">Appointment Now</div>
      </div>
      <div className="flex items-center justify-center w-12 text-xl h-full text-white bg-quaternary">
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Appointment;