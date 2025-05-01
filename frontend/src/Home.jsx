import React from 'react'
import LandingPage from './pages/LandingPage';
import About from './pages/AboutUs';
import Registration from './pages/Registration';
import Program from './pages/Program';
import OurStaff from './pages/OurStaff';
import Navbar from './Components/Navbar';
import Liability from './pages/Liability';
import Page1 from './pages/Page1';
import Menu from './Components/Menu';
import CopyRight from './pages/CopyRight';

const Home = () => {
  return (
    <div className='h-auto w-full flex flex-col justify-start items-center overflow-hidden relative'>
      <Navbar/>
      <Menu/>
      <LandingPage/>
      <Program/>
      <About/>
      <CopyRight/>
    </div>
  )
}

export default Home;