import React from "react";
import { useNavigate } from "react-router-dom";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import banner from "../assets/banner2.jpg";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = () => {
 
  const navigate = useNavigate();


  const handleHome = () => {
    navigate("/");
  };

  const handleProgram = () => {
    navigate("/programs");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleAbout = () => {
    navigate("/aboutus");
  };

  const handleGallery = () => {
    navigate("/gallery");
  };

  return (
    <div className="w-full h-[12vh] lg:h-[30vh] flex justify-center items-center 2xl:justify-center px-4 relative z-20 overflow-hidden xl:overflow-hidden">
      <img src={banner} alt="navbar_banner" fetchPriority="high" className="w-full absolute object-cover" />

      <div className="hidden lg:w-[100%] xl:w-[100%] 2xl:w-[100%] md:flex lg:flex justify-center gap-24 items-center ml-auto text-white font-semibold text-lg z-10 mt-72 lg:mt-40  p-4">
        <button
          onClick={handleHome}
          className={`${location.pathname === "/" ? "bg-white text-[#FF0066] border-[#FF0066]" : "bg-[#FF0066] text-white border-white"} border-2 px-4 py-2 rounded-full xl:hover:scale-105 xl:hover:cursor-pointer ease-in-out`}
        >
          Home
        </button>
        <button
          onClick={handleProgram}
          className={` ${location.pathname === "/programs" ? "bg-white text-[#FF0066] border-[#FF0066]" : "bg-[#FF0066] text-white border-white"} border-2 px-4 py-2 rounded-full xl:hover:scale-105 xl:hover:cursor-pointer ease-in-out`}
        >
          Programs
        </button>
        <button
          onClick={handleRegister}
          className={` ${location.pathname === "/register" ? "bg-white text-[#FF0066] border-[#FF0066]" : "bg-[#FF0066] text-white border-white"} border-2 px-4 py-2 rounded-full xl:hover:scale-105 xl:hover:cursor-pointer ease-in-out`}
        >
          Register
        </button>
        <button
          onClick={handleAbout}
          className={`${location.pathname === "/aboutus" ? "bg-white text-[#FF0066] border-[#FF0066]" : "bg-[#FF0066] text-white border-white"} border-2 px-4 py-2 rounded-full xl:hover:scale-105 xl:hover:cursor-pointer ease-in-out`}
        >
          About Us
        </button>
        <button
          onClick={handleGallery}
          className={`${location.pathname === "/gallery" ? "bg-white text-[#FF0066] border-[#FF0066]" : "bg-[#FF0066] text-white border-white"} border-2 px-4 py-2 rounded-full xl:hover:scale-105 xl:hover:cursor-pointer ease-in-out`}
        >
          Gallery
        </button>
      </div>
    </div>
  );
};

export default Navbar;
