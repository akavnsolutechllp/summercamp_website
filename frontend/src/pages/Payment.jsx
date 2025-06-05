import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe("pk_live_51RHlofA5NifUX0tMYNOQcaTfuhETTC38zQeyyx855toElkKFYiWnBThn5RNPBpuRqpTA14EiX8APNufztZVcMWOt008B0SmAr6");
// const stripePromise = loadStripe("pk_test_51RHlofA5NifUX0tMnXjDo9j6WXtW3ZjCIiqFJKpb0VnWogATjF2EJ3e25y77RKfAgFrel03W3fxNnITW9YsNPobg001cPjcNnG");

const CheckoutForm = ({ userData, amount ,selectedCamp, selectedTiming }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState(null);
    const [processing, setProcessing] = useState(false);

    const navigate = useNavigate();

    const userId = localStorage.getItem("userId");

    useEffect(() => {
        const fetchClientSecret = async () => {
            const numericAmount = Math.round(parseFloat(amount.replace("$", "")) * 100); 
            const { data } = await axios.post("https://summercamp-website.onrender.com/api/payment/create-payment-intent", {
                amount: numericAmount,
            });
            setClientSecret(data.clientSecret);
        };
        fetchClientSecret();
    }, [amount]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements || !clientSecret) return;
    
        setProcessing(true);
    
        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });
    
        if (error) {
            alert(`Payment failed: ${error.message}`);
            setProcessing(false);
            navigate('/failed-payment');
            return;
        }
    
        if (paymentIntent.status === "succeeded") {
            alert("Payment successful!");
    
            const payload = {
                userId: userId,
                firstName: userData.studentFirstName,
                lastName: userData.studentLastName,
                email: userData.email,
                phone: userData.phone,
                campType: selectedCamp,
                campSession:userData.campSession,
                activity:userData.activity,
                timing: selectedCamp === "half" ? selectedTiming : "full-day",
                location: userData.location,
                amount: amount.replace("$", ""),
            };
    
            try {
                const res = await axios.post("https://summercamp-website.onrender.com/api/payment/send-invoice", payload);
            
                if (res.status === 200 && res.data.success) {
                    localStorage.setItem("payment", "true");
                    navigate('/success-payment');
                } else {
                
                    console.error("Invoice generation failed:", res.data);
                    alert("Payment succeeded, but invoice generation failed.");
                }
            } catch (err) {
                console.error("Invoice generation error:", err.response?.data || err.message || err);
                alert("Payment succeeded, but invoice generation request failed.");
            }
        }
    
        setProcessing(false);
    };

    return (
        <form onSubmit={handleSubmit} className='w-full flex flex-col items-center gap-4'>
            <div className='w-full bg-gray-100 p-4 rounded'>
                <CardElement />
            </div>
            <button
                className='w-full bg-[#FF2E4C] py-2 font-gt text-white'
                type='submit'
                disabled={!stripe || processing}
            >
                {processing ? "Processing..." : "Pay Now"}
            </button>
        </form>
    );
};

