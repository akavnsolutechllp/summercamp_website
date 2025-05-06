import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


import stem from '../assets/stem.jpg';
import inventor from '../assets/inventors.jpg';
import robo from '../assets/robot.jpg';
import circuit from '../assets/circuit.jpg';
import eco from '../assets/eco_explorer.jpg';
import mini from '../assets/mini_stem.jpg';
import bg from '../assets/cards-bg.jpeg'

import vect9 from "../assets/9.png";
import vect4 from "../assets/4.png"
import vect5 from "../assets/5.png";
import vect20 from "../assets/20.png"
import vect21 from "../assets/21.png";
import vect22 from "../assets/22.png";
import vect16 from "../assets/16.png";
import vect17 from "../assets/17.png";
import vect8 from "../assets/8.png";

import mobile from '../assets/page2-mobile.jpg';


const Program = () => {

const navigate = useNavigate();

const handleKnowmore = () =>{
  navigate('/programs')
}

  return (
    <div
      id="programs"
      className="min-h-screen h-auto w-full flex flex-col justify-center items-center bg-[#16003E] px-4 py-4 relative overflow-hidden"
    >

      <img src={vect9} alt="" className="hidden xl:block xl:absolute 2xl:block xl:w-[16%] 2xl:w-[20%] 2xl:absolute 2xl:top-4 xl:top-4 xl:-left-[8%] 2xl:-left-[8%]" />
      <img src={vect5} alt="" className="hidden xl:block xl:absolute 2xl:block xl:w-[16%] 2xl:w-[20%] 2xl:absolute 2xl:top-4 xl:top-4 xl:-right-[8%] 2xl:-right-[8%]" />
      <img src={vect4} alt="" className="hidden xl:block xl:absolute 2xl:block xl:w-[16%] 2xl:w-[20%] 2xl:absolute 2xl:top-[30%] xl:top-[30%] xl:-left-[8%] 2xl:-left-[8%]" />
      <img src={vect20} alt="" className="hidden xl:block xl:absolute 2xl:block xl:w-[16%] 2xl:w-[20%] 2xl:absolute 2xl:top-[30%] xl:top-[30%] xl:-right-[8%] 2xl:-right-[8%]" />
      <img src={vect21} alt="" className="hidden xl:block xl:absolute 2xl:block xl:w-[16%] 2xl:w-[20%] 2xl:absolute 2xl:top-[60%] xl:top-[60%] xl:-left-[8%] 2xl:-left-[8%]" />
      <img src={vect22} alt="" className="hidden xl:block xl:absolute 2xl:block xl:w-[16%] 2xl:w-[20%] 2xl:absolute 2xl:top-[60%] xl:top-[60%] xl:-right-[8%] 2xl:-right-[8%]" />

      <h2 className="font-montserrat uppercase text-5xl md:text-7xl lg:text-9xl xl:text-8xl 2xl:text-9xl p-2 rounded-lg text-[#E31DB0] drop-shadow-md drop-shadow-[#FF0066] z-20 text-stroke">
        Programs
      </h2>
      
      <motion.div className="w-full md:w-[60%] lg:w-[80%] xl:w-[84%] 2xl:w-[70%] h-auto flex flex-col justify-start items-center md:grid md:grid-cols-1 lg:grid lg:grid-cols-3 md:gap-8 lg:gap-6 xl:gap-8 gap-6 py-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{scale:1.02}}
          className="h-auto w-full min-h-[16vh] xl:h-[44vh] 2xl:h-[40vh] bg-white/5 border-2 border-[#F79824] shadow-lg shadow-[#F79824] flex flex-col justify-around items-center rounded-2xl gap-3 p-4 md:p-4 relative overflow-hidden"
        >
          <h1 className="font-montserrat text-center text-2xl md:text-6xl lg:text-7xl xl:text-2xl 2xl:text-3xl text-white w-full z-20">
            STEM Builders
          </h1>
          <div className="h-[40%] w-full flex justify-center items-center z-20">
            <img src={stem} alt="" className='w-[80%] lg:w-[66%] 2xl:w-[50%]' />
          </div>
          <h3 className="text-white bg-[#F79824] p-1 border rounded-lg text-center text-lg xl:text-base 2xl:text-lg font-montserrat  w-full z-20">
            Engineering & Structures
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{scale:1.02}}
          className="h-auto w-full min-h-[16vh] xl:h-[44vh] 2xl:h-[40vh] bg-white/5 border-2 border-[#E31DB0] shadow-lg shadow-[#E31DB0] flex flex-col justify-around items-center rounded-2xl gap-3 p-4 md:p-4 relative overflow-hidden"
        >
          <h1 className="font-montserrat text-center text-2xl md:text-6xl lg:text-7xl xl:text-2xl 2xl:text-3xl text-white w-full z-20">
            Inventor’s Workshop
          </h1>
          <div className="h-[40%] w-full flex justify-center items-center z-20">
            <img src={inventor} alt="" className='w-[80%] lg:w-[63%] 2xl:w-[50%]' />
          </div>
          <h3 className="text-white bg-[#E31DB0] py-1 px-8 xl:px-12 2xl:px-2 border rounded-lg text-center text-lg xl:text-base  2xl:text-lg font-montserrat w-full z-20">
            Design Thinking & Problem-Solving
          </h3>
          
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{scale:1.02}}
          className="h-auto w-full min-h-[16vh] xl:h-[44vh] 2xl:h-[40vh] bg-white/5 border-2 border-[#F79824] shadow-lg shadow-[#F79824]  flex flex-col justify-around items-center rounded-2xl gap-3 p-4 md:p-4 relative overflow-hidden"
        >
          <h1 className="font-montserrat text-center text-2xl md:text-6xl lg:text-7xl xl:text-2xl 2xl:text-3xl text-white w-full z-20">
            Robo Coding Camp
          </h1>
          <div className="h-[40%] w-full flex justify-center items-center z-20">
            <img src={robo} alt=""  className='w-[80%] lg:w-[63%] 2xl:w-[50%]' />
          </div>
          <h3 className="text-white bg-[#F79824] p-1 border rounded-lg text-center text-lg xl:text-base  2xl:text-lg font-montserrat w-full z-20">
            Coding, Robotics, and Circuits
          </h3>
         
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{scale:1.02}}
          className="h-auto w-full min-h-[16vh] xl:h-[44vh] 2xl:h-[40vh] bg-white/5 border-2 border-[#E31DB0] shadow-lg shadow-[#E31DB0] flex flex-col justify-around items-center rounded-2xl gap-3 p-4 md:p-4 relative overflow-hidden"
        >
          <h1 className="font-montserrat text-center text-2xl md:text-6xl lg:text-7xl xl:text-2xl 2xl:text-3xl text-white w-full z-20">
            Circuit Science
          </h1>
          <div className="h-[40%] w-full flex justify-center items-center z-20">
            <img src={circuit} alt="" className='w-[80%] lg:w-[66%] 2xl:w-[70%]' />
          </div>
          <h3 className="text-white bg-[#E31DB0] p-1 border text-center rounded-lg text-lg xl:text-base  2xl:text-lg font-montserrat w-full z-20">
            Electricity & Circuits
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{scale:1.02}}
         className="h-auto w-full min-h-[16vh] xl:h-[44vh] 2xl:h-[40vh] bg-white/5 border-2 border-[#F79824] shadow-lg shadow-[#F79824]  flex flex-col justify-around items-center rounded-2xl gap-3 p-4 md:p-4 relative overflow-hidden"
        >
          <h1 className="font-montserrat text-center text-2xl md:text-6xl lg:text-7xl xl:text-2xl 2xl:text-3xl text-white w-full z-20">
            Eco Explorers
          </h1>
          <div className="h-[40%] w-full flex justify-center items-center z-20">
            <img src={eco} alt="" className='w-[80%] lg:w-[66%] 2xl:w-[70%]' />
          </div>
          <h3 className="text-white bg-[#F79824] p-1 border text-center rounded-lg text-lg xl:text-base  2xl:text-lg font-montserrat w-full z-20">
            Environment & Sustainability
          </h3>
          
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{scale:1.02}}
          className="h-auto w-full min-h-[16vh] xl:h-[44vh] 2xl:h-[40vh] bg-white/5 border-2 border-[#E31DB0] shadow-lg shadow-[#E31DB0] flex flex-col justify-around items-center rounded-2xl gap-3 p-4 md:p-4 relative overflow-hidden"
        >
          <h1 className="font-montserrat text-center text-2xl md:text-6xl lg:text-7xl xl:text-2xl 2xl:text-3xl text-white w-full z-20">
            Mini Makers
          </h1>
          <div className="h-[40%] w-full flex justify-center items-center z-20">
            <img src={mini} alt="" className='w-[80%] lg:w-[68%] 2xl:w-[70%]' />
          </div>
          <h3 className="text-white bg-[#E31DB0] p-1 border rounded-lg text-center text-lg xl:text-base  2xl:text-lg font-montserrat w-full z-20">
            Science + Art (STEAM)
          </h3>
        
        </motion.div>
      </motion.div>
      <button
      onClick={handleKnowmore}
        className="bg-[#FF0066] font-montserrat rounded-full px-4 py-2 mt-4 2xl:text-xl 2xl:mt-12 text-white z-20"
      >
        Know More
      </button>
    </div>
  );
};

