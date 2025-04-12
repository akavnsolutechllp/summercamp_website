import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

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
    <div className='h-screen w-full bg-[#2E8B57] flex flex-col justify-center items-center gap-8 py-10 px-4'>
      <h1 className='text-[12vw] 2xl:text-[2.5vw] font-switzal text-[#5D4037] border-4 border-[#5D4037] shadow-lg bg-[#F5F5DC] px-4'>
        About Us
      </h1>

      <motion.div
        style={{ opacity: firstBoxOpacity, y: firstBoxY, scale:firstBoxScale }}
        className='h-[30vh] w-[96%] 2xl:w-[50%] 2xl:text-2xl bg-[#F5F5DC] border-4 border-[#5D4037] text-[#5D4037] flex justify-center items-center p-4 font-montserrat text-justify tracking-tight rounded-xl shadow-md'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa inventore voluptate adipisci dolor ducimus nesciunt sapiente nobis consequuntur expedita aut!
      </motion.div>

      <motion.div
        style={{ opacity: secondBoxOpacity, y: secondBoxY, scale: secondBoxScale }}
        className='h-[40vh] w-[96%] 2xl:w-[50%] 2xl:text-2xl bg-[#F5F5DC] border-4 border-[#5D4037] text-[#5D4037] flex justify-center items-center p-4 font-montserrat text-justify tracking-tight rounded-xl shadow-md'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore enim qui sint consectetur sit earum quam placeat at. Incidunt reprehenderit soluta officia error laboriosam iure doloremque, excepturi eligendi aut sed accusantium et ducimus minus distinctio deleniti dolorem? Vitae, voluptates perspiciatis.
      </motion.div>
    </div>
  )
}

export default About
