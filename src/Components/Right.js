import React from 'react'
import { NavLink } from "react-router-dom";
const Right = () => {
  return (
    <div className='w-[30vw] bg-white sticky right-0'>
      <div className='flex'>
        <p className='items-center mt-8 ml-12 log text-5xl'><strong>KidSecure</strong></p>
      </div>
      <div className='w-5/6 mt-32 mb-4 ml-12 '>
        <p className='text-5xl text-purple-400 main'>Empowering parents to protect their children online</p>
      </div>
      <NavLink to="/login"><button className='w-28 h-8  mt-12 ml-9 rounded-3xl bg-sky-400 text-white text-md hover:bg-black hover:text-white'>Login</button></NavLink>
        <NavLink to="/signin"><button className=' w-28 h-8  mt-12 ml-2 rounded-3xl bg-sky-400 text-white text-md hover:bg-black hover:text-white'>Sign In</button></NavLink>

    </div>
  )
}

export default Right