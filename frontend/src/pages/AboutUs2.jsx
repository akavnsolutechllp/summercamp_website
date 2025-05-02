import React from 'react';
import logo from '../assets/logo.png';
import Navbar from '../Components/Navbar';
import Menu from '../Components/Menu';

const AboutUs2 = () => {
  return (
    <div className='w-full h-full flex flex-col justify-start items-center bg-[#16003E]'>
        <Navbar/>
        <Menu/>
        <h2 className='font-gardion text-5xl 2xl:text-9xl text-[#EE5073] text-stroke drop-shadow-md drop-shadow-[#E31DB0] mt-8'>About Us</h2>
        <div className='w-full min-h-screen flex flex-col 2xl:flex-row justify-start items-center '>
        <div className='w-full h-auto flex flex-col justify-center items-center my-2'>
            <img src={logo} alt="" className='w-1/2 bg-white rounded-full' />
        </div>
        <div className='w-full h-auto flex flex-col justify-center items-center 2xl:items-start gap-3 p-2 2xl:px-4'>
        <p className='font-montserrat lg:text-lg xl:text-sm 2xl:text-base tracking-wide text-white font-bold'>Welcome to Spark STEM Academy!</p>
        <p className='font-montserrat text-sm font-light lg:text-lg xl:text-sm 2xl:text-base tracking-wide text-white text-justify md:w-[80%] lg:w-full' >At Spark STEM Academy, we’re on a mission to spark curiosity and inspire the next generation of innovators through hands-on experiences in Science, Technology, Engineering, and Math.</p>
        <p className='font-montserrat text-sm lg:text-lg xl:text-sm 2xl:text-base tracking-wide text-white text-justify md:w-[80%] lg:w-full' >Founded by <span className='font-bold'>Dhruchita Patel</span>, a seasoned engineer and educator with over 20 years of industry experience, and <span className='font-bold'>Tanay Patel</span>, a passionate young innovator and a senior at the Gwinnett School of Mathematics, Science, and Technology—our academy brings together real-world expertise and a student’s perspective on modern learning.</p>
        <p className='font-montserrat text-sm lg:text-lg xl:text-sm 2xl:text-base tracking-wide text-white text-justify md:w-[80%] lg:w-full' >We believe STEM is about more than just coding or playing with gadgets—it’s about understanding the world in a deeper, more connected way. While video games and smartphones may grab attention, we guide students beyond the screen and into the exciting realms of civil, mechanical, electrical, and optical engineering. Through interactive, project-based learning, we help children explore these fields in fun, accessible, and meaningful ways.</p>
        <p className='font-montserrat text-sm lg:text-lg xl:text-sm 2xl:text-base tracking-wide text-white text-justify md:w-[80%] lg:w-full' >At Spark STEM Academy, students don’t just memorize science—they experience it. Whether they’re building bridges, designing circuits, or playing with light and illusion, we help them connect with the science that surrounds them every day.</p>
        <p className='font-montserrat text-sm lg:text-lg xl:text-sm 2xl:text-base tracking-wide text-white text-justify md:w-[80%] lg:w-full' >We’re here to make science and technology come alive—one project, one spark of curiosity at a time.</p>
        </div>
        </div>      
    </div>
  )
}

export default AboutUs2