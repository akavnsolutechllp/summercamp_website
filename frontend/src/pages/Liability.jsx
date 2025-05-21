import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useFormData } from '../context/FormDataContext';
import vect1 from '../assets/5.png';
import vect2 from '../assets/22.png';
import vect3 from '../assets/13.png';
import vect4 from '../assets/17.png';
import SignaturePad from './SignaturePad';
import { useNavigate } from 'react-router-dom';


import { easeInOut, motion, spring, useScroll, useTransform } from 'framer-motion';
import Navbar from '../Components/Navbar';
import Menu from '../Components/Menu';

const Liability = () => {
  
  const { scrollYProgress } = useScroll();

  const vect1Ref = useRef(null);
  const vect2Ref = useRef(null);
  const vect3Ref = useRef(null);
  const vect4Ref = useRef(null);

  const { scrollYProgress: vect1Progress } = useScroll({ target: vect1Ref, offset: ["start end", "end start"] });
  const { scrollYProgress: vect2Progress } = useScroll({ target: vect2Ref, offset: ["start end", "end start"] });
  const { scrollYProgress: vect3Progress } = useScroll({ target: vect3Ref, offset: ["start end", "end start"] });
  const { scrollYProgress: vect4Progress } = useScroll({ target: vect4Ref, offset: ["start end", "end start"] });

  const vect1X = useTransform(vect1Progress, [0, 0.5], [150, 0]);
  const vect2X = useTransform(vect2Progress, [0, 1], [-150, 0]);
  const vect3X = useTransform(vect3Progress, [0, 1], [100, 0]);
  const vect4X = useTransform(vect4Progress, [0, 1], [-100, 0]);

  const { formData } = useFormData();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [signature, setSignature] = useState('');
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);


  const onSubmit = async (waiverData) => {
    setLoading(true);
    const fullForm = {
      ...formData,
      ...waiverData,
      signature
    };
  
    try {
      const res = await fetch('https://summercamp-website.onrender.com/api/user/complete-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fullForm)
      });
  
      if (!res.ok) throw new Error('Failed to submit');
      const result = await res.json();
      localStorage.setItem('userId', result.userId);
      navigate('/payment');
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div
      id="liability"
      className="h-full w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#283253] via-[#283253] to-[#16003E] relative"
    >
      <Navbar />
      <Menu />
      <div className="min-h-screen w-full flex flex-col justify-center items-center p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-[70%] lg:w-[50%] 2xl:w-[40%] flex flex-col justify-center items-center bg-white drop-shadow-lg rounded-xl p-4"
        >
          <h4 className="w-full my-2 font-semibold">
            Liability Waiver and Release Form
          </h4>

          {/* Camper Info Fields */}
          <div className="w-full h-auto flex flex-col justify-center items-start mt-2">
            <label className="font-montserrat">Student Full Name:</label>
            <input
              type="text"
              {...register("camperName", {
                required: "Camper’s name is required",
              })}
              className="w-full border-b border-black/30 focus:outline-none p-2"
            />
            {errors.camperName && (
              <span className="text-red-500">{errors.camperName.message}</span>
            )}

            <label className="mt-1 font-montserrat">Date of Birth:</label>
            <input
              type="date"
              min="2011-06-01"
              max="2018-05-31"
              {...register("dob", {
                required: "Date of Birth is required",
                validate: (value) => {
                  const dob = new Date(value);
                  const minDate = new Date("2011-06-01");
                  const maxDate = new Date("2018-05-31");
                  if (dob < minDate || dob > maxDate) {
                    return "Child must be between 7 and 13 years old";
                  }
                  return true;
                },
              })}
              className="w-full border-b border-black/30 focus:outline-none p-2"
            />

            {errors.dob && (
              <span className="text-red-500">{errors.dob.message}</span>
            )}

            <label className="mt-1">Parent/Guardian Name:</label>
            <input
              type="text"
              {...register("parentName", {
                required: "Parent/Guardian name is required",
              })}
              className="w-full border-b border-black/30 focus:outline-none p-2"
            />
            {errors.parentName && (
              <span className="text-red-500">{errors.parentName.message}</span>
            )}

            <label className="mt-1">Contact Number:</label>
            <input
              type="tel"
              {...register("phone", { required: "Phone number is required" })}
              className="w-full border-b border-black/30 focus:outline-none p-2"
            />
            {errors.phone && (
              <span className="text-red-500">{errors.phone.message}</span>
            )}

            <label className="mt-1">Email Address:</label>
            <input
              type="email"
              {...register("email", {
                required: "Email address is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full border-b border-black/30 focus:outline-none p-2"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>

          <div className="w-full h-auto flex flex-col justify-center items-start gap-2 my-2">
            <h1 className="font-bold font-montserrat">
              1. Acknowledgment of Risk
            </h1>
            <p>
              I understand that participation in Spark STEM Academy’s Summer
              STEM Camps involves hands-on science, technology, engineering, and
              outdoor activities that may involve certain risks, including, but
              not limited to, physical activity, use of lab materials/tools, and
              interaction with natural elements.
            </p>
            <p>
              I voluntarily assume all risks related to my child’s participation
              and agree that Spark STEM Academy, its staff, and volunteers will
              not be held liable for any injury, illness, or loss that may occur
              during the camp.
            </p>
          </div>
          <div className="w-full h-auto flex flex-col justify-center items-start gap-2 my-2">
            <h1 className="font-bold font-montserrat">2. Medical Release</h1>
            <p>
              In the event of a medical emergency, I authorize the camp staff to
              obtain necessary medical treatment for my child. I understand that
              every effort will be made to contact me before taking this action.
            </p>
          </div>

          {/* Medical Section */}
          <div className="w-full mt-4">
            <label>Known Allergies/Medical Conditions:</label>
            <input
              type="text"
              {...register("medicalConditions")}
              className="w-full border-b border-black/30 focus:outline-none p-2"
            />

            <label className="mt-1">
              Medications to be Administered (if any):
            </label>
            <input
              type="text"
              {...register("medications")}
              className="w-full border-b border-black/30 focus:outline-none p-2"
            />

            <label className="mt-1">Emergency Contact Name:</label>
            <input
              type="text"
              {...register("emergencyContactName", {
                required: "Emergency contact name is required",
              })}
              className="w-full border-b border-black/30 focus:outline-none p-2"
            />
            {errors.emergencyContactName && (
              <span className="text-red-500">
                {errors.emergencyContactName.message}
              </span>
            )}

            <label className="mt-3">Emergency Contact Number:</label>
            <input
              type="tel"
              {...register("emergencyContactPhone", {
                required: "Emergency contact number is required",
              })}
              className="w-full border-b border-black/30 focus:outline-none p-2"
            />
            {errors.emergencyContactPhone && (
              <span className="text-red-500">
                {errors.emergencyContactPhone.message}
              </span>
            )}
          </div>

          <div className="w-full h-auto flex flex-col justify-center items-start gap-2 my-2">
            <h1 className="font-bold font-montserrat">
              3. COVID-19 Acknowledgment
            </h1>
            <p>
              I understand that Spark STEM Academy follows recommended health
              guidelines, but there remains a risk of exposure to COVID-19 and
              other contagious illnesses. I agree not to hold Spark STEM Academy
              or its representatives liable in the event of exposure or illness.
            </p>
          </div>

          {/* Media Release */}
          <div className="w-full h-auto flex flex-col justify-start items-start gap-3 mt-4">
            <h1 className="font-montserrat font-bold ">
              4. Media Release (Optional – Please check one)
            </h1>
            <div className="flex items-start gap-2">
              <input type="radio" value="yes" {...register("mediaRelease")} />
              <label>
                I <span className="font-bold">DO</span> give permission for
                Spark STEM Academy to use photographs/videos of my child for
                educational or promotional purposes.
              </label>
            </div>
            <div className="flex gap-2">
              <input type="radio" value="no" {...register("mediaRelease")} />
              <label>
                I <span className="font-bold">DO NOT</span> give permission
              </label>
            </div>
          </div>

          {/* Signature & Consent */}
          <div className="w-full mt-4">
            <h1 className="text-lg font-montserrat mb-2">
              5. Consent and Release
            </h1>
            <p>
              By signing below, I acknowledge that I have read and understand
              this waiver, and agree to all terms outlined.
            </p>

            <label className="mt-2">Date:</label>
            <p className="w-full border-b border-black/30 focus:outline-none p-2">
              {new Date().toLocaleDateString()}
            </p>
            {errors.signedDate && (
              <span className="text-red-500">{errors.signedDate.message}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`mt-6 px-6 py-2 text-white rounded-lg xl:hover:cursor-pointer transition duration-200 ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#FF0066]"
            }`}
          >
            {loading ? "Submitting..." : "Submit & Proceed to Payment"}
          </button>

          {/* <p className='text-xs text-gray-500 mt-2'>*Wait for few minutes to proceed*</p> */}
        </form>
      </div>

      {/* Decorative images */}
      <motion.img
        ref={vect1Ref}
        style={{ x: vect1X }}
        src={vect1}
        alt=""
        className="hidden lg:block 2xl:block absolute w-1/4 left-4 -top-[12%] 2xl:top-[12%] opacity-90"
      />
      <motion.img
        ref={vect2Ref}
        style={{ x: vect2X }}
        src={vect2}
        alt=""
        className="hidden lg:block 2xl:block absolute w-1/4 right-4 top-[10%] 2xl:top-[24%] opacity-90"
      />
      <motion.img
        ref={vect3Ref}
        style={{ x: vect3X }}
        src={vect3}
        alt=""
        className="hidden lg:block absolute w-1/4 left-4 top-[30%] opacity-90"
      />
      <motion.img
        ref={vect4Ref}
        style={{ x: vect4X }}
        src={vect4}
        alt=""
        className="hidden lg:block absolute w-1/4 right-4 top-[50%] opacity-90"
      />
    </div>
  );
};

export default Liability;
