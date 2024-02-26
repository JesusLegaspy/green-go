import Main from '@/components/sections/Main';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Locations from '@/components/sections/Locations';
import Reviews from '@/components/sections/Reviews';
import Blog from '@/components/sections/Blog';
import Maps from '@/components/sections/Maps';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Main />
      <About />
      <Services />
      <Locations />
      <Reviews />
      <Blog />
      <Maps />
      <Contact />
    </main>
  )
}
