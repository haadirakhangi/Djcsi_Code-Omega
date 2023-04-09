import React from 'react'
import insta from '../assets/instagram.png'
import fac from '../assets/facebook.png'
import twit from '../assets/twitter.png'
import dis from '../assets/discord.png'
import what from '../assets/whatsapp.png'
import yout from '../assets/youtube.png'


const Second = () => {
  return (
    <div className='ml-32 mt-8 w-[450px] bg-red-100 h-[490px] drop-shadow-lg rounded-2xl'>
        <h1 className='mt-4 ml-5 code text-xl'>Select Websites to block</h1>
        <div>
            <div className='flex mt-5 w-[330px] ml-9 items-center h-12 border-2 bg-white drop-shadow-lg rounded-2xl'>
                <img src={insta} className='w-7 h-7 ml-6 ' />
                <p className='ml-5 mr-20 text-md'>Instagram</p>
                <label className='switch'>
                    <input type='checkbox'/>
                    <span className='slider bg-gray-200 rounded-3xl text-white'/>
                </label>  
            </div>

            <div className='flex mt-5 w-[330px] ml-9 items-center h-12 border-2 bg-white drop-shadow-lg rounded-2xl'>
                <img src={fac} className='w-7 h-7 ml-6 ' />
                <p className='ml-5 mr-20 text-md'>Facebook</p>
                <label className='switch'>
                    <input type='checkbox'/>
                    <span className='slider bg-gray-200 rounded-3xl text-white' />
                </label>  
            </div>

            <div className='flex mt-5 w-[330px] ml-9 items-center h-12 border-2 bg-white drop-shadow-lg rounded-2xl'>
                <img src={twit} className='w-7 h-7 ml-6 ' />
                <p className='ml-5 mr-20 text-md'>Twitter</p>
                <label className='switch'>
                    <input type='checkbox'/>
                    <span className='slider bg-gray-200 rounded-3xl text-white' style={{transform:'translateX(20px)'}}/>
                </label>  
            </div>

            <div className='flex mt-5 w-[330px] ml-9 items-center h-12 border-2 bg-white drop-shadow-lg rounded-2xl'>
                <img src={dis} className='w-7 h-7 ml-6 ' />
                <p className='ml-5 mr-20 text-md'>Discord</p>
                <label className='switch'>
                    <input type='checkbox'/>
                    <span className='slider bg-gray-200 rounded-3xl text-white' style={{transform:'translateX(15px)'}}/>
                </label>  
            </div>

            <div className='flex mt-5 w-[330px] ml-9 items-center h-12 border-2 bg-white drop-shadow-lg rounded-2xl'>
                <img src={what} className='w-7 h-7 ml-6 ' />
                <p className='ml-5 mr-20 text-md'>WhatsApp</p>
                <label className='switch'>
                    <input type='checkbox'/>
                    <span className='slider bg-gray-200 rounded-3xl text-white' style={{transform:'translateX(-5px)'}}/>
                </label>  
            </div>

            <div className='flex mt-5 w-[330px] ml-9 items-center h-12 border-2 bg-white drop-shadow-lg rounded-2xl'>
                <img src={yout} className='w-7 h-7 ml-6 ' />
                <p className='ml-5 mr-20 text-md'>Youtube</p>
                <label className='switch'>
                    <input type='checkbox'/>
                    <span className='slider bg-gray-200 rounded-3xl text-white' style={{transform:'translateX(10px)'}}/>
                </label>  
            </div>

        </div>
    </div>
  )
}

export default Second