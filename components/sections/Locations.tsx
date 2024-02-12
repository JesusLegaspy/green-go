import { Roboto_Condensed } from 'next/font/google';
import { Roboto } from 'next/font/google';
import Appointment from '../components/Appointment';

const robotoCondensed = Roboto_Condensed({ weight: "400", subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const Locations = () => {

  return (
    <div className="max-w-screen-2xl w-full bg-quaternary text-white">
      <div className='flex justify-center'>
        <div className='md:max-w-2xl p-4 mt-8'>
          <div className={`mb-4 ${robotoCondensed.className}`}>
            <p className=''>Book Your Next</p>
            <p className='text-2xl'>Appointment Today</p>
          </div>
          <div>
            <p>
              We are conveniently located in Hope, AK, just off the main highway I-30. We are happy to serve drivers throughout the surrounding areas including:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;