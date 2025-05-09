import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Menu from "../Components/Menu";

const FailedPayment = () => {
  const navigate = useNavigate();

  

  return (
    <div className="h-full w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#283353] via-[#16003E] to-[#16003E]">
      <Navbar />
      <Menu />
      <div className="min-h-[90vh] w-[96%] 2xl:w-[40%] flex flex-col justify-center items-center gap-4 text-center p-4 rounded-lg m-2">
        <h1 className="text-5xl 2xl:text-7xl font-montserrat uppercase text-[#FF0066]">
          Payment Failed
        </h1>
        <p className="mt-4 text-lg font-montserrat text-white">
          Try Again for Registration.
        </p>
        
        <button
          className="bg-[#FF0066] p-3 rounded-full text-white font-montserrat mt-4 xl:cursor-pointer xl:hover:scale-105 transition-transform ease-in-out"
          onClick={() => navigate("/")}
        >
          Go to HomePage
        </button>
      </div>
    </div>
  );
};

export default FailedPayment;
