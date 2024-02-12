import Main from '@/components/sections/Main';
import About from '@/components/sections/About';
import Services from '@/components/sections/Servies';
import Locations from '@/components/sections/Locations';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Main />
      <About />
      <Services />
      <Locations />
    </main>
  )
}
