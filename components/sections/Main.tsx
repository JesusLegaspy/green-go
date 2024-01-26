import Image from 'next/image';
import hero from '../../public/hero.jpg';

const Main = () => {

  return (
    <div className='max-w-screen-2xl bg-blue-500 w-full'>
      Main
      <div className='relative bg-red-500 h-[75vh] overflow-hidden'>
        <Image
          alt='Hero - car engine compartment'
          src={hero}
          className='object-cover'
          fill
        />
        <div className='absolute inset-0 bg-yellow-600'>
          <div className='flex justify-center items-center h-full bg-teal-400'>
            <div className='grid grid-cols-3 gap-6 bg-red-300'>
              <div className='flex justify-center items-center w-16 h-16 bg-purple-400'>1 </div>
              <div className='flex justify-center items-center w-16 h-16 bg-purple-400'>2</div>
              <div className='flex justify-center items-center w-16 h-16 bg-purple-400'>3</div>
              <div className='flex justify-center items-center w-16 h-16 bg-purple-400'>4</div>
              <div className='flex justify-center items-center w-16 h-16 bg-purple-400'>5</div>
              <div className='flex justify-center items-center w-16 h-16 bg-purple-400'>6</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;