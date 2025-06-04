import React from 'react'
import Navbar from '../Components/Navbar'
import Menu from '../Components/Menu';

import pagenotfound from '../assets/404.png'

const PageNotFound = () => {
  return (
    <div className='h-full w-full flex flex-col justify-center items-center'>
        <Navbar/>
        <Menu/>
        <div className='min-h-[80vh] w-full flex flex-col justify-center items-center gap-4 bg-gradient-to-b  from-[#283353] via-[#16003E] to-[#16003E] p-4'>
            <h1 className='font-montserrat text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl text-[#f79824] drop-shadow-md drop-shadow-[#FF0066] text-stroke'>PAGE NOT FOUND</h1>
            <img src={pagenotfound} alt="" className='md:w-[50%] xl:w-[30%] 2xl:w-[30%]' />
            <h4 className='text-white font-montserrat'>The URL you requested doesn't exist. Please check for typos in the URL.</h4>
        </div>
    </div>
  )
}

export default PageNotFound;