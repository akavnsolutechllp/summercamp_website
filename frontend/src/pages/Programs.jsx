import React from 'react';
import { IoLocationSharp } from "react-icons/io5";

import { motion } from 'framer-motion'

import smallrainbow from '../assets/small-rainbow2.png'
import stem from '../assets/stem.jpg';
import inventor from '../assets/inventors.jpg';
import robot from '../assets/robot.jpg';
import circuit from '../assets/circuit.jpg';
import eco from '../assets/eco_explorer.jpg'
import mini from '../assets/mini_stem.jpg'

import bg from '../assets/cards-bg.jpeg'

import vect17 from '../assets/17.png';

import map from '../assets/MAP.png';
import location from '../assets/location.png';

const Programs = () => {

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };
  
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 }
    })
  };

  return (
    <div className='min-h-screen h-auto w-full bg-gradient-to-b from-[#FF0066]/10 flex flex-col justify-start items-center gap-2 p-4' >
        <h2 className='font-montserrat font-semibold bg-white border border-[#4281FF] p-2 rounded-lg text-6xl text-[#4281FF]'>Programs</h2>
        <div className='h-auto w-full 2xl:w-[80%] flex flex-col 2xl:grid 2xl:grid-cols-3 justify-center items-center gap-8 mt-4'>
            <motion.div 
             variants={cardVariant}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
            className='h-auto w-full 2xl:h-[60vh] flex flex-col justify-center items-center gap-2 z-10 border border-[#FE1219]/20 shadow-xl shadow-black/30 rounded-2xl p-4 relative overflow-hidden' >
              <img src={bg} alt="" className='absolute w-full h-full object-cover z-10 opacity-40' />
                <motion.h1 custom={0} variants={textVariant} className='font-montserrat font-semibold text-4xl text-white bg-[#FE1219] p-1 rounded-lg z-20'>Stem Builders</motion.h1>
                <motion.img  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} src={stem} alt="" className='rounded-lg z-20 2xl:w-[60%]' />
                <motion.h3 custom={1} variants={textVariant} className='font-montserrat text-[#FE1219] bg-white border p-2 rounded-lg text-center text-xl mt-2 z-20'>Engineering & Structures</motion.h3>
                <motion.p custom={2} variants={textVariant} className='font-montserrat text-sm text-black border bg-white p-2 rounded-lg text-center z-20'> Put your engineering skills-to the text as you desig-and build towers,bridges, and more! </motion.p>
            </motion.div>
            <motion.div 
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className='h-auto w-full 2xl:h-[60vh] flex flex-col justify-center items-center gap-2 z-10 border border-[#FDA216]/20 shadow-xl shadow-black/30 rounded-2xl p-4 relative overflow-hidden' >
                 <img src={bg} alt="" className='absolute w-full h-full object-cover z-10 opacity-40' />
                <motion.h1 custom={0} variants={textVariant} className='font-montserrat font-semibold text-4xl text-white bg-[#FDA216] p-1 rounded-lg text-center z-20'>Inventor’s Workshop</motion.h1>
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} src={inventor} alt="" className='rounded-lg z-20 2xl:w-[60%]' />
                <motion.h3 custom={1} variants={textVariant} className='font-montserrat text-[#FDA216] bg-white border py-2 px-8 rounded-lg text-center text-xl mt-2 z-20'>Design Thinking & Problem-Solving</motion.h3>
                <motion.p custom={2} variants={textVariant} className='font-montserrat text-sm text-black border bg-white p-2 rounded-lg text-center z-20'> Bring your ideas to life! Solve problems by inve-riting prototypes of your own creations. </motion.p>
            </motion.div>
            <motion.div 
             variants={cardVariant}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className='h-auto w-full 2xl:h-[60vh] flex flex-col justify-center items-center gap-2 z-10 border border-[#F60E9A]/20 shadow-xl shadow-black/30 rounded-2xl p-4 relative overflow-hidden' >
                <img src={bg} alt="" className='absolute w-full h-full object-cover z-10 opacity-40' />
                <motion.h1 custom={0} variants={textVariant} className='font-montserrat font-semibold text-4xl text-white bg-[#F60E9A] p-1 rounded-lg text-center z-20'>Robo Coding Camp</motion.h1>
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} src={robot} alt="" className='rounded-lg z-20 2xl:w-[60%]' />
                <motion.h3 custom={1} variants={textVariant} className='font-montserrat text-[#F60E9A] border bg-white py-2 px-12 text-center rounded-lg text-xl mt-2 z-20'>Coding, Robotics, and Circuits</motion.h3>
                <motion.p custom={2} variants={textVariant} className='font-montserrat text-sm text-black border bg-white text-center p-2 rounded-lg z-20'> Discover the world of coding and robotics! Learn to program robots and games. </motion.p>
            </motion.div>
            <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} 
            className='h-auto w-full 2xl:h-[60vh] flex flex-col justify-center items-center gap-2 z-10 border border-[#2f710b]/20 shadow-xl shadow-black/30 rounded-2xl p-4 relative overflow-hidden' >
                <img src={bg} alt="" className='absolute w-full h-full object-cover z-10 opacity-40' />
                <motion.h1 custom={0} variants={textVariant} className='font-montserrat font-semibold text-4xl text-white bg-[#2f710b] p-1 rounded-lg z-20'>Circuit Science</motion.h1>
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} src={circuit} alt="" className='rounded-lg z-20 2xl:w-[60%]' />
                <motion.h3 custom={1} variants={textVariant} className='font-montserrat text-[#2f710b] bg-white py-2 px-16 border text-center rounded-lg text-xl mt-2 z-20'>Coding, Robotics, and Circuits</motion.h3>
                <motion.p custom={2} variants={textVariant} className='font-montserrat text-sm text-black bg-white border text-center p-2 rounded-lg z-20'> Discover the world of coding and robotics! Learn to program robots and games. </motion.p>
            </motion.div>
            <motion.div 
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} 
            className='h-auto w-full 2xl:h-[60vh] flex flex-col justify-center items-center gap-2 z-10 border border-[#1290c2]/20 shadow-xl shadow-black/30 rounded-2xl p-4 relative overflow-hidden' >
                 <img src={bg} alt="" className='absolute w-full h-full object-cover z-10 opacity-40' />
                <motion.h1 custom={0} variants={textVariant} className='font-montserrat font-semibold p-2 rounded-lg text-center text-4xl text-white bg-[#1290c2] z-20'>Eco Explorers</motion.h1>
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} src={eco} alt="" className='rounded-lg z-20 2xl:w-[60%]' />
                <motion.h3 custom={1} variants={textVariant} className='font-montserrat text-[#1290c2] bg-white p-2 rounded-lg border text-center text-xl mt-2 z-20'>Environment & Sustainability</motion.h3>
                <motion.p custom={2} variants={textVariant} className='font-montserrat text-sm text-black bg-white p-2 rounded-lg border text-center rounded-lg z-20'> Discover the wonders of nature! investigace ecosystems, sustainabi-lity, and more. </motion.p>
            </motion.div>
            <motion.div 
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} 
            className='h-auto w-full 2xl:h-[60vh] flex flex-col justify-center items-center gap-2 z-10 border border-[#F60E9A]/20 shadow-xl shadow-black/30 rounded-2xl p-4 relative overflow-hidden' >
                <img src={bg} alt="" className='absolute w-full h-full object-cover z-10 opacity-40' />
                <motion.h1 custom={0} variants={textVariant} className='font-montserrat text-3xl text-white bg-[#673190] p-2 rounded-lg text-center z-20'>Mini Makers (STEAM)</motion.h1>
                <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} src={mini} alt="" className='rounded-lg z-20 2xl:w-[60%]' />
                <motion.h3 custom={1} variants={textVariant} className='font-montserrat text-[#673190] bg-white p-2 rounded-lg border text-center text-2xl mt-2 z-20'>Science + Art (STEAM)</motion.h3>
                <motion.p custom={2} variants={textVariant} className='font-montserrat text-sm text-black bg-white p-2 rounded-lg text-center border z-20'> Combine science and art as you create wear-able art, scribbibung machines, and more! </motion.p>
            </motion.div>
        </div>
        <div className='h-auto w-full flex flex-col justify-center items-center gap-2 mt-4 2xl:mt-12' >
            <h2 className='font-montserrat font-semibold text-2xl 2xl:text-6xl z-10 bg-[#FE1219] p-2 text-white rounded-lg'>Programs by Location</h2>
            <div className='h-auto w-full 2xl:w-[80%] flex flex-col 2xl:grid 2xl:grid-cols-3  justify-center items-start font-montserrat shadow-md shadow-black/20 p-2 rounded-lg z-10 gap-8'>
                
                <div className='w-full h-auto flex flex-col justify-center items-start border border-black/40 p-2 gap-2 rounded-xl'>
                <h1 className='text-2xl mb-3'>📍GSMST </h1>
                <h3 className='text-2xl font-light px-2'>June 2 - June 5</h3>
                <div className='mb-4 w-full flex flex-col justify-center items-start px-2 bg-white shadow-lg p-2 rounded-xl text-lg'>
                  <h3 className='text-lg bg-[#208cda] text-white p-1 rounded-lg'>Morning Camp (9AM - 12PM)</h3>
                  <h4 className='text-xl p-1'>Inventor’s Workshop</h4>
                  <h3 className='text-lg bg-[#208cda] text-white p-1 rounded-lg mt-4'>Afternoon Camp (1PM – 4PM)</h3>
                  <h4 className='text-xl p-1'>Circuit Science</h4>
                </div>
                </div>

                <div className='w-full h-auto flex flex-col justify-center items-start border border-black/40 p-2 gap-2 rounded-xl'>
                <h1 className='text-2xl mb-3'>📍Northview High School </h1>
                <h3 className='text-2xl font-light px-2'>June 9 – June 12</h3>
                <div className='mb-4 w-full flex flex-col justify-center items-start px-2 bg-white shadow-lg p-2 rounded-xl text-lg'>
                  <h3 className='text-lg bg-[#208cda] text-white p-1 rounded-lg'>Morning Camp (9AM - 12PM)</h3>
                  <h4 className='text-xl p-1'>Inventor’s Workshop</h4>
                  <h3 className='text-lg bg-[#208cda] text-white p-1 rounded-lg mt-4'>Afternoon Camp (1PM – 4PM)</h3>
                  <h4 className='text-xl p-1'>Circuit Science</h4>
                </div>
                </div>

                <div className='w-full h-auto flex flex-col justify-center items-start border border-black/40 p-2 gap-2 rounded-xl'>
                <h1 className='text-lg mb-3'>📍North Gwinnett Middle School </h1>
                <h3 className='text-2xl font-light px-2'>June 16 – June 19</h3>
                <div className='mb-4 w-full flex flex-col justify-center items-start px-2 bg-white shadow-lg p-2 rounded-xl text-lg'>
                  <h3 className='text-lg bg-[#208cda] text-white p-1 rounded-lg'>Morning Camp (9AM - 12PM)</h3>
                  <h4 className='text-xl p-1'>Inventor’s Workshop</h4>
                  <h3 className='text-lg bg-[#208cda] text-white p-1 rounded-lg mt-4'>Afternoon Camp (1PM – 4PM)</h3>
                  <h4 className='text-xl p-1'>Circuit Science</h4>
                </div>
                </div>

                <div className='w-full h-auto flex flex-col justify-center items-start border border-black/40 p-2 gap-2 rounded-xl'>
                <h1 className='text-2xl mb-3'>📍Alpharetta High School</h1>
                <h3 className='text-2xl font-light px-2'>June 23 – June 26</h3>
                <div className='mb-4 w-full flex flex-col justify-center items-start px-2 bg-white shadow-lg p-2 rounded-xl text-lg'>
                  <h3 className='text-lg bg-[#208cda] text-white p-1 rounded-lg'>Morning Camp (9AM - 12PM)</h3>
                  <h4 className='text-xl p-1'>Inventor’s Workshop</h4>
                  <h3 className='text-lg bg-[#208cda] text-white p-1 rounded-lg mt-4'>Afternoon Camp (1PM – 4PM)</h3>
                  <h4 className='text-xl p-1'>Circuit Science</h4>
                </div>
                </div>

                <div className='w-full h-auto flex flex-col justify-center items-start border border-black/40 p-2 gap-2 rounded-xl'>
                <h1 className='text-2xl mb-3'>📍GSMST</h1>
                <h3 className='text-2xl font-light px-2'>June 30 – July 3</h3>
                <div className='mb-4 w-full flex flex-col justify-center items-start px-2 bg-white shadow-lg p-2 rounded-xl text-lg'>
                  <h3 className='text-lg bg-[#208cda] text-white p-1 rounded-lg'>Morning Camp (9AM - 12PM)</h3>
                  <h4 className='text-xl p-1'>STEM Builders</h4>
                  <h3 className='text-lg bg-[#208cda] text-white p-1 rounded-lg mt-4'>Afternoon Camp (1PM – 4PM)</h3>
                  <h4 className='text-xl p-1'>Robo Coding Camp</h4>
                </div>
                </div>

                <div className='w-full h-auto flex flex-col justify-center items-start border border-black/40 p-2 gap-2 rounded-xl'>
                <h1 className='text-2xl mb-3'>📍Northview High School</h1>
                <h3 className='text-2xl font-light px-2'>July 7 – July 10</h3>
                <div className='mb-4 w-full flex flex-col justify-center items-start px-2 bg-white shadow-lg p-2 rounded-xl text-lg'>
                  <h3 className='text-lg bg-[#208cda] text-white p-1 rounded-lg'>Morning Camp (9AM - 12PM)</h3>
                  <h4 className='text-xl p-1'>STEM Builders</h4>
                  <h3 className='text-lg bg-[#208cda] text-white p-1 rounded-lg mt-4'>Afternoon Camp (1PM – 4PM)</h3>
                  <h4 className='text-xl p-1'>Robo Coding Camp</h4>
                </div>
                </div>

                <div className='w-full h-auto flex flex-col justify-center items-start border border-black/40 p-2 gap-2 rounded-xl'>
                <h1 className='text-lg mb-3'>📍North Gwinnett Middle School</h1>
                <h3 className='text-2xl font-light px-2'>July 14 – July 17</h3>
                <div className='mb-4 w-full flex flex-col justify-center items-start px-2 bg-white shadow-lg p-2 rounded-xl text-lg'>
                  <h3 className='text-lg bg-[#208cda] text-white p-1 rounded-lg'>Morning Camp (9AM - 12PM)</h3>
                  <h4 className='text-xl p-1'>STEM Builders</h4>
                  <h3 className='text-lg bg-[#208cda] text-white p-1 rounded-lg mt-4'>Afternoon Camp (1PM – 4PM)</h3>
                  <h4 className='text-xl p-1'>Robo Coding Camp</h4>
                </div>
                </div>

            </div>
        </div>
        <div className='h-auto w-full flex flex-col justify-start items-center bg-[#208cda] rounded-3xl px-4 py-2 gap-2 relative mt-4 mb-4'>
            <h2 className='font-montserrat font-bold text-3xl text-white'>Timings</h2>
            <h4 className='font-montserrat text-xl bg-white w-full text-center rounded-2xl'>Monday - Thursday</h4>
            <div className='w-full h-auto flex justify-center items-center gap-2 relative'>
                  <div className='min-h-[10vh] w-full bg-[#a9dbff] border border-white rounded-xl flex flex-col justify-center items-center font-montserrat text-lg font-medium' >
                    <h1>Morning</h1>
                    <h4>9 AM - 12 PM</h4>
                  </div>
                  <div className='min-h-[10vh] w-full bg-[#a9dbff] border border-white rounded-xl flex flex-col justify-center items-center font-montserrat text-lg font-medium' >
                  <h1>Afternoon</h1>
                  <h4>1 PM - 4 PM</h4>
                  </div>
            </div>
            <div>

            </div>
            <img src={vect17} alt="" className='absolute w-1/3 -top-8 left-0' />
            <img src={vect17} alt="" className='absolute w-1/3 -top-8 right-0' />
        </div>
        <div className='h-auto w-full flex flex-col justify-start items-center bg-[#FE1219] rounded-3xl px-4 py-2 overflow-hidden py-2 relative'>
          <h2 className='font-montserrat font-bold text-3xl text-white'>Location</h2>
          <div className='h-auto w-full bg-white flex flex-col justify-center items-center rounded-3xl p-2' >
              <div className='h-auto w-full flex flex-col justify-center items-center'>
                <img src={location} alt="" className='w-1/2 ' />
                <div className='flex flex-col justify-center items-start gap-8' >
                <h1 className='font-montserrat px-2 border-b border-dashed pb-4'>GSMST [970 McElvaney Ln NW, Lawrenceville, GA 30044]</h1>
                <h1 className='font-montserrat px-2 border-b border-dashed pb-4'>North Gwinnett Middle School [170 Peachtree Industrial Blvd, Sugar Hill, GA 30518]</h1>
                <h1 className='font-montserrat px-2'>Northview Middle School [10625 Parsons Rd, Johns Creek, GA 30097]</h1>
                </div>
              </div>  
          </div>
        </div>
        <div className='h-auto w-full flex flex-col justify-center items-center border  rounded-3xl px-4 py-2 overflow-hidden relative mt-4'>
        <h2 className='font-montserrat font-bold text-3xl'>Fees</h2>
        <div className='h-full w-full flex flex-col justify-center items-center gap-2 '>
            <div className='flex flex-col justify-center items-center w-full p-2 gap-4'>
              <div className='w-full flex justify-between items-center p-2 font-montserrat rounded-lg text-2xl'>
                <h1>HalfDay</h1>
                <h1>$230</h1>
              </div>
              <div className='w-full flex justify-between items-center p-2 font-montserrat rounded-lg text-2xl'>
                <h1>Full Day</h1>
                <h1>$430</h1>
              </div>
            </div>
        </div>
        </div>
        <a href='/register' className='bg-[#FF0066] px-4 py-2 text-white font-montserrat text-lg rounded-lg'>Enroll Now</a>
    </div>
  )
}

