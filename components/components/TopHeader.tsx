import { Montserrat } from 'next/font/google'
import Image from 'next/image';
import logo from '@/public/logo.png';
import metal from '@/public/metal.jpg';

const montserrat = Montserrat({ subsets: ['latin'] });

const TopHeader = () => {
  return (
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
          <div className='z-10 absolute inset-0 bg-primary opacity-75' />
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
      <div className={`w-full bg-quinary text-white text-center uppercase ${montserrat.className}`}>
        Hope&apos;s vehicle service experts
      </div>
    </div>
  );
};

export default TopHeader;