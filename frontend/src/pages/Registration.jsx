import React from "react";
import { useForm } from "react-hook-form";
import { useFormData } from "../context/FormDataContext";
import { useNavigate } from "react-router-dom";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Navbar from "../Components/Navbar";
import Menu from "../Components/Menu";

gsap.registerPlugin(ScrollToPlugin);

const Registration = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const { setFormData } = useFormData();

  const scrollToSection = (sectionId) => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: `#${sectionId}`, offsetY: 70 },
      ease: "power2.inOut",
    });
  };

  const onSubmit = (data) => {
      setFormData(data);
      navigate("/liability");
  };

  const campSelection = watch("camp"); // watch camp selection

  return (
    <div
      id="Registration"
      className="bg-gradient-to-b from-[#283353] via-[#283353] to-[#16003E] min-h-screen h-auto w-full flex flex-col justify-center items-center  overflow-hidden"
    >
      <Navbar />
      <Menu />
      <div className="min-h-screen w-full flex flex-col justify-center items-center gap-4 p-4">
        <h2 className="font-gardion text-5xl text-center tracking-wider md:text-7xl lg:text-9xl xl:text-8xl 2xl:text-9xl p-2 rounded-lg text-[#f79824] drop-shadow-md drop-shadow-[#FF0066] z-20 text-stroke">
          Register Now
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full md:w-[70%] lg:w-[50%] xl:w-[66%] 2xl:w-[50%] h-full flex flex-col justify-start items-center gap-2 bg-white drop-shadow-2xl p-4 rounded-xl"
        >
          <div className="w-full h-auto flex flex-col lg:flex-row justify-center items-start gap-6">
            <div className="w-full flex flex-col justify-center items-start">
              <label className="font-montserrat text-lg text-black">
                Student: First Name
              </label>
              <input
                type="text"
                className="border w-full p-3 border-black/20"
                {...register("studentFirstName", {
                  required: "First name is required",
                })}
              />
              {errors.studentFirstName && (
                <span className="text-red-600 text-sm">
                  {errors.studentFirstName.message}
                </span>
              )}
            </div>
            <div className="w-full flex flex-col justify-center items-start">
              <label className="font-montserrat text-lg text-black">
                Student: Last Name
              </label>
              <input
                type="text"
                className="border w-full p-3 border-black/20"
                {...register("studentLastName", {
                  required: "Last name is required",
                })}
              />
              {errors.studentLastName && (
                <span className="text-red-600 text-sm">
                  {errors.studentLastName.message}
                </span>
              )}
            </div>
          </div>

          {/* Grade + Allergies */}
          <div className="w-full h-auto flex flex-col lg:flex-row justify-center items-start gap-8">
            {/* Grade */}
            <div className="w-full flex flex-col justify-center items-start">
              <label className="font-montserrat text-lg text-black">
                Grade
              </label>
              <select
                className="border w-full p-3 border-black/20"
                {...register("grade", { required: "Grade is required" })}
              >
                <option value="">Select Grade</option>
                <option value="grade1">Grade 1</option>
                <option value="grade2">Grade 2</option>
                <option value="grade3">Grade 3</option>
                <option value="grade4">Grade 4</option>
                <option value="grade5">Grade 5</option>
                <option value="grade6">Grade 6</option>
              </select>
              {errors.grade && (
                <span className="text-red-600 text-sm">
                  {errors.grade.message}
                </span>
              )}
            </div>

            {/* Age */}
            <div className="w-full  flex flex-col justify-center items-start">
              <label className="font-montserrat text-lg text-black">Age</label>
              <input
                type="number"
                className="border w-full p-3 border-black/20"
                {...register("age", { required: "Age is required" })}
              />
              {errors.age && (
                <span className="text-red-600 text-sm">
                  {errors.age.message}
                </span>
              )}
            </div>
          </div>

          {/* T-shirt Size */}
          <div className="w-full h-auto flex flex-col lg:flex-row justify-center items-start gap-6">
            <div className="w-full flex flex-col justify-center items-start">
              <label className="font-montserrat text-lg text-black">
                T-shirt Size
              </label>
              <select
                className="border w-full p-3 border-black/20"
                {...register("tshirtSize", {
                  required: "T-shirt size is required",
                })}
              >
                <option value="">Select Size</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
              {errors.tshirtSize && (
                <span className="text-red-600 text-sm">
                  {errors.tshirtSize.message}
                </span>
              )}
            </div>
            <div className="w-full flex flex-col justify-center items-start">
              <label className="font-montserrat text-lg text-black">
                Gender
              </label>
              <div className="w-full flex items-center gap-4 p-3 border border-black/20">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    value="boy"
                    {...register("gender", { required: "Gender is required" })}
                  />
                  <span className="font-montserrat">Boy</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" value="girl" {...register("gender")} />
                  <span className="font-montserrat">Girl</span>
                </label>
              </div>
              {errors.gender && (
                <span className="text-red-600 text-sm mt-1">
                  {errors.gender.message}
                </span>
              )}
            </div>
          </div>

          {/* Camp & Location */}
          {/* Camp & Location */}
          <div className="w-full h-auto flex flex-col lg:flex-row justify-center items-start gap-6">
            <div className="w-full flex flex-col justify-center items-start">
              <label className="font-montserrat text-lg text-black">
                Select Camp
              </label>
              <select
                className="border w-full p-3 border-black/20"
                {...register("camp", {
                  required: "Camp selection is required",
                })}
              >
                <option value="">Select Camp</option>
                <option value="full">Full Day (9AM - 4PM)</option>
                <option value="half">Half Day (9AM - 12PM OR 1PM - 4PM)</option>
              </select>
              {errors.camp && (
                <span className="text-red-600 text-sm">
                  {errors.camp.message}
                </span>
              )}
            </div>

            {campSelection === "half" && (
              <div className="w-full flex flex-col justify-center items-start">
                <label className="font-montserrat text-lg text-black">
                  Half Day Timing
                </label>
                <select
                  className="border w-full p-3 border-black/20"
                  {...register("timings", {
                    required: "Timing selection is required for Half Day camp",
                  })}
                >
                  <option value="">Select Timing</option>
                  <option value="morning">9AM - 12PM</option>
                  <option value="afternoon">1PM - 4PM</option>
                </select>
                {errors.timings && (
                  <span className="text-red-600 text-sm">
                    {errors.timings.message}
                  </span>
                )}
              </div>
            )}

            <div className="w-full flex flex-col justify-center items-start">
              <label className="font-montserrat text-lg text-black">
                Location
              </label>
              <select
                className="border w-full p-3 border-black/20"
                {...register("location", { required: "Location is required" })}
              >
                <option value="">Select Location</option>
                <option value="lawrenceville">
                  Lawrenceville - Gwinnett School of Mathematics, Scienece and
                  Technology
                </option>
                <option value="suwanee">
                  Suwanee / Sugar Hill - North Gwinnett Middle School
                </option>
              </select>
              {errors.location && (
                <span className="text-red-600 text-sm">
                  {errors.location.message}
                </span>
              )}
            </div>
          </div>

          <div className="w-full flex justify-center items-center gap-2 mt-4">
            <button
              type="submit"
              className="py-2 px-8 bg-[#FF2E4C] text-white text-xl font-montserrat rounded-full lg:cursor-pointer drop-shadow-lg"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
