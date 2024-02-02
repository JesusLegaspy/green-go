import { Alegreya } from 'next/font/google'
import { Roboto_Condensed } from 'next/font/google'
import { Open_Sans } from 'next/font/google'

import Hero from '../hero';
import TopHeader from '../TopHeader';


const Main = () => {

  return (
    <div className='max-w-screen-2xl w-full'>
      <TopHeader />
      <Hero />
    </div >
  );
}

export default Main;