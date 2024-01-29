import Image from 'next/image';
import hero from '../../public/hero.jpg';

const Main = () => {

  return (
    <div className='max-w-screen-2xl bg-blue-500 w-full'>
      <div className='h-24'>
        Main
      </div>
      <div className='relative bg-red-500 h-[75vh] min-h-[700px] overflow-hidden'>
        <Image
          alt='Hero - car engine compartment'
          src={hero}
          className='object-cover'
          fill
        />
        <div className='absolute inset-0 bg-yellow-600'>
          <div className='flex flex-col justify-around items-center h-full bg-teal-400'>
            <div className='bg-blue-200'>
              Blurb
            </div>
            <div className='grid grid-cols-3 gap-5 bg-red-300 w-full md:w-5/8 lg:w-1/2 px-5'>
              <div className='flex justify-center items-center w-full aspect-square bg-purple-400'>1 </div>
              <div className='flex justify-center items-center w-full aspect-square bg-purple-400'>2</div>
              <div className='flex justify-center items-center w-full aspect-square bg-purple-400'>3</div>
              <div className='flex justify-center items-center w-full aspect-square bg-purple-400'>4</div>
              <div className='flex justify-center items-center w-full aspect-square bg-purple-400'>5</div>
              <div className='flex justify-center items-center w-full aspect-square bg-purple-400'>6</div>
            </div>
            <div className='bg-amber-200 w-fit px-8 py-4 text-4xl rounded-2xl'>
              Appointment
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Main;