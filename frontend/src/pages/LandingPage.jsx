import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import cloud from '../assets/cloud.webp';
import cloud2 from '../assets/cloud2.webp';
import birds from '../assets/birds.png';
import tree from '../assets/tree.png';

const LandingPage = () => {
  //scroll progress calculator.
  const { scrollYProgress } = useScroll();

  // Cloud movement based on scroll
  const cloudLeftX = useTransform(scrollYProgress, [0, 0.3], [0, -150]); // move left
  const cloudRightX = useTransform(scrollYProgress, [0, 0.3], [0, 150]);  // move right

  //Birds movement based on scroll
  const birdX = useTransform(scrollYProgress, [0, 0.5], [0, 600]); // horizontal movement
  const birdY = useTransform(scrollYProgress, [0, 0.5], [0, -300]); // slight up

  //Sun movement based on scroll
  const sunY = useTransform(scrollYProgress, [0,0.5],[0,300])

  return (
    <div className='min-h-[74vh] xl:min-h-[90vh] 2xl:min-h-[85vh] w-full flex flex-col justify-center items-center bg-gradient-to-t from-[#4fa3f7] via-[#4fc2f7d8] to-[#4fc2f746] text-[#ffffff] relative py-4'>

      <motion.div
        initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, stiffness: 500, damping: 10 }}
        style={{y:sunY}}
        className='h-32 w-32 2xl:h-44 2xl:w-44 bg-[#FFC107] rounded-full absolute top-4'
      />

      <motion.img
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        style={{ x: cloudLeftX }}
        transition={{ duration: 2 }}
        src={cloud}
        alt="clouds"
        className='w-1/2 2xl:w-1/5 xl:w-1/4 absolute top-20 left-4'
      />

      <motion.img
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        style={{ x: cloudRightX }}
        transition={{ duration: 2 }}
        src={cloud2}
        alt="clouds"
        className='w-1/3 2xl:w-1/6 xl:w-1/4 absolute bottom-32 2xl:bottom-64 right-1'
      />

<motion.img
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  style={{ x: birdX, y: birdY }}
  transition={{ duration: 2, stiffness: 50 }}
  src={birds}
  alt="birds"
  className='w-1/2 2xl:w-1/5 xl:w-1/4 absolute bottom-20 xl:left-32 2xl:left-44'
/>

      <img
        src={tree}
        alt="trees"
        className='w-1/4 2xl:w-1/10 xl:w-1/8 absolute -bottom-2 2xl:-bottom-6 xl:-bottom-8 2xl:left-20 left-4'
      />

      <div className='h-auto w-full flex flex-col justify-center items-center gap-2'>
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='text-[12vw] 2xl:text-[6vw] xl:text-[7vw] font-nabana z-10 mt-4 2xl:mt-8'
        >
          Summer Camp
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className='text-[10vw] 2xl:text-[5vw] xl:text-[6vw] font-nabana -mt-2'
        >
          2025
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 2, stiffness: 50 }}
          className='bg-[#FFC107] px-6 py-1 rounded-full font-switzal text-[8vw] xl:text-[3vw] 2xl:text-[1.8vw] text-white drop-shadow-2xl border border-white mt-4'
        >
          Register Now
        </motion.button>
      </div>
    </div>
  );
};

export default LandingPage;
