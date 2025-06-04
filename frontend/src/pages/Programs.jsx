import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { GrLocationPin } from "react-icons/gr";

import { motion } from 'framer-motion'

import stem from '../assets/stem.jpg';
import inventor from '../assets/inventors.jpg';
import robo from '../assets/robot.jpg';
import circuit from '../assets/circuit.jpg';
import eco from '../assets/eco_explorer.jpg';
import mini from '../assets/mini_stem.jpg';

import map from '../assets/MAP.png';
import location from '../assets/location.png';
import Navbar from '../Components/Navbar';
import Menu from '../Components/Menu';

const Programs = () => {

  const navigate = useNavigate();

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

  const handleRegister = () =>{
    navigate('/register')
  }

  return (
    <div className='min-h-screen h-auto w-full bg-[#16003E] flex flex-col justify-start items-center pb-6' >
      <Navbar/>
      <Menu/>
      <h2 className="font-montserrat uppercase text-5xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl p-2 rounded-lg text-[#E31DB0] drop-shadow-md drop-shadow-[#FF0066] z-20 text-stroke">
        Programs
      </h2>
      <motion.div className="w-full md:w-[60%] lg:w-[80%] xl:w-[76%] 2xl:w-[62%] h-auto flex flex-col justify-start items-center md:grid md:grid-cols-1 lg:grid lg:grid-cols-2 md:gap-8 lg:gap-6 xl:gap-8 gap-4 px-4 py-4 z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{scale:1.02}}
          className="h-auto w-full min-h-[16vh] lg:h-[86vh] xl:h-[66vh] 2xl:h-[50vh] bg-white/5 border-2 border-[#F79824] flex flex-col justify-around items-center rounded-2xl gap-3 p-4 md:p-4 relative overflow-hidden"
        >
          <h1 className="font-montserrat text-2xl md:text-6xl lg:text-3xl xl:text-2xl 2xl:text-3xl text-white w-full z-20">
            STEM Builders
          </h1>
          <div className="h-[40%] w-full flex justify-center items-center z-20">
            <img src={stem} alt="" className='w-[80%] lg:w-[66%] xl:w-[54%] 2xl:w-[44%]' />
          </div>
          <h3 className="text-white bg-[#F79824] p-1 border rounded-lg text-center text-lg xl:text-base 2xl:text-lg font-montserrat  w-full z-20">
            Engineering & Structures
          </h3>
          
          <h4 className='bg-white text-black p-1 border rounded-lg text-center  text-sm'>Calling all future engineers! In STEM Builders, campers will explore real world structural engineering concepts. From earthquake-safe towers to marble ramps and bridge-building contests, each day brings a new challenge.</h4>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{scale:1.02}}
          className="h-auto w-full min-h-[16vh] lg:h-[86vh] xl:h-[66vh] 2xl:h-[50vh] bg-white/5 border-2 border-[#E31DB0]  flex flex-col justify-around items-center rounded-2xl gap-3 p-4 md:p-4 relative overflow-hidden"
        >
          <h1 className="font-montserrat text-2xl md:text-6xl lg:text-3xl xl:text-2xl 2xl:text-3xl text-white w-full z-20">
            Inventor’s Workshop
          </h1>
          <div className="h-[40%] w-full flex justify-center items-center z-20">
            <img src={inventor} alt="" className='w-[80%] lg:w-[62%] xl:w-[52%] 2xl:w-[40%]' />
          </div>
          <h3 className="text-white bg-[#E31DB0] py-1 px-8 xl:px-12 2xl:px-2 border rounded-lg text-center text-lg xl:text-base 2xl:text-lg font-montserrat w-full z-20">
            Design Thinking & Problem-Solving
          </h3>
       
          <h4 className=' bg-white text-black p-1 border rounded-lg text-center  text-sm'> Young inventors dive into real-world problem solving as they design, build, and pitch their own creations! From crash-test cars to custom inventions, campers learn mechanical engineering and creativity through hands-on prototyping.</h4>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{scale:1.02}}
          className="h-auto w-full min-h-[16vh] lg:h-[86vh] xl:h-[66vh] 2xl:h-[50vh] bg-white/5 border-2 border-[#E31DB0]  flex flex-col justify-around items-center rounded-2xl gap-3 p-4 md:p-4 relative overflow-hidden"
        >
          <h1 className="font-montserrat text-2xl md:text-6xl lg:text-3xl xl:text-2xl 2xl:text-3xl text-white w-full z-20">
            Circuit Science
          </h1>
          <div className="h-[40%] w-full flex justify-center items-center z-20">
            <img src={circuit} alt="" className='w-[80%] lg:w-[66%] xl:w-[56%] 2xl:w-[64%]' />
          </div>
          <h3 className="text-white bg-[#E31DB0] p-1 border text-center rounded-lg text-lg xl:text-base  2xl:text-lg font-montserrat w-full z-20">
            Electricity & Circuits
          </h3>
         
          <h4 className=' bg-white text-black p-1 border rounded-lg text-center  text-sm'>Turn curiosity into circuitry! Campers will learn the basics of electricity by building light-up signs, touch-activated devices, and buzzer games — all using safe, hands-on materials. Every child takes home their own buzzing creation!</h4>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{scale:1.02}}
          className="h-auto w-full min-h-[16vh] lg:h-[86vh] xl:h-[66vh] 2xl:h-[50vh] bg-white/5 border-2 border-[#F79824] flex flex-col justify-around items-center rounded-2xl gap-3 p-4 md:p-4 relative overflow-hidden"
        >
          <h1 className="font-montserrat text-2xl md:text-6xl lg:text-3xl xl:text-2xl 2xl:text-3xl text-white w-full z-20">
            Mini Makers
          </h1>
          <div className="h-[40%] w-full flex justify-center items-center z-20">
            <img src={mini} alt="" className='w-[80%] lg:w-[68%] xl:w-[64%] 2xl:w-[70%]' />
          </div>
          <h3 className="text-white bg-[#F79824] p-1 border rounded-lg text-center text-lg xl:text-base  2xl:text-lg font-montserrat w-full z-20">
            Science + Art (STEAM)
          </h3>
          
          <h4 className='bg-white text-black p-1 border rounded-lg text-center  text-sm'>Where creativity meets engineering! Campers build scribble bots, race balloon-powered cars, and design musical machines — all while learning about motion, sound, and science. Every project goes home, and every child leaves as a proud Maker.</h4>
        </motion.div>

      </motion.div>
        <div className='h-auto w-full flex flex-col justify-center items-center gap-2 mt-4 2xl:mt-12' >
        <h2 className="font-montserrat uppercase text-5xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl p-2 rounded-lg text-white drop-shadow-md drop-shadow-[#FF0066] z-20 text-stroke">
        Locations
         </h2>
            <div className='h-auto w-full md:w-[60%] lg:w-[80%] xl:w-[74%] 2xl:w-[70%] flex flex-col lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2 2xl:grid 2xl:grid-cols-2  justify-center items-start font-montserrat p-4 rounded-lg z-10 gap-8'>
              
                <div className='w-full h-auto flex flex-col justify-center items-start bg-white 2xl:bg-[#16003E] border border-white p-2 gap-2 rounded-xl relative'>
                <h2 className='bg-red-500 text-white px-4 py-2 absolute right-2 top-4'>Sold Out</h2>
                <h1 className='text-2xl mb-3 text-black 2xl:text-white'>📍GSMST </h1>
                <h3 className='text-2xl font-light px-2 2xl:text-[#FFB202]'>June 2 - June 5</h3>
                <div className='mb-4 w-full flex flex-col justify-center items-start px-2 bg-[#16003E] shadow-lg p-2 rounded-xl text-lg gap-3'>
                  <div className=" h-auto flex justify-center items-center">
                  <h3 className=' bg-[#FF0066] text-white p-1 rounded min-w-[30vw] md:min-w-[14vw] xl:min-w-[10vw] 2xl:min-w-[6vw]'>9AM - 12PM</h3>
                  <h4 className=' p-1 text-white'>Inventor’s Workshop</h4>
                  </div>
                  <div className=" h-auto flex justify-center items-center">
                  <h3 className=' bg-[#FF0066] text-white p-1 rounded min-w-[30vw] md:min-w-[14vw] xl:min-w-[10vw] 2xl:min-w-[6vw]'>1PM – 4PM</h3>
                  <h4 className=' p-1 text-white'>Circuit Science</h4>
                  </div>
                </div>
                </div>

                {/* <div className='w-full h-auto flex flex-col justify-center items-start bg-white 2xl:bg-[#16003E] border border-white p-2 gap-3 rounded-xl'>
                <h1 className='text-2xl mb-3 text-black 2xl:text-white'>📍Northview High School </h1>
                <h3 className='text-2xl font-light px-2 2xl:text-[#FFB202]'>June 9 – June 12</h3>
                <div className='mb-4 w-full flex flex-col justify-center items-start px-2 bg-[#16003E] shadow-lg p-2 rounded-xl text-lg gap-2'>
                  <div className=" h-auto flex justify-center items-center">
                  <h3 className=' bg-[#FF0066] text-white p-1 rounded min-w-[30vw] md:min-w-[14vw] xl:min-w-[10vw] 2xl:min-w-[6vw]'>9AM - 12PM</h3>
                  <h4 className=' p-1 text-white'>Inventor’s Workshop</h4>
                  </div>
                  <div className=" h-auto flex justify-center items-center">
                  <h3 className=' bg-[#FF0066] text-white p-1 rounded min-w-[30vw] md:min-w-[14vw] xl:min-w-[10vw] 2xl:min-w-[6vw]'>1PM – 4PM</h3>
                  <h4 className=' p-1 text-white'>Circuit Science</h4>
                  </div>
                </div>
                </div> */}

                <div className='w-full h-auto flex flex-col justify-center items-start bg-white 2xl:bg-[#16003E] border border-white p-2 gap-3 rounded-xl'>
                <h1 className='text-xl mb-3 text-black 2xl:text-white'>📍North Gwinnett High School</h1>
                <h3 className='text-2xl font-light px-2 2xl:text-[#FFB202]'>June 9 – June 12</h3>
                <div className='mb-4 w-full flex flex-col justify-center items-start px-2 bg-[#16003E] shadow-lg p-2 rounded-xl text-lg gap-2'>
                  <div className=" h-auto flex justify-center items-center">
                  <h3 className=' bg-[#FF0066] text-white p-1 rounded min-w-[30vw] md:min-w-[14vw] xl:min-w-[10vw] 2xl:min-w-[6vw]'>9AM - 12PM</h3>
                  <h4 className=' p-1 text-white'>Inventor’s Workshop</h4>
                  </div>
                  <div className=" h-auto flex justify-center items-center">
                  <h3 className=' bg-[#FF0066] text-white p-1 rounded min-w-[30vw] md:min-w-[14vw] xl:min-w-[10vw] 2xl:min-w-[6vw]'>1PM – 4PM</h3>
                  <h4 className=' p-1 text-white'>Circuit Science</h4>
                  </div>
                </div>
                </div>

                {/* <div className='w-full h-auto flex flex-col justify-center items-start bg-white 2xl:bg-[#16003E] border border-white p-2 gap-3 rounded-xl'>
                <h1 className='text-2xl mb-3 text-black 2xl:text-white'>📍Alpharetta High School</h1>
                <h3 className='text-2xl font-light px-2 2xl:text-[#FFB202]'>June 23 – June 26</h3>
                <div className='mb-4 w-full flex flex-col justify-center items-start px-2 bg-[#16003E] shadow-lg p-2 rounded-xl text-lg gap-2'>
                  <div className=" h-auto flex justify-center items-center">
                  <h3 className=' bg-[#FF0066] text-white p-1 rounded min-w-[30vw] md:min-w-[14vw]  xl:min-w-[10vw] 2xl:min-w-[6vw]'>9AM - 12PM</h3>
                  <h4 className=' p-1 text-white'>Inventor’s Workshop</h4>
                  </div>
                  <div className=" h-auto flex justify-center items-center">
                  <h3 className=' bg-[#FF0066] text-white p-1 rounded min-w-[30vw] md:min-w-[14vw] xl:min-w-[10vw] 2xl:min-w-[6vw]'>1PM – 4PM</h3>
                  <h4 className=' p-1 text-white'>Circuit Science</h4>
                  </div>
                </div>
                </div> */}

                <div className='w-full h-auto flex flex-col justify-center items-start bg-white 2xl:bg-[#16003E] border border-white p-2 gap-3 rounded-xl relative'>
                <h2 className='bg-red-500 text-white px-4 py-2 absolute right-2 top-4'>Sold Out</h2>
                <h1 className='text-2xl mb-3 text-black 2xl:text-white'>📍GSMST</h1>
                <h3 className='text-2xl font-light px-2 2xl:text-[#FFB202]'>June 23 – June 26</h3>
                <div className='mb-4 w-full flex flex-col justify-center items-start px-2 bg-[#16003E] shadow-lg p-2 rounded-xl text-lg gap-2'>
                  <div className=" h-auto flex justify-center items-center">
                  <h3 className=' bg-[#FF0066] text-white p-1 rounded min-w-[30vw] md:min-w-[14vw] xl:min-w-[10vw] 2xl:min-w-[6vw]'>9AM - 12PM</h3>
                  <h4 className=' p-1 text-white'>Inventor’s Workshop</h4>
                  </div>
                  <div className=" h-auto flex justify-center items-center">
                  <h3 className=' bg-[#FF0066] text-white p-1 rounded min-w-[30vw] md:min-w-[14vw] xl:min-w-[10vw] 2xl:min-w-[6vw]'>1PM – 4PM</h3>
                  <h4 className=' p-1 text-white'>Circuit Science</h4>
                  </div>
                </div>
                </div>

                {/* <div className='w-full h-auto flex flex-col justify-center items-start bg-white 2xl:bg-[#16003E] border border-white p-2 gap-3 rounded-xl'>
                <h1 className='text-2xl mb-3 text-black 2xl:text-white'>📍Northview High School</h1>
                <h3 className='text-2xl font-light px-2 2xl:text-[#FFB202]'>July 7 – July 10</h3>
                <div className='mb-4 w-full flex flex-col justify-center items-start px-2 bg-[#16003E] shadow-lg p-2 rounded-xl text-lg gap-2'>
                  <div className=" h-auto flex justify-center items-center">
                  <h3 className=' bg-[#FF0066] text-white p-1 rounded min-w-[30vw] md:min-w-[14vw] xl:min-w-[10vw] 2xl:min-w-[6vw]'>9AM - 12PM</h3>
                  <h4 className=' p-1 text-white'>STEM Builders</h4>
                  </div>
                  <div className=" h-auto flex justify-center items-center">
                  <h3 className=' bg-[#FF0066] text-white p-1 rounded min-w-[30vw] md:min-w-[14vw] xl:min-w-[10vw] 2xl:min-w-[6vw]'>1PM – 4PM</h3>
                  <h4 className=' p-1 text-white'>Mini Makers</h4>
                  </div>
                </div>
                </div> */}
                <div className='w-full h-auto flex flex-col justify-center items-start bg-white 2xl:bg-[#16003E] border border-white p-2 gap-3 rounded-xl'>
                <h1 className='text-xl mb-3 text-black 2xl:text-white'>📍Sharon Forks Library</h1>
                <h3 className='text-2xl font-light px-2 2xl:text-[#FFB202]'>June 30 - July 3</h3>
                <div className='mb-4 w-full flex flex-col justify-center items-start px-2 bg-[#16003E] shadow-lg p-2 rounded-xl text-lg gap-2'>
                  <div className=" h-auto flex justify-center items-center">
                  <h3 className=' bg-[#FF0066] text-white p-1 rounded min-w-[30vw] md:min-w-[14vw] xl:min-w-[10vw] 2xl:min-w-[6vw]'>9AM - 12PM</h3>
                  <h4 className=' p-1 text-white'>Circuit Science</h4>
                  </div>
                </div>
                </div>

                <div className='w-full h-auto flex flex-col justify-center items-start bg-white 2xl:bg-[#16003E] border border-white p-2 gap-3 rounded-xl'>
                <h1 className='text-xl mb-3 text-black 2xl:text-white'>📍North Gwinnett High School</h1>
                <h3 className='text-2xl font-light px-2 2xl:text-[#FFB202]'>July 14 – July 17</h3>
                <div className='mb-4 w-full flex flex-col justify-center items-start px-2 bg-[#16003E] shadow-lg p-2 rounded-xl text-lg gap-2'>
                  <div className=" h-auto flex justify-center items-center">
                  <h3 className=' bg-[#FF0066] text-white p-1 rounded min-w-[30vw] md:min-w-[14vw] xl:min-w-[10vw] 2xl:min-w-[6vw]'>9AM - 12PM</h3>
                  <h4 className=' p-1 text-white'>STEM Builders</h4>
                  </div>
                  <div className=" h-auto flex justify-center items-center">
                  <h3 className=' bg-[#FF0066] text-white p-1 rounded min-w-[30vw] md:min-w-[14vw] xl:min-w-[10vw] 2xl:min-w-[6vw]'>1PM – 4PM</h3>
                  <h4 className=' p-1 text-white'>Mini Makers</h4>
                  </div>
                </div>
                </div>


            </div>
        </div>

        <div className='h-auto md:w-[60%] w-[92%] lg:w-[50%] xl:w-[40%] flex flex-col justify-start items-center bg-[#FFB202] rounded-3xl px-4 py-2 gap-2 relative mt-4 mb-4'>
            <h2 className='font-montserrat font-bold text-3xl text-[#16003E]'>When</h2>
            <h4 className='font-montserrat text-xl bg-white w-full text-center rounded-2xl'>Monday - Thursday</h4>
            <div className='w-full h-auto flex justify-center items-center gap-2 relative'>
                  <div className='min-h-[10vh] w-full bg-[#16003E] text-white border border-white rounded-xl flex  flex-col justify-center items-center font-montserrat text-lg font-medium' >
                    <h1>Morning</h1>
                    <h4>09:00 - 12:00</h4>
                  </div>
                  <div className='min-h-[10vh] w-full bg-[#16003E] text-white border border-white rounded-xl flex flex-col justify-center items-center font-montserrat text-lg font-medium' >
                  <h1>Afternoon</h1>
                  <h4>01:00 - 04:00</h4>
                  </div>
            </div>
        </div>

        <div className='h-auto md:w-[60%] w-[92%] lg:w-[50%] xl:w-[40%] flex flex-col justify-start items-center bg-[#FFB202] rounded-3xl px-4 py-2 gap-2 relative mt-4 mb-4'>
            <h2 className='font-montserrat font-bold text-3xl text-[#16003E]'>Where</h2>
            
            <div className='w-full bg-[#16003E] h-auto flex flex-col justify-center items-center xl:items-start px-2 py-4 rounded-xl border border-white gap-4 xl:gap-8 font-montserrat xl:text-lg'>
              <div className='w-full flex justify-center items-start gap-2 text-white border-b pb-3'>
              <div className='text-xl'>
              <GrLocationPin />
              </div>
              <div className='w-full flex flex-col justify-center items-start -mt-1'>
                  <p>Gwinnett School of Mathematics, Science and Technology</p>
                  <p>970 McElvaney Ln NW</p>
                  <p>Lawrenceville, GA 30044</p>
              </div>
              </div>
              {/* <div className='w-full flex justify-center items-start gap-2 text-white border-b pb-3'>
              <div className='text-xl'>
              <GrLocationPin />
              </div>
              <div className='w-full flex flex-col justify-center items-start -mt-1'>
                  <p>Northview High School</p>
                  <p>10625 Parsons Rd, </p>
                  <p>Johns Creek GA 30097</p>
              </div>
              </div> */}
              <div className='w-full flex justify-center items-start gap-2 text-white border-b pb-3'>
              <div className='text-xl'>
              <GrLocationPin />
              </div>
              <div className='w-full flex flex-col justify-center items-start -mt-1'>
                  <p>North Gwinnett High School</p>
                  <p>20 Level Creek Rd,</p>
                  <p>Suwanee, GA 30024</p>
              </div>
              </div>
              <div className='w-full flex justify-center items-start gap-2 text-white  pb-3'>
              <div className='text-xl'>
              <GrLocationPin />
              </div>
              <div className='w-full flex flex-col justify-center items-start -mt-1'>
                  <p>Sharon Forks Library</p>
                  <p>2820 Old Atlanta Road,</p>
                  <p>Cumming, GA, 30041.</p>
              </div>
              </div>
              {/* <div className='w-full flex justify-center items-start gap-2 text-white '>
              <div className='text-xl'>
              <GrLocationPin />
              </div>
              <div className='w-full flex flex-col justify-center items-start -mt-1'>
                  <p>Alpharetta High School</p>
                  <p>3595 Webb Bridge Rd,</p>
                  <p>Alpharetta, GA 30005</p>
              </div>
              </div> */}
            </div>
        </div>
      
        <div className='h-auto w-[92%] md:w-[60%] lg:w-[50%] xl:w-[40%] flex flex-col justify-center items-center bg-[#FFB202] rounded-3xl px-4 py-2 overflow-hidden relative mt-4'>
        <h2 className='font-montserrat font-bold text-3xl text-[#16003E]'>Fees</h2>
        <div className='h-full w-full flex flex-col justify-center items-center gap-2 '>
            <div className='flex flex-col justify-center items-center w-full p-2 gap-4 text-'>
              <div className='w-full flex justify-between items-center p-2 font-montserrat rounded-lg text-2xl bg-[#16003E] border border-white text-white'>
                <h1>Half Day</h1>
                <h1>$230</h1>
              </div>
              <div className='w-full flex justify-between items-center p-2 font-montserrat rounded-lg text-2xl bg-[#16003E] border border-white text-white'>
                <h1>Full Day</h1>
                <h1>$430</h1>
              </div>
            </div>
        </div>
        </div>

        <button onClick={handleRegister}  className='bg-[#FF0066] px-4 py-2 text-white font-montserrat text-lg rounded-lg mt-4 xl:cursor-pointer'>Enroll Now</button>
        
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