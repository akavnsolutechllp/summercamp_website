import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const res = await axios.post('https://summercamp-website.onrender.com/api/admin/login', { email, password });
      setMessage('Login successful');
      localStorage.setItem('adminToken', res.data.token);
      navigate('/admin-dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-[#16003E] min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden'>
      <img src={logo} alt="" className='absolute bg-white rounded-full z-10 opacity-20' />
      <h2 className="font-montserrat uppercase text-3xl text-center tracking-wider md:text-7xl lg:text-4xl xl:text-5xl 2xl:text-6xl p-2 rounded-lg text-[#f79824] drop-shadow-md drop-shadow-[#FF0066] z-20 text-stroke">
        Admin Login
      </h2>

      {message && <p className="text-green-600 mb-2">{message}</p>}
      {error && <p className="text-red-600 mb-2">{error}</p>}
      {loading && <p className="text-yellow-400 mb-2">Logging in...</p>}

      <form onSubmit={handleLogin} className='bg-white p-2 w-[90%] lg:w-[50%] xl:w-[30%] 2xl:w-[20%] rounded-lg z-20'>
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
        <button
          type="submit"
          className={`w-full ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#f79824]'} text-white p-2 rounded font-montserrat`}
          disabled={loading}
        >
          {loading ? 'Please wait...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