export default Program;

{
  /* <div className='h-auto min-h-[52vh] lg:h-[52vh] bg-[#f79824] w-full flex flex-col justify-center items-center p-2 gap-1'>
<h1 className='font-gt w-full text-3xl lg:text-4xl text-white mb-2'>STEM Builders</h1>
<img src={stem} alt="" className='drop-shadow-2xl w-[80%] lg:w-[66%]' />
<p className='font-montserrat text-white w-full text-lg lg:text-2xl'>Engineering & Structures</p>
<p className='text-white text-sm lg:text-base lg:mt-2  font-montserrat'>Put your engineering skills-to the text as you desig-and build towers,bridges, and more!</p>
<button className='w-full bg-white text-2xl lg:text-lg text-[#f79824] py-2 font-gt mt-2'>Join Now</button>
</div>
<div className='h-auto min-h-[52vh] lg:h-[52vh] bg-[#5e17eb] w-full flex flex-col justify-center items-center p-2 gap-1'>
<h1 className='font-gt w-full text-3xl lg:text-4xl text-white mb-2'>Inventor’s Workshop</h1>
<img src={iw} alt="" className='drop-shadow-2xl w-[80%] lg:w-[66%]' />
<p className='font-montserrat text-white w-full text-lg lg:text-2xl'>Design Thinking & Problem-Solving</p>
<p className='text-white text-sm lg:text-base lg:mt-2  font-montserrat'>Bring your ideas to life! Solve problems by inve-riting prototypes of your own creations.</p>
<button className='w-full bg-white text-2xl lg:text-lg text-[#5e17eb] py-2 font-gt mt-2'>Join Now</button>
</div>
<div className='h-[52vh] lg:h-[52vh] bg-[#f79824] w-full flex flex-col justify-around items-center p-2 gap-1'>
<h1 className='font-gt w-full text-3xl lg:text-4xl text-white mb-2'>Robo Coding Camp</h1>
<img src={robot} alt="" className='drop-shadow-2xl w-[80%] lg:w-[66%]'  />
<p className='font-montserrat text-white w-full text-lg lg:text-2xl'> Coding, Robotics, and Circuits</p>
<p className='text-white text-sm lg:text-base lg:mt-2  font-montserrat'>Discover the world of coding and robotics! Learn to program robots and games.</p>
<button className='w-full bg-white text-2xl lg:text-lg text-[#f79824] py-2 font-gt mt-2'>Join Now</button>
</div>
<div className='h-[50vh] lg:h-[52vh] bg-[#5e17eb] w-full flex flex-col justify-center items-center p-2 gap-1'>
<h1 className='font-gt text-3xl text-white mb-2'>Circuit Science</h1>
<img src={circuit} alt="" className='drop-shadow-2xl w-[80%] lg:w-[66%]' />
<p className='font-montserrat text-white w-full'> Electricity & Circuits</p>
<p className='text-white'>Explore the science of electricity! Experiment with circuits, lights, and switches.</p>
<button className='w-full bg-white text-2xl text-[#5e17eb] py-2 font-gt'>Join Now</button>
</div>
<div className='h-[50vh] lg:h-[52vh] bg-[#f79824] w-full flex flex-col justify-center items-center p-2 gap-1'>
<h1 className='font-gt text-3xl text-white mb-2'> Eco Explorers</h1>
<img src={eco} alt="" className='drop-shadow-2xl w-[80%] lg:w-[66%]' />
<p className='font-montserrat text-white w-full'>Environment & Sustainability</p>
<p className='text-white'>Discover the wonders of nature! investigace ecosystems, sustainabi-lity, and more.</p>
<button className='w-full bg-white text-2xl text-[#f79824] py-2 font-gt'>Join Now</button>
</div>
<div className='h-[50vh] lg:h-[52vh] bg-[#5e17eb] w-full flex flex-col justify-center items-center p-2 gap-1'>
<h1 className='font-gt text-3xl text-white mb-2'>Mini Makers (STEAM)</h1>
<img src={mini} alt="" className='drop-shadow-2xl w-[80%] lg:w-[66%]' />
<p className='font-montserrat text-white w-full'>Environment & Sustainability</p>
<p className='text-white'>Combine science and art as you create wear-able art, scribbibung machines, and more!</p>
<button className='w-full bg-white text-2xl text-[#5e17eb] py-2 font-gt'>Join Now</button>
</div> */
}
