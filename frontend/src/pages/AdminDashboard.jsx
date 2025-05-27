import React from 'react'

const AdminDashboard = () => {


    const token = localStorage.getItem('adminToken');
    
    if (!token) {
      navigate('/admin-login');
      return;
    }

  return (
    <div className='bg-gradient-to-b from-[#283353] via-[#283353] to-[#16003E] min-h-screen h-auto w-full flex flex-col justify-center items-center overflow-hidden'>AdminDashboard</div>
  )
}

export default AdminDashboard