import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Payment = () => {
    const [userData, setUserData] = useState(null);
    const [amount, setAmount] = useState("420$");
    const [selectedCamp, setSelectedCamp] = useState("full");
    const [selectedTiming, setSelectedTiming] = useState(""); // state to store the selected timing

    const userId = localStorage.getItem("userId");
    console.log("Stored userId:", userId);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = localStorage.getItem('userId');
                if (!userId) {
                    throw new Error('User ID is missing');
                }

                const response = await fetch(`http://localhost:5000/api/user/getprofile/${userId}`);
                const data = await response.json();

                if (!data || !data.profile || !data.profile.camp) {
                    throw new Error('Camp data is missing in the response');
                }

                // Update the state with fetched data
                setUserData(data.profile);  // <-- set user data here

            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };

        fetchUserData();
    }, []);

    useEffect(() => {
        if (selectedCamp === "full") {
            setAmount("420$");
        } else if (selectedCamp === "half") {
            setAmount("230$");
        }
    }, [selectedCamp]);

    const handleCampChange = (event) => {
        setSelectedCamp(event.target.value);
        setSelectedTiming(""); // Reset timing when camp is changed
    };

    const handleTimingChange = (event) => {
        setSelectedTiming(event.target.value);
    };

    // Loading state while waiting for user data
    if (!userData) return <div className="text-red-600 p-10">Loading user data...</div>;

    return (
        <div className='min-h-screen h-auto w-full bg-gradient-to-b from-[#283353] via-[#16003E] to-[#16003E] flex flex-col justify-center items-center gap-2 p-4 relative'>
            <h2 className='font-gardion text-5xl 2xl:text-9xl text-[#f79824] drop-shadow-md drop-shadow-[#FF0066] text-stroke'>Checkout</h2>
            <form className='w-full 2xl:w-[30%] h-auto flex flex-col justify-start items-center gap-4 bg-white p-4 rounded-xl drop-shadow-lg'>
                <div className='w-full h-auto flex flex-col justify-start items-start'>
                    <label className='font-montserrat text-lg text-[#3d0301]'>First Name</label>
                    <input type="text" defaultValue={userData.studentFirstName} className='w-full p-3 border-b border-black/20 focus:outline-none' readOnly />
                </div>
                <div className='w-full h-auto flex flex-col justify-start items-start'>
                    <label className='font-montserrat text-lg text-[#3d0301]'>Last Name</label>
                    <input type="text" defaultValue={userData.studentLastName} className='w-full p-3 border-b border-black/20 focus:outline-none' readOnly />
                </div>
                <div className='w-full h-auto flex flex-col justify-start items-start'>
                    <label className='font-montserrat text-lg text-[#3d0301]'>E-mail</label>
                    <input type="text" defaultValue={userData.email} className='w-full p-3 border-b border-black/20 focus:outline-none' readOnly />
                </div>
                <div className='w-full h-auto flex flex-col justify-start items-start'>
                    <label className='font-montserrat text-lg text-[#3d0301]'>Phone</label>
                    <input type="text" defaultValue={userData.phone} className='w-full p-3 border-b border-black/20 focus:outline-none' readOnly />
                </div>
                <div className='w-full h-auto flex flex-col justify-start items-start'>
                    <label className='font-montserrat text-lg text-[#3D0301]'>Select Camp</label>
                    <select value={selectedCamp} onChange={handleCampChange} className='border w-full p-3 border-black/20'>
                        <option value="">Select Camp</option>
                        <option value="full">Full Day (9am - 12am AND 1pm - 4pm)</option>
                        <option value="half">Half Day (9am - 12am OR 1pm - 4pm)</option>
                    </select>
                </div>

                {/* Conditionally Render Timing Field for Half Day */}
                {selectedCamp === "half" && (
                    <div className='w-full h-auto flex flex-col justify-start items-start'>
                        <label className='font-montserrat text-lg text-[#3D0301]'>Preferred Timing</label>
                        <select value={selectedTiming} onChange={handleTimingChange} className='border w-full p-3 border-black/20'>
                            <option value="">Select Timing</option>
                            <option value="morning">Morning (9am - 12am)</option>
                            <option value="afternoon">Afternoon (1pm - 4pm)</option>
                        </select>
                    </div>
                )}

                <div className='w-full flex flex-col justify-center items-start'>
                    <label className='font-montserrat text-lg text-[#3D0301]'>Location</label>
                    <select defaultValue={userData.location} className='border w-full p-3 border-black/20' disabled>
                        <option value="">Select Location</option>
                        <option value="lawrenceville">Lawrenceville - Gwinnett School</option>
                        <option value="suwanee">Suwanee / Sugar Hill - North Gwinnett</option>
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
