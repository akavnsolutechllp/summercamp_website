import React from 'react';
import {easeInOut, motion} from 'framer-motion';

const Program = () => {

  return (
    <div className='min-h-screen h-auto w-full flex flex-col justify-center items-center bg-[#F44336] px-4 py-4'>
        <h2 className='font-switzal text-6xl md:text-[8vw] xl:text-[6vw] text-white  bg-[#4FC3F7] p-2 border-4 border-white z-10'>Programs</h2>
        <div className='w-full h-auto flex flex-col justify-center items-center xl:grid xl:grid-cols-3 md:grid md:grid-cols-2 2xl:grid 2xl:grid-cols-3 2xl:justify-center 2xl:place-items-center gap-6 p-2 mt-4'>
            <div className='min-h-[20vh] h-auto md:min-h-[40vh] xl:min-h-[36vh] 2xl:min-h-[30vh] w-full bg-white flex flex-col justify-start items-start rounded-xl relative overflow-hidden p-4 gap-2'>
               <h2 className='font-switzal text-[#4FC3F7] text-3xl md:text-7xl xl:text-5xl 2xl:text-6xl'>Camp1</h2> 
               <h2 className='font-switzal text-[#F44336] text-5xl md:text-7xl xl:text-5xl 2xl:text-6xl'>STEM Builders</h2> 
               <p className='md:text-lg xl:text-sm text-xl text-black/80 font-montserrat tracking-tighter'>Engineering & Structures.</p>
               <motion.button whileHover={{scale:1.05}} transition={{stiffness:500, type:easeInOut}} className='bg-[#4FC3F7] px-4 py-2 font-switzal text-4xl text-white rounded-lg w-full 2xl:w-[40%] 2xl:hover:cursor-pointer'>Join Now</motion.button>
            </div>
            <div className='min-h-[20vh] h-auto md:min-h-[40vh] xl:min-h-[36vh] 2xl:min-h-[30vh] w-full bg-white flex flex-col justify-start items-start rounded-xl relative overflow-hidden p-4 gap-2'>
               <h2 className='font-switzal text-[#4FC3F7] text-3xl md:text-7xl xl:text-5xl 2xl:text-6xl'>Camp2</h2>
               <h2 className='font-switzal text-[#F44336] text-5xl md:text-7xl xl:text-5xl 2xl:text-6xl'>Inventor’s Workshop</h2> 
               <p className='md:text-lg xl:text-sm text-xl text-black/80 font-montserrat tracking-tighter'>Design Thinking & Problem-Solving.</p>
               <motion.button whileHover={{scale:1.05}} transition={{stiffness:500, type:easeInOut}} className='bg-[#4FC3F7] px-4 py-2 font-switzal text-4xl text-white rounded-lg w-full 2xl:w-[40%] 2xl:hover:cursor-pointer'>Join Now</motion.button>
            </div>
            <div className='min-h-[20vh] h-auto md:min-h-[40vh] xl:min-h-[36vh] 2xl:min-h-[30vh] w-full bg-white flex flex-col justify-start items-start rounded-xl relative overflow-hidden p-4 gap-6'>
               <h2 className='font-switzal text-[#4FC3F7] text-3xl md:text-7xl xl:text-5xl 2xl:text-6xl'>Camp3</h2>
               <h2 className='font-switzal text-[#F44336] text-5xl md:text-7xl xl:text-5xl 2xl:text-6xl'>Robo Coding Camp</h2> 
               <p className='md:text-lg xl:text-sm text-xl text-black/80 font-montserrat tracking-tighter'>Coding, Robotics, and Circuits</p>
               <motion.button whileHover={{scale:1.05}} transition={{stiffness:500, type:easeInOut}} className='bg-[#4FC3F7] px-4 py-2 font-switzal text-4xl text-white rounded-lg w-full 2xl:w-[40%] 2xl:hover:cursor-pointer'>Join Now</motion.button>
            </div>
            <div className='min-h-[20vh] h-auto md:min-h-[40vh] xl:min-h-[36vh] 2xl:min-h-[30vh] w-full bg-white flex flex-col justify-start items-start rounded-xl relative overflow-hidden p-4 gap-6'>
               <h2 className='font-switzal text-[#4FC3F7] text-3xl md:text-7xl xl:text-5xl 2xl:text-6xl'>Camp4</h2>
               <h2 className='font-switzal text-[#F44336] text-5xl md:text-7xl xl:text-5xl 2xl:text-6xl'>Circuit Science</h2> 
               <p className='md:text-lg xl:text-sm text-xl text-black/80 font-montserrat tracking-tighter'>Electricity & Circuits</p>
               <motion.button whileHover={{scale:1.05}} transition={{stiffness:500, type:easeInOut}} className='bg-[#4FC3F7] px-4 py-2 font-switzal text-4xl text-white rounded-lg w-full 2xl:w-[40%] 2xl:hover:cursor-pointer'>Join Now</motion.button>
            </div>
            <div className='min-h-[40vh] h-auto md:min-h-[40vh] xl:min-h-[36vh] 2xl:min-h-[30vh] w-full bg-white flex flex-col justify-start items-start rounded-xl relative overflow-hidden p-4 gap-6'>
               <h2 className='font-switzal text-[#4FC3F7] text-3xl md:text-7xl xl:text-5xl 2xl:text-6xl'>Camp5</h2>
               <h2 className='font-switzal text-[#F44336] text-5xl md:text-7xl xl:text-5xl 2xl:text-6xl'>Eco Explorers</h2> 
               <p className='md:text-lg xl:text-sm text-xl text-black/80 font-montserrat tracking-tighter'>Environment & Sustainability</p>
               <motion.button whileHover={{scale:1.05}} transition={{stiffness:500, type:easeInOut}} className='bg-[#4FC3F7] px-4 py-2 font-switzal text-4xl text-white rounded-lg w-full 2xl:w-[40%] 2xl:hover:cursor-pointer'>Join Now</motion.button>
            </div>
            <div className='min-h-[40vh] h-auto md:min-h-[40vh] xl:min-h-[36vh] 2xl:min-h-[30vh] w-full bg-white flex flex-col justify-start items-start rounded-xl relative overflow-hidden p-4 gap-6'>
            <h2 className='font-switzal text-[#4FC3F7] text-3xl md:text-7xl xl:text-5xl 2xl:text-6xl'>Camp6</h2>
               <h2 className='font-switzal text-[#F44336] text-5xl md:text-7xl xl:text-5xl 2xl:text-6xl'>Mini Makers (STEAM)</h2> 
               <p className='md:text-lg xl:text-sm text-xl text-black/80 font-montserrat tracking-tighter'>Science + Art (STEAM)</p>
               <motion.button whileHover={{scale:1.05}} transition={{stiffness:500, type:easeInOut}} className='bg-[#4FC3F7] px-4 py-2 font-switzal text-4xl text-white rounded-lg w-full 2xl:w-[40%] 2xl:hover:cursor-pointer'>Join Now</motion.button>
            </div>
        </div>
    </div>
  )
}

export default Program;