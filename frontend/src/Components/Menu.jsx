import React,{useState,useRef} from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { gsap } from 'gsap';

const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);
  
  return (
    <div className='min-h-[8vh] bg-[#283253] w-full xl:hidden 2xl:hidden flex justify-center p-2 mt-0 '>
      <div className='h-full w-full  flex justify-center items-center gap-2 px-1'>
        <a href="/" className='bg-[#FF0066] font-montserrat text-sm text-white border-2 px-4 py-2 rounded-full'>Home</a>
        <a href="/programs" className='bg-[#FF0066] font-montserrat text-sm text-white border-2 px-2 py-2 rounded-full'>Programs</a>
        <a href="/register" className='bg-[#FF0066] font-montserrat text-sm text-white border-2 px-2 py-2 rounded-full' >Register</a>
        <a href="/about" className='bg-[#FF0066] font-montserrat text-sm text-white border-2 px-2 py-2 rounded-full'>About Us</a>
      </div>
    </div>
  )
}

export default Menu;