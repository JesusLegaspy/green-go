import Hero from '../components/Hero';
import TopHeader from '../components/TopHeader';
import Appointment from '../components/Appointment';

import { Open_Sans } from 'next/font/google'

const Main = () => {

  return (
    <div className='w-full'>
      <TopHeader />
      <Hero />
      <div className='flex justify-center'>
        <div className='p-4 md:max-w-2xl '>
          <div>
            <h1 className='text-3xl text-primary'>Every driver</h1>
            <p>deserves a trusted team of mechanics who are not only proficient in a wide range of vehicle makes and models but are also committed to staying ahead of the latest advancements in auto care. Family-owned vehicle repair shop, Green-go, provides unparalleled expertise in a diverse range of vehicle makes and models, ensuring that your vehicle receives the highest level of care.</p>
          </div>
          <div className='my-10'>
            <Appointment />
          </div>
        </div>
      </div>
    </div >
  );
}

export default Main;