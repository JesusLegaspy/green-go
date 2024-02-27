import { FaArrowRight } from "react-icons/fa";
import { Alegreya } from 'next/font/google';
import { FaPhone } from "react-icons/fa6";

const alegreya = Alegreya({ subsets: ['latin'], weight: "400" });


const Appointment = () => {
  return (
    <div className='group flex h-12 hover:drop-shadow-md'>
      <a href="tel:8708260950">
        <div className={`flex items-center text-2xl h-full bg-secondary text-white ${alegreya.className}`}>
          <div className="px-4">Appointment Now</div>
        </div>
      </a>
      <a href="tel:8708260950">
        <div className="flex items-center justify-center w-12 text-xl h-full text-white bg-quaternary">
          <FaArrowRight className="group-hover:hidden" />
          <FaPhone className="hidden group-hover:block" />
        </div>
      </a>
    </div>
  );
};

export default Appointment;