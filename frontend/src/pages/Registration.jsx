import React from 'react'

const Registration = () => {
  return (
    <div className='h-auto min-h-screen w-full bg-[#F5F5DC] flex flex-col justify-start items-center gap-4 py-4 px-4'>
    <h1 className='text-[12vw] 2xl:text-[2.5vw] font-switzal text-[#FFFFFF]  shadow-lg  bg-[#F44336] px-4' >Registration</h1>
    <form className='w-[96%] 2xl:w-[50%] h-auto  flex flex-col  justify-start items-center p-4'>
        <div  className='h-auto  w-full flex flex-col 2xl:flex-row justify-center items-center gap-2 2xl:gap-6'>
            <div className='w-full flex flex-col justify-center items-start'>
              <label className='w-full font-switzal text-3xl text-[#F44336]' htmlFor="">FirstName</label>
              <input type="text" className='text-3xl font-switzal bg-white text-[#2E8B57] w-full p-2 outline-1 outline-[#212121]/30' required />
            </div>
            <div className='w-full flex flex-col justify-center items-start'>
              <label className='w-full font-switzal text-3xl text-[#F44336]' htmlFor="">LastName</label>
              <input type="text" className='text-3xl font-switzal bg-white text-[#2E8B57] w-full p-2 outline-1 outline-[#212121]/30' required/>
            </div>
        </div> 
        <div  className='h-auto  w-full flex flex-col 2xl:flex-row justify-center items-center gap-2 2xl:gap-6'>
            <div className='w-full 2xl:w-[20%] flex flex-col justify-center items-start'>
              <label className='w-full font-switzal text-3xl text-[#F44336]' htmlFor="">Age</label>
              <input type="text" className='text-3xl font-switzal bg-white text-[#2E8B57] w-full p-2 outline-1 outline-[#212121]/30' required/>
            </div>
            <div className='w-full 2xl:w-[40%] flex flex-col justify-center items-start'>
              <label className='w-full font-switzal text-3xl text-[#F44336]' htmlFor="">Contact No</label>
              <input type="text" className='text-3xl font-switzal bg-white text-[#2E8B57] w-full p-2 outline-1 outline-[#212121]/30' required/>
            </div>
            <div className='w-full 2xl:w-[40%] flex flex-col justify-center items-start'>
              <label className='w-full font-switzal text-3xl text-[#F44336]' htmlFor="">Email</label>
              <input type="text" className='text-3xl font-switzal bg-white text-[#2E8B57] w-full p-2 outline-1 outline-[#212121]/30' required/>
            </div>
        </div> 
        <div  className='h-auto  w-full flex flex-col 2xl:flex-row justify-center items-center gap-2 2xl:gap-6'>
            <div className='w-full  flex flex-col justify-center items-start'>
              <label className='w-full font-switzal text-3xl text-[#F44336]' htmlFor="">Address</label>
              <textarea type="text" className='text-3xl font-switzal bg-white text-[#2E8B57] w-full p-2 outline-1 outline-[#212121]/30' required/>
            </div>
        </div>
        <div  className='h-auto  w-full flex flex-col 2xl:flex-row justify-center items-center gap-2 2xl:gap-6'>
            <div className='w-full flex flex-col justify-center items-start'>
              <label className='w-full font-switzal text-3xl text-[#F44336]' htmlFor="">Program</label>
              <select type="text" className='text-3xl font-switzal bg-white text-[#2E8B57] w-full p-2 outline-1 outline-[#212121]/30'>
                <option value=""></option>
                <option>1</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </div>
            <div className='w-full flex flex-col justify-center items-start'>
              <label className='w-full font-switzal text-3xl text-[#F44336]' htmlFor="">Parent Contact No.</label>
              <input type="text" className='text-3xl font-switzal bg-white text-[#2E8B57] w-full p-2 outline-1 outline-[#212121]/30' required/>
            </div>
        </div>
        <div  className='h-auto  w-full flex flex-col 2xl:flex-row justify-center items-center gap-2 2xl:gap-6 mt-4'>
            <div className='w-full  flex flex-col justify-center items-start'>
              <button type='submit' className='w-full py-2 font-montserrat text-2xl bg-[#F44336] xl:hover:bg-[#2E8B57] text-white'>Continue Payment</button>
            </div>
        </div>
    </form>
</div>
  )
}

export default Registration