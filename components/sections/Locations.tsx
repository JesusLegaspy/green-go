import { Alegreya } from 'next/font/google'
import { Roboto_Condensed } from 'next/font/google';
import { FaPhone } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const alegreya = Alegreya({ subsets: ['latin'], weight: "400" });
const robotoCondensed = Roboto_Condensed({ weight: "400", subsets: ["latin"] });
const robotoCondensedBold = Roboto_Condensed({ weight: "600", subsets: ["latin"] });
const Locations = () => {

  return (
    <div className="w-full bg-quaternary text-white">
      <div className='flex justify-center'>
        <div className='md:max-w-2xl p-4 mt-8'>
          <div className={`mb-4 ${robotoCondensed.className}`}>
            <p className=''>Book Your Next</p>
            <p className='text-2xl'>Appointment Today</p>
          </div>
          <div className='mb-6'>
            <p>
              We are conveniently located in Hope, AK, just off the main highway I-30. We are happy to serve drivers throughout the surrounding areas including:
            </p>
          </div>
          <div className='grid grid-cols-2 gap-x-10 gap-y-3 md:gap-y-4 md:gap-x-16 text-primary mb-8'>
            <div className='border-b border-white py-1'>Hope</div>
            <div className='border-b border-white py-1'>Fulton</div>
            <div className='border-b border-white py-1'>Washington</div>
            <div className='border-b border-white py-1'>Prescott</div>
            <div className='border-b border-white py-1'>Emmet</div>
            <div className='border-b border-white py-1'>Texarkana</div>
            <div className='border-b border-white py-1'>Arkadelphia</div>
            <div className='border-b border-white py-1'>Nashville</div>
          </div>
          <div className='flex justify-center mb-8'>
            <div className='flex items-center text-lg sm:text-2xl text-secondary'>
              <div className=''><FaPhone /></div>
              <div className={`pl-2 ${robotoCondensedBold.className}`}>870-826-0950</div>
            </div>
            {/* Appointment Component */}
            <div className='group flex h-12 ml-3'>
              <a href="tel:8708260950">
                <div className={`flex items-center text-lg h-full bg-secondary text-white ${alegreya.className}`}>
                  <div className="px-2">Appointment Now</div>
                </div>
              </a>
              <a href="tel:8708260950">
                <div className="flex items-center justify-center w-10 text-lg h-full text-white bg-quinary">
                  <FaArrowRight className="group-hover:hidden" />
                  <FaPhone className="hidden group-hover:block" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;