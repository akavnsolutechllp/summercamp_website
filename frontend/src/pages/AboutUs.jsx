import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import logo from '../assets/logo.png';
import vect1 from '../assets/5.png';
import vect2 from '../assets/14.png'
import vect3 from '../assets/18.png';


const About = () => {
  const { scrollYProgress } = useScroll();

  // Animation values for first box
  const firstBoxOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const firstBoxY = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
  const firstBoxScale = useTransform(scrollYProgress, [0.3, 0.3], [0.8, 1] );

  // Animation values for second box
  const secondBoxOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const secondBoxY = useTransform(scrollYProgress, [0.2, 0.4], [100, 0]);
  const secondBoxScale = useTransform(scrollYProgress, [0.3, 0.5], [0.8, 1]);

  return (
    <div id='about' className='min-h-screen h-auto w-full bg-gradient-to-b from-[#16003E] via-[#16003E] to-[#283253] flex flex-col md:flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 py-10 px-4 lg:mt-0 relative mb-0'>
      <div className='w-full flex justify-center items-center'>
        <img src={logo} alt="" className='w-full xl:w-1/2 2xl:w-1/2 bg-white rounded-full' />
      </div>
      <div className='h-auto w-full lg:text-xl flex flex-col justify-center items-start md:items-center lg:items-start xl:items-start gap-4 lg:px-8 z-20'>
      <h2 className='font-gardion w-full 2xl:w-auto text-center lg:text-start text-6xl md:text-7xl lg:text-9xl xl:text-7xl 2xl:text-9xl text-[#E31DB0] text-stroke drop-shadow-md drop-shadow-[#EE5073]'>About Us</h2>
        <p className='font-montserrat lg:text-lg xl:text-sm tracking-wide text-white font-bold'>Welcome to Spark STEM Academy!</p>
        <p className='font-montserrat font-light lg:text-lg xl:text-sm tracking-wide text-white text-justify md:w-[80%] lg:w-full' >At Spark STEM Academy, we’re on a mission to spark curiosity and inspire the next generation of innovators through hands-on experiences in Science, Technology, Engineering, and Math.</p>
        <p className='font-montserrat lg:text-lg xl:text-sm tracking-wide text-white text-justify md:w-[80%] lg:w-full' >Founded by <span className='font-bold'>Dhruchita Patel</span>, a seasoned engineer and educator with over 20 years of industry experience, and <span className='font-bold'>Tanay Patel</span>, a passionate young innovator and a senior at the Gwinnett School of Mathematics, Science, and Technology—our academy brings together real-world expertise and a student’s perspective on modern learning.</p>
        <p className='font-montserrat lg:text-lg xl:text-sm tracking-wide text-white text-justify md:w-[80%] lg:w-full' >We believe STEM is about more than just coding or playing with gadgets—it’s about understanding the world in a deeper, more connected way. While video games and smartphones may grab attention, we guide students beyond the screen and into the exciting realms of civil, mechanical, electrical, and optical engineering. Through interactive, project-based learning, we help children explore these fields in fun, accessible, and meaningful ways.</p>
        <p className='font-montserrat lg:text-lg xl:text-sm tracking-wide text-white text-justify md:w-[80%] lg:w-full' >At Spark STEM Academy, students don’t just memorize science—they experience it. Whether they’re building bridges, designing circuits, or playing with light and illusion, we help them connect with the science that surrounds them every day.</p>
        <p className='font-montserrat lg:text-lg xl:text-sm tracking-wide text-white text-justify md:w-[80%] lg:w-full' >We’re here to make science and technology come alive—one project, one spark of curiosity at a time.</p>
      </div>
      <img src={vect1} alt="" className='hidden lg:block w-1/3 xl:w-[14%] 2xl:w-[10%]  absolute opacity-90 left-[2%] top-[12%]'  />
      <img src={vect2} alt="" className='hidden lg:block w-1/5 xl:w-[14%] 2xl:w-[10%]  absolute opacity-90 top-[60%] left-[36%]'  />
      <img src={vect3} alt="" className='hidden lg:block w-1/5 xl:w-[14%] 2xl:w-[10%]  absolute opacity-90 top-[10%] left-[30%] top-8'  />
    </div>
  )
}

export default About;
