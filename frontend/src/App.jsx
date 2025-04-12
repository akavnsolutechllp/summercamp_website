import React from 'react'
import Lenis from 'lenis'
import LandingPage from './pages/LandingPage';
import About from './pages/AboutUs';
import Registration from './pages/Registration';

const App = () => {
  // Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

  return (
    <div className='h-auto w-full flex flex-col justify-start items-center overflow-hidden'>
      <LandingPage/>
     <About/>
     <Registration/>
    </div>
  )
}

export default App