import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [registrations, setRegistrations] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fetchRegistrations = async () => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin-login');
      return;
    }

    try {
      const res = await axios.get('http://localhost:4000/api/admin/registrations', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRegistrations(res.data);
    } catch (err) {
      console.error(err); // Add this
      setError(err.response?.data?.message || 'Failed to fetch data');
      if (err.response?.status === 401 || err.response?.status === 403) {
        localStorage.removeItem('adminToken');
        navigate('/admin-login');
      }
    }
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin-login');
  };

  const total = registrations.filter(r => r.invoice?.invoiceid).length;
  const boys = registrations.filter(r => r.gender === 'boy' && r.invoice?.invoiceid).length;
  const girls = registrations.filter(r => r.gender === 'girl' && r.invoice?.invoiceid).length;

  return (
    <div className='bg-gradient-to-b from-[#283353] to-[#16003E] min-h-screen h-auto w-full flex flex-col justify-start items-center overflow-hidden p-4'>
      <div className='w-full flex justify-between items-center px-4'>
        <h2 className="font-gardion uppercase text-4xl tracking-wider text-[#f79824] drop-shadow-md">
          Dashboard
        </h2>
        <button onClick={handleLogout} className="text-white bg-red-600 px-4 py-2 rounded">Logout</button>
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className='w-full lg:w-[70%] h-auto flex flex-col lg:flex-row justify-center items-center gap-4 my-6'>
        <StatCard title="Total Registrations" count={total} />
        <StatCard title="Total Boys" count={boys} />
        <StatCard title="Total Girls" count={girls} />
      </div>

      <div className='w-full lg:w-[70%] overflow-x-auto'>
        <table className="min-w-full text-white text-left bg-[#16003E] border border-white/50 rounded-xl overflow-hidden">
        <thead>
  <tr className="bg-[#f79824] text-[#16003E] uppercase text-sm">
    <th className="p-2">Name</th>
    <th className="p-2">Email</th>
    <th className="p-2">Phone</th>
    <th className="p-2">Gender</th>
    <th className="p-2">Date</th>
    <th className="p-2">Payment Status</th> {/* 👈 Add this */}
  </tr>
</thead>

<tbody>
  {registrations.map((r, i) => (
    <tr key={i} className="border-t border-white/30">
      <td className="p-2">{r.camperName}</td>
      <td className="p-2">{r.email}</td>
      <td className="p-2">{r.phone}</td>
      <td className="p-2">{r.gender}</td>
      <td className="p-2">{new Date(r.createdAt).toLocaleDateString()}</td>
      <td className="p-2">
        {r.invoice?.invoiceid ? (
          <span className="text-green-400 font-bold">Success</span>
        ) : (
          <span className="text-yellow-400 font-bold">Pending</span>
        )}
      </td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </div>
  );
};

const StatCard = ({ title, count }) => (
  <div className='min-h-[20vh] w-full bg-[#16003E] border border-white/70 rounded-xl flex flex-col justify-center items-center font-montserrat text-white relative'>
    <h1 className='absolute top-4 left-4 text-lg'>{title}</h1>
    <h2 className='text-6xl'>{count}</h2>
  </div>
);

export default AdminDashboard;
