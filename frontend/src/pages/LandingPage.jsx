import React from "react";
import Navbar from "../Components/Navbar";
import Logo from "../assets/logo.png";
import paint from "../assets/paint.png";
import vect0 from "../assets/1.png";
import vect2 from "../assets/2.png";
import vect3 from "../assets/3.png";
import vect4 from "../assets/9.png";
import vect5 from "../assets/15.png";
import vect6 from "../assets/16.png";
import vect7 from "../assets/21.png";
import vect8 from "../assets/8.png";
import vect1 from "../assets/vect1.png";

import vect9 from "../assets/7.png";

import { useNavigate } from "react-router-dom";



import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import {
  easeInOut,
  motion,
  spring,
  useScroll,
  useTransform,
} from "framer-motion";

const LandingPage = () => {
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();

  const elem1X = useTransform(scrollYProgress, [0, 0.5], [0, -100]); // move left
  const elem2X = useTransform(scrollYProgress, [0, 0.5], [0, 100]); // move right

  const elem3X = useTransform(scrollYProgress, [0, 0.5], [0, -80]); // move right
  const elem4X = useTransform(scrollYProgress, [0, 0.5], [0, 80]); // move right

  const elem5X = useTransform(scrollYProgress, [0, 0.3], [0, -200]);
  const elem6X = useTransform(scrollYProgress, [0, 0.3], [0, 200]);

  const elem8X = useTransform(scrollYProgress, [0, 0.3], [0, -200]);

  const scrollToSection = (sectionId) => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: `#${sectionId}`, offsetY: 70 },
      ease: "power2.inOut",
    });
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div
      id="home"
      className="min-h-screen h-auto bg-gradient-to-b  from-[#283353] via-[#16003E] to-[#16003E] w-full flex flex-col justify-center items-center relative py-4 overflow-hidden"
    >
      <img src={Logo} alt="" className="hidden bg-white drop-shadow-lg rounded-full xl:block xl:absolute xl:top-10 xl:left-4 2xl:top-24 2xl:left-2 xl:w-[10%] 2xl:w-[10%]" />
      
      <div className="h-auto w-full flex flex-col justify-center items-center p-2">
        {/* <img src={smallrainbow} alt="" className='absolute w-full h-full top-36 opacity-25 xl:hidden' /> */}
        <div className="h-full w-full flex flex-col justify-center items-center gap-3 xl:gap-5 lg:mt-8 xl:mt-0 z-20 ">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, stiffness: 80, type: spring }}
            className="font-montserrat uppercase text-[#f79824] drop-shadow-md drop-shadow-[#FF0066] text-stroke p-1 rounded-2xl flex flex-col justify-center items-center text-5xl  tracking-wide mb-3 md:text-[16vw] lg:text-[12vw] xl:text-[6vw] 2xl:text-[6vw] text-center"
          >
            <p className="">Spark Stem</p>
            <p className="">Academy</p>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1.3,
              stiffness: 80,
              type: spring,
            }}
            className="font-montserrat text-white text-justify tracking-tight xl:tracking-normal xl:text-center  text-base 2xl:text-center 2xl:tracking-tight p-2 lg:mt-0 md:w-[80%] lg:w-[60%] xl:w-[90%] 2xl:w-[80%]"
          >
            Join our exciting STEM Summer Camps where curiosity meets innovation!
            Packed with hands-on science experiments, tech challenges, and
            creative engineering projects, we’ve got everything to spark your
            child’s imagination and make this summer a memorable one!
          </motion.p>
          <motion.button
            onClick={handleRegister}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              duration: 1,
              delay: 1.6,
              type: "spring",
              stiffness: 80,
            }}
            className="bg-[#f79824] text-white border-2 font-montserrat text-xl py-3 px-6 mt-4 rounded-full shadow-md hover:shadow-[#FF0066] xl:hover:cursor-pointer transition-all duration-300"
          >
            Enroll Now
          </motion.button>
        </div>
      </div>
        
      <motion.img style={{x:elem1X}} src={vect0} alt="" className="hidden 2xl:block 2xl:w-[10%] absolute z-20 2xl:right-[24%]" />
      <motion.img style={{x:elem2X}} src={vect2} alt="" className="hidden 2xl:block 2xl:w-[10%] absolute z-20 2xl:left-[24%]" />
      <motion.img style={{x:elem3X}} src={vect9} alt="" className="hidden 2xl:block 2xl:w-[10%] absolute z-20 2xl:left-[20%] 2xl:top-[24%]" />
      <motion.img style={{x:elem4X}} src={vect4} alt="" className="hidden 2xl:block 2xl:w-[10%] absolute z-20 2xl:right-[20%] 2xl:top-[24%]" />
    </div>
  );
};

export default LandingPage;
