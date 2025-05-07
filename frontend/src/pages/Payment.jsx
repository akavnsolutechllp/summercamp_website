import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

// const stripePromise = loadStripe("pk_live_51RHlofA5NifUX0tMYNOQcaTfuhETTC38zQeyyx855toElkKFYiWnBThn5RNPBpuRqpTA14EiX8APNufztZVcMWOt008B0SmAr6");
const stripePromise = loadStripe("pk_test_51RHlofA5NifUX0tMnXjDo9j6WXtW3ZjCIiqFJKpb0VnWogATjF2EJ3e25y77RKfAgFrel03W3fxNnITW9YsNPobg001cPjcNnG");


const CheckoutForm = ({ userData, amount ,selectedCamp, selectedTiming }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState(null);
    const [processing, setProcessing] = useState(false);

    const navigate = useNavigate();

    const userId = localStorage.getItem("userId");

    useEffect(() => {
        const fetchClientSecret = async () => {
            const numericAmount = parseFloat(amount.replace("$", "")) * 100; // convert to cents
            const { data } = await axios.post("http://localhost:4000/api/payment/create-payment-intent", {
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
                activiy:userData.activity,
                timing: selectedCamp === "half" ? selectedTiming : "full-day",
                location: userData.location,
                amount: amount.replace("$", ""),
            };
    
            try {
                // 1. Download invoice
                const res = await axios.post(
                    "http://localhost:4000/api/payment/generate-invoice",
                    payload,
                    { responseType: "blob" } // Expect PDF blob
                );
    
                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", `Invoice_${userData.studentFirstName}_${userData.studentLastName}.pdf`);
                document.body.appendChild(link);
                link.click();
                link.remove();
                localStorage.setItem("payment", "true");
                navigate('/success-payment');
    
            } catch (err) {
                console.error("Invoice download error:", err.response?.data || err.message || err);
                alert("Payment succeeded, but invoice download failed.");
            }
    
            // try {
            //     // 2. Send invoice to email
            //     const emailRes = await axios.post("http://localhost:5000/api/payment/send-invoice", payload);
            //     if (emailRes.data.success) {
            //         alert("Invoice also sent to your email!");
            //     } else {
            //         alert("Invoice email failed to send.");
            //     }
            // } catch (err) {
            //     console.error("Invoice email error:", err.response?.data || err.message || err);
            //     alert("Payment succeeded, but sending invoice email failed.");
            // }
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
    const [amount, setAmount] = useState("420$");
    const [selectedCamp, setSelectedCamp] = useState("");
    const [selectedTiming, setSelectedTiming] = useState("");

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = localStorage.getItem('userId');
                if (!userId) throw new Error('User ID is missing');
                // if(!userId){
                // // localStorage.setItem("payment", "false"); 
                // }
                const res = await fetch(`http://localhost:4000/api/user/getprofile/${userId}`);
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
        setAmount(selectedCamp === "half" ? "230$" : "420$");
    }, [selectedCamp]);

    const handleTimingChange = (e) => {
        setSelectedTiming(e.target.value);
    };

    if (!userData) return <div className="text-red-600 p-10 text-center font-montserrat uppercase">Loading user data...</div>;

    return (
        <div className='min-h-screen w-full  bg-gradient-to-b from-[#283353] via-[#16003E] to-[#16003E] flex flex-col items-center gap-2 p-4'>
            <h2 className='font-montserrat uppercase text-5xl text-[#f79824] drop-shadow-md drop-shadow-[#FF0066]'>Checkout</h2>
            <div className='w-full md:w-[60%] xl:w-[40%] 2xl:w-[30%] bg-white p-6 rounded-xl shadow-lg'>
                
                <div className='space-y-4'>
                    <input type="text" value={userData.studentFirstName} readOnly className='w-full font-montserrat p-3 border-b border-black/20 focus:outline-none' />
                    <input type="text" value={userData.studentLastName} readOnly className='w-full font-montserrat p-3 border-b border-black/20 focus:outline-none' />
                    <input type="email" value={userData.email} readOnly className='w-full font-montserrat p-3 border-b border-black/20 focus:outline-none' />
                    <input type="text" value={userData.phone} readOnly className='w-full font-montserrat p-3 border-b border-black/20 focus:outline-none' />
                    
                    <div className='text-xl flex flex-col gap-2 justify-between'>
                        <span className='font-semibold'>Camp: {selectedCamp === "half" ? "Half Day" : "Full Day"}</span>
                        <span className='font-semibold'>Timing: {selectedCamp === "full" ? "09:00 AM - 04:00 PM" : selectedTiming}</span>
                        <span className='font-semibold'>Location:{userData.campSession}</span>
                        <span className='font-semibold'>Activity:{userData.activity}</span>
                    </div>

                    <div className='text-xl flex justify-between'>
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
