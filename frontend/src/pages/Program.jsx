/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import stem from "../assets/stem.jpg";
import inventor from "../assets/inventors.jpg";
import circuit from "../assets/circuit.jpg";
import mini from "../assets/mini_stem.jpg";


import vect9 from "../assets/9.png";
import vect4 from "../assets/4.png";
import vect5 from "../assets/5.png";
import vect20 from "../assets/20.png";
import vect21 from "../assets/21.png";
import vect22 from "../assets/22.png";


const Program = () => {
  const navigate = useNavigate();

  const handleKnowmore = () => {
    navigate("/programs");
  };

  return (
    <div
      id="programs"
      className="min-h-screen h-auto w-full flex flex-col justify-center items-center bg-[#16003E] px-4 py-4 relative overflow-hidden"
    >
      <img
        src={vect9}
        alt=""
        className="hidden xl:block xl:absolute 2xl:block xl:w-[16%] 2xl:w-[20%] 2xl:absolute 2xl:top-4 xl:top-4 xl:-left-[8%] 2xl:-left-[8%]"
      />

      <img
        src={vect5}
        alt=""
        className="hidden xl:block xl:absolute 2xl:block xl:w-[16%] 2xl:w-[20%] 2xl:absolute 2xl:top-4 xl:top-4 xl:-right-[8%] 2xl:-right-[8%]"
      />

      <img
        src={vect4}
        alt=""
        className="hidden xl:block xl:absolute 2xl:block xl:w-[16%] 2xl:w-[20%] 2xl:absolute 2xl:top-[30%] xl:top-[30%] xl:-left-[8%] 2xl:-left-[8%]"
      />

      <img
        src={vect20}
        alt=""
        className="hidden xl:block xl:absolute 2xl:block xl:w-[16%] 2xl:w-[20%] 2xl:absolute 2xl:top-[30%] xl:top-[30%] xl:-right-[8%] 2xl:-right-[8%]"
      />

      <img
        src={vect21}
        alt=""
        className="hidden xl:block xl:absolute 2xl:block xl:w-[16%] 2xl:w-[20%] 2xl:absolute 2xl:top-[60%] xl:top-[60%] xl:-left-[8%] 2xl:-left-[8%]"
      />

      <img
        src={vect22}
        alt=""
        className="hidden xl:block xl:absolute 2xl:block xl:w-[16%] 2xl:w-[20%] 2xl:absolute 2xl:top-[60%] xl:top-[60%] xl:-right-[8%] 2xl:-right-[8%]"
      />

      <h2 className="font-montserrat uppercase text-5xl md:text-7xl lg:text-7xl p-2 rounded-lg text-[#E31DB0] drop-shadow-md drop-shadow-[#FF0066] z-20 text-stroke">
        Programs
      </h2>

      <motion.div className="w-full md:w-[60%] lg:w-[70%] h-auto flex flex-col justify-start items-center md:grid md:grid-cols-1 lg:grid lg:grid-cols-2 md:gap-8 lg:gap-6 xl:gap-8 gap-6 py-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="h-auto w-full min-h-[16vh] lg:h-[48vh] bg-white/5 border-2 border-[#F79824] shadow-lg shadow-[#F79824] flex flex-col justify-center items-center rounded-2xl gap-3 p-4 md:p-4 relative overflow-hidden"
        >
          <h1 className="font-montserrat text-center text-2xl md:text-6xl lg:text-4xl xl:text-3xl 2xl:text-3xl text-white w-full z-20">
            STEM Builders
          </h1>
         
            <img
              src={stem}
              alt=""
              className="w-[80%] lg:w-[50%]"
            />
        
          <h3 className="text-white bg-[#F79824] p-1 border rounded-lg text-center text-lg xl:text-base 2xl:text-lg font-montserrat  w-full z-20">
            Engineering & Structures
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="h-auto w-full min-h-[16vh] lg:h-[48vh] bg-white/5 border-2 border-[#E31DB0] shadow-lg shadow-[#E31DB0] flex flex-col justify-center items-center rounded-2xl gap-3 p-4 md:p-4 relative overflow-hidden"
        >
          <h1 className="font-montserrat text-center text-2xl md:text-6xl lg:text-4xl xl:text-3xl 2xl:text-3xl text-white w-full z-20">
            Inventor’s Workshop
          </h1>
          
            <img
              src={inventor}
              alt=""
              className="w-[80%] lg:w-[45%] "
            />
          
          <h3 className="text-white bg-[#E31DB0] py-1 px-8 xl:px-12 2xl:px-2 border rounded-lg text-center text-lg xl:text-base  2xl:text-lg font-montserrat w-full z-20">
            Design Thinking & Problem-Solving
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="h-auto w-full min-h-[16vh] lg:h-[48vh] bg-white/5 border-2 border-[#E31DB0] shadow-lg shadow-[#E31DB0] flex flex-col justify-around items-center rounded-2xl gap-3 p-4 md:p-4 relative overflow-hidden"
        >
          <h1 className="font-montserrat text-center text-2xl md:text-6xl lg:text-4xl xl:text-3xl 2xl:text-3xl text-white w-full z-20">
            Circuit Science
          </h1>
          <div className="h-[40%] w-full flex justify-center items-center z-20">
            <img
              src={circuit}
              alt=""
              className="w-[80%] lg:w-[66%] xl:w-[56%] 2xl:w-[60%]"
            />
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
          whileHover={{ scale: 1.02 }}
          className="h-auto w-full min-h-[16vh] lg:h-[48vh] bg-white/5 border-2 border-[#F79824] shadow-lg shadow-[#F79824] flex flex-col justify-around items-center rounded-2xl gap-3 p-4 md:p-4 relative overflow-hidden"
        >
          <h1 className="font-montserrat text-center text-2xl md:text-6xl lg:text-4xl xl:text-3xl 2xl:text-3xl text-white w-full z-20">
            Mini Makers
          </h1>
          <div className="h-[40%] w-full flex justify-center items-center z-20">
            <img
              src={mini}
              alt=""
              className="w-[80%] lg:w-[68%] xl:w-[64%] 2xl:w-[70%]"
            />
          </div>
          <h3 className="text-white bg-[#F79824] p-1 border rounded-lg text-center text-lg xl:text-base  2xl:text-lg font-montserrat w-full z-20">
            Science + Art (STEAM)
          </h3>
        </motion.div>
      </motion.div>
      <button
        onClick={handleKnowmore}
        className="bg-[#FF0066] font-montserrat rounded-full px-4 py-2 mt-4 xl:cursor-pointer  text-white z-20 lg:hover:scale-105 transition-all ease-in-out"
      >
        Know More
      </button>
    </div>
  );
};

export default Program;
