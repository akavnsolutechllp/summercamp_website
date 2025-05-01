import React from 'react'
import { useForm } from 'react-hook-form';
import { useFormData } from '../context/FormDataContext';
import { useNavigate } from 'react-router-dom';

import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin);

const Registration = () => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset 
  } = useForm();

  const { setFormData } = useFormData();


  const scrollToSection = (sectionId) => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: `#${sectionId}`, offsetY: 70 },
      ease: "power2.inOut"
    })
  }

  const onSubmit = (data) => {
    setFormData(data); 
    navigate('/liability');
  };

  return (
    <div id='Registration' className='bg-[#42D775] min-h-screen h-auto w-full flex flex-col justify-center items-center bg-register p-4 overflow-hidden'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full md:w-[70%] lg:w-[50%] xl:w-[66%] 2xl:w-[50%] h-full flex flex-col justify-start items-center gap-2 bg-white drop-shadow-2xl p-4 rounded-xl'
      >
        <div className='w-full h-auto flex flex-col lg:flex-row justify-center items-start gap-6'>
          <div className='w-full flex flex-col justify-center items-start'>
            <label className='font-montserrat text-lg text-black'>Student: First Name</label>
            <input
              type='text'
              className='border w-full p-3 border-black/20'
              {...register('studentFirstName', { required: 'First name is required' })}
            />
            {errors.studentFirstName && <span className="text-red-600 text-sm">{errors.studentFirstName.message}</span>}
          </div>
          <div className='w-full flex flex-col justify-center items-start'>
            <label className='font-montserrat text-lg text-black'>Student: Last Name</label>
            <input
              type='text'
              className='border w-full p-3 border-black/20'
              {...register('studentLastName', { required: 'Last name is required' })}
            />
            {errors.studentLastName && <span className="text-red-600 text-sm">{errors.studentLastName.message}</span>}
          </div>
        </div>

        {/* Grade + Allergies */}
        <div className='w-full h-auto flex flex-col lg:flex-row justify-center items-start gap-6'>
          <div className='w-full flex flex-col justify-center items-start lg:mt-7'>
            <label className='font-montserrat text-lg text-black'>Grade</label>
            <select
              className='border w-full p-3 border-black/20'
              {...register('grade', { required: 'Grade is required' })}
            >
              <option value="">Select Grade</option>
              <option value="grade1">Grade 1</option>
              <option value="grade2">Grade 2</option>
              <option value="grade3">Grade 3</option>
              <option value="grade4">Grade 4</option>
              <option value="grade5">Grade 5</option>
              <option value="grade6">Grade 6</option>
            </select>
            {errors.grade && <span className="text-red-600 text-sm">{errors.grade.message}</span>}
          </div>
          <div className='w-full flex flex-col justify-center items-start'>
            <label className='font-montserrat text-lg text-black'>Does your child have any allergies (Food, Medication, Insect Stings, Environmental, etc.)?</label>
            <input
              type='text'
              className='border w-full p-3 border-black/20'
              {...register('allergies')}
            />
          </div>
        </div>

        {/* T-shirt Size */}
        <div className='w-full h-auto flex flex-col lg:flex-row justify-center items-start gap-6'>
          <div className='w-full flex flex-col justify-center items-start'>
            <label className='font-montserrat text-lg text-black'>T-shirt Size</label>
            <select
              className='border w-full p-3 border-black/20'
              {...register('tshirtSize', { required: 'T-shirt size is required' })}
            >
              <option value="">Select Size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            {errors.tshirtSize && <span className="text-red-600 text-sm">{errors.tshirtSize.message}</span>}
          </div>
        </div>

        {/* Parent Name */}
        <div className='w-full h-auto flex flex-col lg:flex-row justify-center items-start gap-6'>
          <div className='w-full flex flex-col justify-center items-start'>
            <label className='font-montserrat text-lg text-black'>Parent: First Name</label>
            <input
              type='text'
              className='border w-full p-3 border-black/20'
              {...register('parentFirstName', { required: 'First name is required' })}
            />
            {errors.parentFirstName && <span className="text-red-600 text-sm">{errors.parentFirstName.message}</span>}
          </div>
          <div className='w-full flex flex-col justify-center items-start'>
            <label className='font-montserrat text-lg text-black'>Parent: Last Name</label>
            <input
              type='text'
              className='border w-full p-3 border-black/20'
              {...register('parentLastName', { required: 'Last name is required' })}
            />
            {errors.parentLastName && <span className="text-red-600 text-sm">{errors.parentLastName.message}</span>}
          </div>
        </div>

        {/* Parent Contact */}
        <div className='w-full h-auto flex flex-col lg:flex-row justify-center items-start gap-6'>
          <div className='w-full flex flex-col justify-center items-start'>
            <label className='font-montserrat text-lg text-black'>Parent: E-mail</label>
            <input
              type='email'
              className='border w-full p-3 border-black/20'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
          </div>
          <div className='w-full flex flex-col justify-center items-start'>
            <label className='font-montserrat text-lg text-black'>Parent: Phone</label>
            <input
              type='tel'
              className='border w-full p-3 border-black/20'
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Invalid phone number'
                }
              })}
            />
            {errors.phone && <span className="text-red-600 text-sm">{errors.phone.message}</span>}
          </div>
        </div>

        {/* Camp & Location */}
        <div className='w-full h-auto flex flex-col lg:flex-row justify-center items-start gap-6'>
          <div className='w-full flex flex-col justify-center items-start'>
            <label className='font-montserrat text-lg text-black'>Select Camp</label>
            <select
              className='border w-full p-3 border-black/20'
              {...register('camp', { required: 'Camp selection is required' })}
            >
              <option value="">Select Camp</option>
              <option value="full">Full Day (9am - 12am AND 1pm - 4pm)</option>
              <option value="half">Half Day (9am - 12am OR 1pm - 4pm)</option>
            </select>
            {errors.camp && <span className="text-red-600 text-sm">{errors.camp.message}</span>}
          </div>
          <div className='w-full flex flex-col justify-center items-start'>
            <label className='font-montserrat text-lg text-black'>Location</label>
            <select
              className='border w-full p-3 border-black/20'
              {...register('location', { required: 'Location is required' })}
            >
              <option value="">Select Location</option>
              <option value="lawrenceville">Lawrenceville - Gwinnett School of Mathematics, Scienece and Technology</option>
              <option value="suwanee">Suwanee / Sugar Hill - North Gwinnett Middle School</option>
            </select>
            {errors.location && <span className="text-red-600 text-sm">{errors.location.message}</span>}
          </div>
        </div>

        <div className='w-full flex justify-center items-center gap-2 mt-4'>
          <button
            type='submit'
            className='py-2 px-8 bg-[#FF2E4C] text-white text-xl font-montserrat rounded-full lg:cursor-pointer drop-shadow-lg'
          >
            Next
          </button>
        </div>
      </form>
    </div>
  )
}

export default Registration
