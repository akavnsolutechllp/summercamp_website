import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Menu from "../Components/Menu";

const SuccessPayment = () => {
  const navigate = useNavigate();
  const [hasPaid, setHasPaid] = useState(false);

  useEffect(() => {
    // Check payment status
    const paymentStatus = localStorage.getItem("payment") === "true";
    setHasPaid(paymentStatus);

    if (!paymentStatus) {
      alert("Please complete payment first!");
     // Redirect to homepage if not paid
    } else {
      // Set a 3-minute (180000 ms) timer to reset payment status and redirect
      const timeout = setTimeout(() => {
        localStorage.setItem("payment", "false");
        navigate("/"); // Redirect to homepage after 3 minutes
      }, 180000);

      return () => clearTimeout(timeout); // Clean up timeout on component unmount
    }
  }, [navigate]);

  if (!hasPaid) {
    return (
      <div className="h-full w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#283353] via-[#16003E] to-[#16003E]">
        <Navbar />
        <Menu />
        <div className="min-h-[90vh] w-[96%] 2xl:w-[40%] flex flex-col justify-center items-center gap-4 text-center p-4 rounded-lg m-2">
          <h1 className="text-5xl 2xl:text-7xl font-montserrat uppercase text-[#FFB202]">
            Complete Payment First
          </h1>
          <p className="mt-4 text-lg font-montserrat text-white">
            Please finish the payment to complete your registration.
          </p>
          <button
            className="bg-[#FF0066] p-3 rounded-full text-white font-montserrat mt-4 xl:cursor-pointer xl:hover:scale-105 transition-transform ease-in-out"
            onClick={() => navigate("/register")} // Navigate to payment page
          >
            Go to Registration
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#283353] via-[#16003E] to-[#16003E]">
      <Navbar />
      <Menu />
      <div className="min-h-[90vh] w-[96%] 2xl:w-[40%] flex flex-col justify-center items-center gap-4 text-center p-4 rounded-lg m-2">
        <h1 className="text-5xl 2xl:text-7xl font-montserrat uppercase text-[#02ff56]">
          Payment Successful
        </h1>
        <p className="mt-4 text-lg font-montserrat text-white">
          Thank you for registering.
        </p>
        <p className="text-white font-montserrat">
          A confirmation email with your invoice has been sent to your email address.
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

export default SuccessPayment;