export default Programs;

{/* <div className='w-full min-h-screen h-auto flex flex-col justify-start items-center gap-4 p-4 relative'>
      <h2 className='font-milky text-5xl text-[#FF0066]'>Programs</h2>
      <img src={smallrainbow} alt="" className='absolute w-full h-full top-36 opacity-25 xl:hidden' />
        <div className='h-full w-full flex flex-col justify-center items-start '>
            <h2 className='font-milky text-4xl text-[#4281FF]'>Locations:</h2>
            <ul className='w-full flex flex-col justify-center items-start gap-6 font-montserrat'>
              <li className='px-4 py-1 rounded-xl bg-[#f0940b] text-white'>GSMST [970 McElvaney Ln NW, Lawrenceville, GA 30044]</li>
              <li className='px-4 py-1 rounded-xl bg-[#f0940b] text-white' >North Gwinnett Middle School [170 Peachtree Industrial Blvd, Sugar Hill, GA 30518]</li>
              <li className='px-4 py-1 rounded-xl bg-[#f0940b] text-white' >Northview Middle School [10625 Parsons Rd, Johns Creek, GA 30097]</li>
            </ul>
        </div>
        <div className='h-full w-full flex flex-col justify-center items-start '>
          <h2 className='font-milky text-4xl text-[#4281FF]'>Timings:</h2>
          <h4 className='font-montserrat text-xl'>Monday - Thursday</h4>
          <div className='w-full flex flex-col justify-center items-start'>
              <h6 className='font-montserrat'>	Morning: 9am - 12pm </h6>
              <h6 className='font-montserrat'>	Afternoon: 1pm - 4pm </h6>
          </div>
      </div>
        <div className='h-auto w-full flex flex-col justify-center items-start gap-2' >
            <h2 className='font-milky text-6xl text-[#4281FF] z-10'>Programs by Location:</h2>
            <div className='h-auto w-full flex flex-col justify-start items-center gap-6'>
              <div className='h-auto w-full flex flex-col justify-center items-start font-montserrat bg-[#FF0066] p-2 rounded-lg z-10'>
                <h1 className='text-4xl text-white'>GSMST </h1>
                <h3 className='text-xl font-light text-white'>Week 1 [June 2 - June 5]</h3>
                <ul className='mb-4 list-disc px-8 text-white'>
                  <li>STEM Builders</li>
                  <li>Inventor’s Workshop</li>
                </ul>
                <h3 className='text-xl font-light text-white'>Week 2 [June 9 - June 12]</h3>
                <ul className='mb-4 list-disc px-8 text-white'>
                  <li>Robo Coding Camp</li>
                  <li>Eco Explorers</li>
                </ul>
                <h3 className='text-xl font-light text-white'>Week 3 [June 16 - June 19]</h3>
                <ul className='mb-4 list-disc px-8 text-white'>
                  <li>Circuit Science</li>
                  <li>Mini Makers (STEAM)</li>
                </ul>
              </div>
              <div className='h-auto w-full flex flex-col justify-center items-start font-montserrat bg-[#FF0066] p-2 rounded-lg z-10'>
                <h1 className='text-2xl text-white'>North Gwinnett Middle School </h1>
                <ul className='mb-4 list-disc px-8 text-white'>
                  <li>Robo Coding Camp</li>
                  <li>Eco Explorers</li>
                </ul>
              </div>
              <div className='h-auto w-full flex flex-col justify-center items-start font-montserrat bg-[#FF0066] p-2 rounded-lg z-10'>
                <h1 className='text-2xl text-white'>Northview High School</h1>
                <ul className='mb-4 list-disc px-8 text-white' >
                  <li>Circuit Science</li>
                  <li>Mini Makers (STEAM)</li>
                </ul>
              </div>
            </div>
        </div>
        <div className='h-auto w-full flex flex-col justify-center items-center gap-4'>
            <div className='h-auto w-full flex flex-col justify-start items-start z-10 bg-[#FF8400] rounded-2xl p-2' >
                <h1 className='font-montserrat text-4xl text-white'>Stem Builders</h1>
                <img src={stem} alt="" className='rounded-lg' />
                <h3 className='font-montserrat text-white text-2xl mt-2'>Engineering & Structures</h3>
                <p className='font-montserrat text-sm text-white'> Put your engineering skills-to the text as you desig-and build towers,bridges, and more! </p>
            </div>
            <div className='h-auto w-full flex flex-col justify-start items-start z-10 bg-[#16E7FE] rounded-2xl p-2' >
                <h1 className='font-montserrat text-4xl text-white'>Inventor’s Workshop</h1>
                <img src={inventor} alt="" className='rounded-lg' />
                <h3 className='font-montserrat text-white text-2xl mt-2'>Design Thinking & Problem-Solving</h3>
                <p className='font-montserrat text-sm text-white'> Bring your ideas to life! Solve problems by inve-riting prototypes of your own creations. </p>
            </div>
            <div className='h-auto w-full flex flex-col justify-start items-start z-10 bg-[#5C67FF] rounded-2xl p-2' >
                <h1 className='font-montserrat text-4xl text-white'>Robo Coding Camp</h1>
                <img src={robot} alt="" className='rounded-lg' />
                <h3 className='font-montserrat text-white text-2xl mt-2'>Coding, Robotics, and Circuits</h3>
                <p className='font-montserrat text-sm text-white'> Discover the world of coding and robotics! Learn to program robots and games. </p>
            </div>
            <div className='h-auto w-full flex flex-col justify-start items-start z-10 bg-[#18E3F2] rounded-2xl p-2' >
                <h1 className='font-montserrat text-4xl text-white'>Circuit Science</h1>
                <img src={circuit} alt="" className='rounded-lg' />
                <h3 className='font-montserrat text-white text-2xl mt-2'>Coding, Robotics, and Circuits</h3>
                <p className='font-montserrat text-sm text-white'> Discover the world of coding and robotics! Learn to program robots and games. </p>
            </div>
            <div className='h-auto w-full flex flex-col justify-start items-start z-10 bg-[#0FC60C] rounded-2xl p-2' >
                <h1 className='font-montserrat text-4xl text-white'>Eco Explorers</h1>
                <img src={eco} alt="" className='rounded-lg' />
                <h3 className='font-montserrat text-white text-2xl mt-2'>Environment & Sustainability</h3>
                <p className='font-montserrat text-sm text-white'> Discover the wonders of nature! investigace ecosystems, sustainabi-lity, and more. </p>
            </div>
            <div className='h-auto w-full flex flex-col justify-start items-start z-10 bg-[#0095FF] rounded-2xl p-2' >
                <h1 className='font-montserrat text-3xl text-white'>Mini Makers (STEAM)</h1>
                <img src={mini} alt="" className='rounded-lg' />
                <h3 className='font-montserrat text-white text-2xl mt-2'>Science + Art (STEAM)</h3>
                <p className='font-montserrat text-sm text-white'> Combine science and art as you create wear-able art, scribbibung machines, and more! </p>
            </div>
        </div>
    </div> */}

    // https://www.whizlearningkids.com/summercamp.html