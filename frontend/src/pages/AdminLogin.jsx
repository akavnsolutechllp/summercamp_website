import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/api/admin/login', { email, password });
      setMessage('Login successful');
      setError('');

      // Save token to localStorage
      localStorage.setItem('adminToken', res.data.token);
      // Redirect to admin dashboard
      navigate('/admin-dashboard');
    } catch (err) {
      setMessage('');
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className='bg-gradient-to-b from-[#283353] via-[#283353] to-[#16003E] min-h-screen h-auto w-full flex flex-col justify-center items-center overflow-hidden'>
      <h2 className="font-montserrat uppercase text-5xl text-center tracking-wider md:text-7xl lg:text-4xl xl:text-5xl 2xl:text-6xl p-2 rounded-lg text-[#f79824] drop-shadow-md drop-shadow-[#FF0066] z-20 text-stroke">
        Admin Login
      </h2>
      {message && <p className="text-green-600 mb-2">{message}</p>}
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <form onSubmit={handleLogin} className='bg-white p-2 w-[90%] lg:w-[50%] xl:w-[30%] 2xl:w-[20%] rounded-lg'>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-2 p-2 border rounded font-montserrat my-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded font-montserrat my-1"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-[#f79824] text-white p-2 rounded font-montserrat">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
