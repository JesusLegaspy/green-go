import Image from 'next/image';
import car from '../../public/car.jpg';
import { Roboto_Condensed } from 'next/font/google'
import Appointment from '../Appointment';

const robotoCondensed = Roboto_Condensed({ weight: "400", subsets: ["latin"] });

const About = () => {
  return (
    <div className="max-w-screen-2xl w-full bg-teal-950">
      <div className='flex justify-center'>
        <div className='p-4 md:max-w-2xl text-white'>
          <h2 className={`my-6 uppercase  ${robotoCondensed.className}`}>
            <p>Your go-to shop for</p>
            <p className='text-2xl'>diagnosis and maintenance</p>
          </h2>
          <p className='mb-8'>
            We offer professional automotive, motorcycle, RV, tractor, ATV, and truck repair for all makes and models. We provide quality and effective diagnostic services to uncover the problem(s) as quickly as possible, and pride ourselves on superior service.
          </p>
        </div>
      </div>
      <div className='relative h-96 mb-6'>
        <Image
          src={car}
          alt="Background car"
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 bg-white opacity-50' />
      </div>
      <div className='flex justify-center mb-6'>
        <div className='p-4 md:max-w-2xl text-white'>
          <p className='mb-8'>
            Out shop is equipped with industry-leading equipment to properly diagnose and resolved issues the first time. Our auto mechanics are very friendly, knowledgeable and ready to help you with your service.
          </p>
          <Appointment />
        </div>
      </div>
    </div>
  );
}

export default About;