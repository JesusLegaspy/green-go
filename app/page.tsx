import Main from '../components/sections/Main';
import About from '../components/sections/About';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Main />
      <About />
    </main>
  )
}
