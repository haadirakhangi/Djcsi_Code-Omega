import React from 'react'
import web from '../assets/web.png'
import mobile from '../assets/mobile-app.png'
import loc from '../assets/placeholder.png'
import lap from '../assets/secure-payment.png'

const First = () => {
    return (
        <div>
            <div className='flex mt-4'>
                <div className='w-56 h-44 ml-12 mt-4  rounded-2xl  drop-shadow-lg border-2 bg-sky-200'>
                    <h1 className=' text-sm mt-4 ml-12 mb-3'><strong>Block Apps & Sites</strong></h1>
                    <img src={web} className='w-16 h-16 rounded-xl drop-shadow-lg ml-20' />
                    <p className='text-sm ml-16 text-gray-500 absolute mt-4'>2 Web | 4 Apps</p>
                </div>

                <div className='w-56 h-44 ml-7 mt-4 rounded-2xl relative drop-shadow-lg bg-sky-200'>
                    <h1 className='absolute text-md mt-3 m-9 ml-20'><strong>App Limit</strong></h1>
                    <img src={mobile} className='w-20 h-20 mt-12 rounded-xl drop-shadow-lg ml-20' />
                    <p className='text-sm ml-12 text-gray-500 ml-24 absolute mt-4'>2 Apps</p>
                </div>
            </div>

            <div className='flex'>
                <div className='w-56 h-44 ml-12 mt-4 rounded-2xl drop-shadow-lg bg-sky-200'>
                    <h1 className='text-md mt-2 mb-4 ml-20'><strong>Geofences</strong></h1>
                    <img src={loc} className='w-20 h-20 rounded-xl drop-shadow-lg ml-20' />
                    <p className='text-sm ml-20 text-black text-gray-500  mt-4'>12 Location</p>
                </div>

                <div className='w-56 h-44 ml-7 mt-4 rounded-2xl  drop-shadow-lg bg-sky-200'>
                    <h1 className=' text-md mt-3 ml-16 '><strong>Device Protection</strong></h1>
                    <img src={lap} className='w-20 h-20 rounded-xl drop-shadow-lg ml-20' />
                    <p className='text-sm ml-12 text-black ml-24 mt-5'>4 Apps</p>
                </div>
            </div>
        </div>
    )
}

export default First