import React from "react";
import logo from "../assets/logo.png";

const Page1 = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <img
        src={logo}
        alt=""
        className="h-full min-w-[500px] object-cover object-center"
      />
    </div>
  );
};

export default Page1;
