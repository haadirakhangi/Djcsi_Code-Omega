import React from 'react'
import parent from '../assets/parent.jpg'
import user from '../assets/user.jpg'
import Login from './Login'
import { NavLink } from "react-router-dom";
import Right from './Right';

const Start = () => {
    return (
        <div className='flex'>
            <div>
                <div className='relative'>
                    <div className='absolute'>
                        <NavLink to="/login"><button className=' w-28 h-8  mt-12 ml-12 rounded-3xl bg-white  text-black text-md hover:bg-sky-400 hover:text-white'>Login</button></NavLink>
                        <NavLink to="/signin"><button className=' w-28 h-8  mt-12 ml-4 rounded-3xl bg-white text-black text-md hover:bg-sky-400 hover:text-white'>Sign In</button></NavLink>
                        <h1 className='mt-44 text-5xl text-gray-200 ml-12 w-96'><strong>Get Assured ..!!</strong></h1>
                    </div>
                    <img src={parent} className='h-screen w-screen ' />
                </div>
                <div className='ml-80 mt-32 mb-24 ' data-aos="flip-left">
                    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
                        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
                        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
                        <div className="mx-auto max-w-2xl lg:max-w-4xl">
                            <p className='items-center mt-8 ml-80 log text-5xl'><strong>KidSecure</strong></p>
                            <figure className="mt-10">
                                <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9 italic">
                                    <p>“The Parental Lock App is a software application designed to provide parents with an easy-to-use solution for controlling and monitoring their children's device usage. The app will allow parents to set up customized settings that limit their children's access to certain websites, apps, and content that may be inappropriate or harmful.”</p>
                                </blockquote>
                                <figcaption className="mt-10">
                                    <img className="mx-auto h-10 w-10 rounded-full" src={user} alt="" />
                                    <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                        <div className="font-semibold text-gray-900">Riya Chaudhary</div>
                                        <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" className="fill-gray-900">
                                            <circle cx="1" cy="1" r="1" />
                                        </svg>
                                        <div className="text-gray-600">CEO of KidSecure</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </section>

                </div>


                

            </div>


            <Right />


           
        </div>
    )
}

export default Start