const Payment = () => {
    const [userData, setUserData] = useState(null);
    const [baseAmount, setBaseAmount] = useState(420); // numeric base amount in dollars
    const [amount, setAmount] = useState("420$");
    const [selectedCamp, setSelectedCamp] = useState("");
    const [selectedTiming, setSelectedTiming] = useState("");

 
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = localStorage.getItem('userId');
                if (!userId) throw new Error('User ID is missing');
                // if(!userId){
                // localStorage.setItem("payment", "false"); 
                // navigate('/register');
                // }
                const res = await fetch(`https://summercamp-website.onrender.com/api/user/getprofile/${userId}`);
                const data = await res.json();
                if (!data?.profile?.camp) throw new Error('Camp data is missing');
                setUserData(data.profile);
                setSelectedCamp(data.profile.camp);

                if (data.profile.timings) {
                    setSelectedTiming(data.profile.timings);
                }

            } catch (err) {
                console.error(err.message);
            }
        };
        fetchUserData();
    }, []);

    useEffect(() => {
        const newBase = selectedCamp === "half" ? 230 : 430;
        const totalWithFee = Math.round(newBase * 1.03); // Add 3% fee
        setBaseAmount(newBase);
        setAmount(`${totalWithFee}$`);
    }, [selectedCamp]);
    

    const handleTimingChange = (e) => {
        setSelectedTiming(e.target.value);
    };

    if (!userData) return <div className="text-red-600 p-10 text-center font-montserrat uppercase">Loading user data...</div>;

        const part1 = userData?.campSession?.split('|').map(p => p.trim()) || [];
        const part2 = userData?.activity?.split(',').map(p => p.trim()) || [];
    
        const location = part1[0] || '';
        const date = part1[1] || '';
        
        const activity1 = part2[0] || '';
        const activity2 = part2[1] || '';
        
        const fpart1 = activity1?.split('|').map(p => p.trim()) || [];
        const fpart2 = activity2?.split('|').map(p => p.trim()) || [];
        
        const factivity1 = fpart1[0] || '';
        const factivity2 = fpart2[0] || '';
    
        const hpart1 = userData?.activity?.split('|').map(p => p.trim()) || [];
        const hactivity = hpart1[0];
    
        const time = selectedCamp === "half" ? `${hpart1[1]}` : "09:00 AM - 04:00 PM";
    
    return (
        <div className='min-h-screen w-full bg-gradient-to-b from-[#283353] via-[#16003E] to-[#16003E] flex flex-col justify-center items-center gap-2 p-4'>
            <h2 className='font-montserrat uppercase text-5xl lg:text-6xl 2xl:text-7xl text-[#f79824] drop-shadow-md drop-shadow-[#FF0066] -mt-4'>Checkout</h2>
            <div className='w-full md:w-[60%] xl:w-[40%] 2xl:w-[30%] bg-white p-6 rounded-xl shadow-lg'>

                <div className='space-y-4'>
                    <input type="text" value={userData.studentFirstName} readOnly className='w-full font-montserrat p-3 border-b border-black/20 focus:outline-none' />
                    <input type="text" value={userData.studentLastName} readOnly className='w-full font-montserrat p-3 border-b border-black/20 focus:outline-none' />
                    <input type="email" value={userData.email} readOnly className='w-full font-montserrat p-3 border-b border-black/20 focus:outline-none' />
                    <input type="text" value={userData.phone} readOnly className='w-full font-montserrat p-3 border-b border-black/20 focus:outline-none' />
                    <div className='text-xl flex flex-col gap-2 justify-between'>
                        <span >Camp Type: <span className='font-semibold'>{selectedCamp === "half" ? "Half Day" : "Full Day"}</span></span>
                        <span >Date: <span className='font-semibold'>{date}</span></span>
                        <span>Time: <span className='font-semibold'>{time}</span></span>
                        <span >Location: <span className='font-semibold'>{location}</span> </span>
                        <span >Camp:</span>
                        {
                            selectedCamp === "half" ? (
                                <div>
                                <ul className='w-full flex flex-col gap-2 list-disc px-6'>
                                <li className='font-semibold'> {hactivity}</li>
                                </ul>    
                                </div>
                            ) : (
                                <ul className='w-full flex flex-col gap-2 list-disc px-6'>
                                <li className='font-semibold'>{factivity1}</li>
                                <li className='font-semibold'>{factivity2}</li>
                              </ul>    
                            )
                        }
                    </div>

                    <div className='text-xl flex justify-between font-montserrat'>
                        <span>Total:</span>
                        <span>{amount}</span>
                    </div>
                </div>

                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        userData={userData}
                        amount={amount}
                        selectedCamp={selectedCamp}
                        selectedTiming={selectedTiming}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;