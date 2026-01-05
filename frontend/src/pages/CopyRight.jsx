import React from "react";

const CopyRight = () => {

 const currentYear = new Date().getFullYear();

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center gap-2  bg-[#283353] text-white p-4">
      <h2 className="font-montserrat">&copy; {currentYear} Spark Stem Academy </h2>
      <h2 className="text-sm font-montserrat flex items-center gap-1">
        Developed By 
        <p
          className=" flex items-center text-sm gap-1"
        >
          <span className="text-amber-400 lg:hover:underline"><a  href="https://www.instagram.com/akavnllp"
          target="_blank">Akavn Solutech LLP</a></span>
          <span className="text-xs">with</span>
          <span className="text-amber-400 lg:hover:underline"><a  href="https://prarthanparmar.vercel.app/"
          target="_blank">Prarthan</a></span>
        </p>
      </h2>
    </div>
  );
};

export default CopyRight;
