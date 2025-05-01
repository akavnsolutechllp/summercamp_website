import React, { useState, useEffect } from 'react';
import { useFormData } from '../context/FormDataContext';

import rainbow  from '../assets/rainbow.jpg'

const Payment = () => {
    const { formData } = useFormData();

    const [amount, setAmount] = useState("420$");
    const [selectedCamp, setSelectedCamp] = useState(formData.camp || "full"); // Default to formData.camp

    // useEffect to update amount based on selected camp
    useEffect(() => {
        if (selectedCamp === "full") {
            setAmount("420$");
        } else if (selectedCamp === "half") {
            setAmount("230$");
        }
    }, [selectedCamp]); // This will run whenever selectedCamp changes

    // Handle camp selection change
    const handleCampChange = (event) => {
        setSelectedCamp(event.target.value);
    };

    // Debugging - Log formData to check values
    console.log(formData);

    return (
        <div className='min-h-screen h-auto w-full bg-[#FFF6E3] flex flex-col justify-center items-center gap-2 p-4 relative'>
            <img src={rainbow} alt="" className='absolute w-full h-full' />
            <h2 className='text-3xl 2xl:text-6xl font-montserrat bg-[#FF2E4C] p-2 rounded-2xl text-white z-10'>Checkout</h2>
            <form action="" className='w-full 2xl:w-[30%] h-auto flex flex-col justify-start items-center gap-4 bg-white p-4 rounded-xl drop-shadow-lg'>
                <div className='w-full h-auto flex flex-col justify-start items-start'>
                    <label htmlFor="" className='font-montserrat text-lg text-[#3d0301]'>First Name</label>
                    <input type="text" defaultValue={formData.studentFirstName} className='w-full p-3 border-b border-black/20' />
                </div>
                <div className='w-full h-auto flex flex-col justify-start items-start'>
                    <label htmlFor="" className='font-montserrat text-lg text-[#3d0301]'>Last Name</label>
                    <input type="text" defaultValue={formData.studentLastName} className='w-full p-3 border-b border-black/20' />
                </div>
                <div className='w-full h-auto flex flex-col justify-start items-start'>
                    <label htmlFor="" className='font-montserrat text-lg text-[#3d0301]'>E-mail</label>
                    <input type="text" defaultValue={formData.studentLastName} className='w-full p-3 border-b border-black/20' />
                </div>
                <div className='w-full h-auto flex flex-col justify-start items-start'>
                    <label htmlFor="" className='font-montserrat text-lg text-[#3d0301]'>Phone</label>
                    <input type="text" defaultValue={formData.phone} className='w-full p-3 border-b border-black/20' />
                </div>
                <div className='w-full h-auto flex flex-col justify-start items-start'>
                    <label className='font-montserrat text-lg text-[#3D0301]'>Select Camp</label>
                    <select 
                        value={selectedCamp}  // This binds the selected camp to the state
                        onChange={handleCampChange}  // This updates the state when the user selects a different camp
                        className='border w-full p-3 border-black/20'>
                        <option value="">Select Camp</option>
                        <option value="full">Full Day (9am - 12am AND 1pm - 4pm)</option>
                        <option value="half">Half Day (9am - 12am OR 1pm - 4pm)</option>
                    </select>
                </div>
                <div className='w-full flex flex-col justify-center items-start'>
                    <label className='font-montserrat text-lg text-[#3D0301]'>Location</label>
                    <select
                        defaultValue={formData.location}
                        className='border w-full p-3 border-black/20'>
                        <option value="">Select Location</option>
                        <option value="lawrenceville">Lawrenceville - Gwinnett School of Mathematics, Science and Technology</option>
                        <option value="suwanee">Suwanee / Sugar Hill - North Gwinnett Middle School</option>
                    </select>
                </div>
                <div className='h-auto w-full flex justify-between items-center text-2xl'>
                    <p className='font-montserrat'>Total Amount:</p>
                    <p className='font-montserrat'>{amount}</p>
                </div>
                <button className='w-full bg-[#FF2E4C] py-2 font-gt text-white'>Pay Now</button>
            </form>
        </div>
    );
};

export default Payment;
