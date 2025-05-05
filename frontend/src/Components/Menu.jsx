import React,{useState,useRef} from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { gsap } from 'gsap';

import { useLocation } from 'react-router-dom';

const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const sidebarRef = useRef(null);
  
  return (
    <div className='min-h-[8vh] bg-[#283253] w-full xl:hidden 2xl:hidden flex justify-center p-2 mt-0 '>
      <div className='h-full w-full  flex justify-center items-center gap-2 md:gap-4 px-1'>
        <a href="/" className={` ${location.pathname === '/' ? 'bg-white text-[#FF0066] border-[#FF0066]' : 'bg-[#FF0066] text-white border-white' }  font-montserrat text-sm md:text-lg  border-2 px-2 py-2 rounded-full`}>Home</a>
        <a href="/programs" className={` ${location.pathname === '/programs' ? 'bg-white text-[#FF0066] border-[#FF0066]' : 'bg-[#FF0066] text-white border-white' }  font-montserrat text-sm md:text-lg  border-2 px-2 py-2 rounded-full`}>Programs</a>
        <a href="/register" className={` ${location.pathname === '/register' ? 'bg-white text-[#FF0066] border-[#FF0066]' : 'bg-[#FF0066] text-white border-white' }  font-montserrat text-sm md:text-lg  border-2 px-2 py-2 rounded-full`} >Register</a>
        <a href="/aboutus" className={` ${location.pathname === '/aboutus' ? 'bg-white text-[#FF0066] border-[#FF0066]' : 'bg-[#FF0066] text-white border-white' }  font-montserrat text-sm md:text-lg  border-2 px-2 py-2 rounded-full`}>About Us</a>
      </div>
    </div>
  )
}

export default Menu;