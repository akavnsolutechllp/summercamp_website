import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo.png';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';


import banner from '../assets/banner2.jpg'

import vect23 from '../assets/23.png';
import vect8 from '../assets/8.png';
import vect3 from '../assets/3.png';
import vect14 from '../assets/14.png';
import vect21 from '../assets/21.png';

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const navigate  = useNavigate();

  const toggleSidebar = () => {
    if (isOpen) {
      gsap.to(sidebarRef.current, {
        x: '100%',
        duration: 0.5,
        ease: 'power3.inOut',
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.5,
        ease: 'power3.out',
      });
    }
    setIsOpen(!isOpen);
  };

  const handleHome = () =>{
    navigate('/')
  }

  const handleProgram = () =>{
    navigate('/programs')
  }

  const handleRegister = () =>{
    navigate('/register')
  }

  const handleAbout = () =>{
    navigate('/aboutus')
  }


  return (
    <div className='w-full h-[12vh] xl:h-[32vh] flex justify-center items-center 2xl:justify-center items-center px-4 relative z-20 overflow-hidden xl:overflow-hidden'>
      <img src={banner} alt="" className='w-full absolute object-cover' />
      <div className="hidden xl:w-[100%] 2xl:w-[100%] md:flex justify-center gap-24 items-center ml-auto text-white font-semibold text-lg z-10 mt-72 xl:mt-44 2xl:mt-56 p-4">
        <button onClick={handleHome}  className={`${location.pathname === '/' ? 'bg-white text-[#FF0066] border-[#FF0066]' : 'bg-[#FF0066] text-white border-white' } border-2 px-4 py-2 rounded-full xl:hover:scale-105 xl:hover:cursor-pointer ease-in-out`} >Home</button>
        <button onClick={handleProgram}  className={` ${location.pathname === '/programs' ? 'bg-white text-[#FF0066] border-[#FF0066]' : 'bg-[#FF0066] text-white border-white' } border-2 px-4 py-2 rounded-full xl:hover:scale-105 xl:hover:cursor-pointer ease-in-out`}>Programs</button>
        <button onClick={handleRegister}  className={` ${location.pathname === '/register' ? 'bg-white text-[#FF0066] border-[#FF0066]' : 'bg-[#FF0066] text-white border-white' } border-2 px-4 py-2 rounded-full xl:hover:scale-105 xl:hover:cursor-pointer ease-in-out`}>Register</button>
        <button onClick={handleAbout}  className={`${location.pathname === '/aboutus' ? 'bg-white text-[#FF0066] border-[#FF0066]' : 'bg-[#FF0066] text-white border-white' } border-2 px-4 py-2 rounded-full xl:hover:scale-105 xl:hover:cursor-pointer ease-in-out`}>About Us</button>
      </div>
    </div>
  );
};

export default Navbar;
