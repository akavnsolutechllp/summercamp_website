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
    if (data.camp === "full" && !data.timings) {
      data.timings = "9AM - 4PM"; // Static timing for Full Day camp
    }

    navigate("/liability");
  };

  const campSchedules = [
    {
      location: "GSMST",
      date: "June 2 - June 5",
      morning: "Inventor’s Workshop | 09:00AM - 12:00PM",
      afternoon: "Circuit Science | 01:00PM - 04:00PM",
    },
    // {
    //   location: "Northview High School",
    //   date: "June 9 – June 12",
    //   morning: "Inventor’s Workshop | 09:00AM - 12:00PM",
    //   afternoon: "Circuit Science | 01:00PM - 04:00PM",
    // },
    {
      location: "North Gwinnett High School",
      date: "June 9 – June 12",
      morning: "Inventor’s Workshop | 09:00AM - 12:00PM",
      afternoon: "Circuit Science | 01:00PM - 04:00PM",
    },
    // {
    //   location: "Alpharetta High School",
    //   date: "June 23 – June 26",
    //   morning: "Inventor’s Workshop | 09:00AM - 12:00PM",
    //   afternoon: "Circuit Science | 01:00PM - 04:00PM",
    // },
    {
      location: "GSMST",
      date: "June 23 – June 26",
      morning: "Inventor’s Workshop | 09:00AM - 12:00PM",
      afternoon: "Circuit Science | 01:00PM - 04:00PM",
    },
    {
      location: "Sharon Forks Library ",
      date: "June 30 - July 3",
      morning: "Circuit Science | 09:00AM - 12:00PM",
    },
    // {
    //   location: "Northview High School",
    //   date: "July 7 – July 10",
    //   morning: "STEM Builders | 09:00AM - 12:00PM",
    //   afternoon: "Mini Makers | 01:00PM - 04:00PM",
    // },
    {
      location: "North Gwinnett High School",
      date: "July 14 – July 17",
      morning: "STEM Builders | 09:00AM - 12:00PM",
      afternoon: "Mini Makers | 01:00PM - 04:00PM",
    },
  ];


  const campSelection = watch("camp"); // watch camp selection
  const selectedSession = watch("campSession");
  const selectedSchedule = campSchedules.find(
    (camp) =>
      selectedSession &&
      selectedSession.includes(camp.location) &&
      selectedSession.includes(camp.date)
  );

  return (
    <div
      id="Registration"
      className="bg-gradient-to-b from-[#283353] via-[#283353] to-[#16003E] min-h-screen h-auto w-full flex flex-col justify-center items-center  overflow-hidden"
    >
      <Navbar />
      <Menu />
      <div className="min-h-screen w-full flex flex-col justify-center items-center gap-4 p-4">
        <h2 className="font-montserrat uppercase text-5xl text-center tracking-wider md:text-7xl lg:text-9xl xl:text-8xl 2xl:text-9xl p-2 rounded-lg text-[#f79824] drop-shadow-md drop-shadow-[#FF0066] z-20 text-stroke">
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
                className="border w-full p-3 border-black/20 focus:outline-none"
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
              <label className="font-montserrat text-lg text-black focus:outline-none">
                Student: Last Name
              </label>
              <input
                type="text"
                className="border w-full p-3 border-black/20 focus:outline-none"
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
                className="border w-full p-3 border-black/20 focus:outline-none"
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
                className="border w-full p-3 border-black/20 focus:outline-none"
                {...register("age", {
                  required: "Age is required",
                  max: {
                    value: 18,
                    message: "Age must be 18 or below",
                  },
                })}
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
                className="border w-full p-3 border-black/20 focus:outline-none"
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
              <div className="w-full flex items-center gap-4 p-3 border border-black/20 focus:outline-none">
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
                className="border w-full p-3 border-black/20 focus:outline-none"
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

            <div className="w-full flex flex-col justify-center items-start">
              <label className="font-montserrat text-lg text-black">
                Select Camp Location & Date
              </label>
              <select
                {...register("campSession", {
                  required: "Please select a session",
                })}
                className="border w-full p-3 border-black/20 focus:outline-none"
              >
                <option value="">-- Select a session --</option>
                {campSchedules.map((camp, index) => (
                  <option
                    key={index}
                    value={`${camp.location} | ${camp.date} | Morning: ${camp.morning}, Afternoon: ${camp.afternoon}`}
                  >
                    {camp.location} – {camp.date}
                  </option>
                ))}
              </select>
              {errors.campSession && (
                <span className="text-red-600 text-sm">
                  {errors.campSession.message}
                </span>
              )}
              {selectedSession && (
                <div className="w-full flex flex-col justify-center items-start">
                  <label className="font-montserrat text-lg text-black">
                    Select Activity
                  </label>
                  <select
                    {...register("activity", {
                      required: "Please select an activity",
                    })}
                    className="border w-full p-3 border-black/20 focus:outline-none"
                  >
                    <option value="">-- Choose Activity --</option>
                    {campSelection === "full" && selectedSchedule && (
                      <>
                        <option
                          value={`${selectedSchedule.morning}, ${selectedSchedule.afternoon}`}
                        >
                          {selectedSchedule.morning} & {selectedSchedule.afternoon}
                        </option>
                      </>
                    )}
                    {campSelection === "half" && selectedSchedule && (
                      <>
                        <option value={selectedSchedule.morning}>
                          {selectedSchedule.morning} 
                        </option>
                        <option value={selectedSchedule.afternoon}>
                          {selectedSchedule.afternoon} 
                        </option>
                      </>
                    )}
                  </select>
                  {errors.activity && (
                    <span className="text-red-600 text-sm">
                      {errors.activity.message}
                    </span>
                  )}
                </div>
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
