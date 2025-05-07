import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Menu from "../Components/Menu";
import axios from "axios";

const SuccessPayment = () => {
  const navigate = useNavigate();

 
  useEffect(() => {
    const hasPaid = localStorage.getItem("payment") === "true";
    if (!hasPaid) {
      alert("Please complete payment first!");
      navigate("/checkout");
      return;
    }
  
    // Set a 3-minute (180000 ms) timer to reset payment status and redirect
    const timeout = setTimeout(() => {
      localStorage.setItem("payment", "false");
      navigate("/");
    }, 180000);
  
    // Cleanup the timeout if component unmounts before 3 mins
    return () => clearTimeout(timeout);
  }, [navigate]);
  

  // Handler to download the invoice

  const handleDownloadInvoice = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        alert("User ID missing");
        return;
      }
  
      const resProfile = await fetch(
        `https://summercamp-website.onrender.com/api/user/getprofile/${userId}`
      );
      const data = await resProfile.json();
      if (!data || !data.profile) throw new Error("Profile missing");
  
      const profile = data.profile;
  
      const payload = {
        userId: userId,
        firstName: profile.studentFirstName,
        lastName: profile.studentLastName,
        email: profile.email,
        phone: profile.phone,
        campType: profile.camp,
        campSession: profile.campSession,
        activity: profile.activity,
        amount: profile.camp === "half" ? "230" : "420",
      };
  
      const res = await axios.post(
        "https://summercamp-website.onrender.com/api/payment/generate-invoice",
        payload,
        { responseType: "blob" }
      );
  
      const blob = new Blob([res.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        `Invoice_${profile.studentFirstName}_${profile.studentLastName}.pdf`
      );
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error(
        "Invoice download error:",
        error.response?.data || error.message || error
      );
      alert("Error downloading invoice.");
    }
  };
  
  
  return (
    <div className="h-full w-full flex flex-col justify-center items-center bg-gradient-to-b  from-[#283353] via-[#16003E] to-[#16003E]">
      <Navbar />
      <Menu />
      <div className="min-h-[90vh] w-[96%] 2xl:w-[40%] flex flex-col justify-center items-center gap-4 text-center p-4 rounded-lg m-2">
        <h1 className="text-5xl 2xl:text-7xl font-montserrat uppercase text-[#FFB202]">
          Payment Successful
        </h1>
        <p className="mt-4 text-lg font-montserrat text-white">
          Thank you for registering.
        </p>
        <div className="w-full flex flex-col xl:flex-row 2xl:flex-row justify-center items-center xl:gap-4">
          <button
            className="bg-[#FF0066] p-3 rounded-full text-white font-montserrat mt-4 xl:cursor-pointer xl:hover:scale-105 transition-transform ease-in-out"
            onClick={() => navigate("/")}
          >
            Go to HomePage
          </button>
          <button
            className="bg-[#16003E] p-3 rounded-full text-white border font-montserrat mt-4 xl:cursor-pointer xl:hover:scale-105 transition-transform ease-in-out"
            onClick={handleDownloadInvoice}
          >
            Download Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPayment;
