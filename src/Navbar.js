import React from 'react'
import search from './assets/search.png'
import { useState } from "react";
import cards from './assets/cards.svg'

const Navbar = ({setToggle}) => {
    const [date, setDate] = useState("");
    const handleChange = (event) => {
        setDate(event.target.value);
    }
    return (
        <div className='w-[1100px] h-24 ml-80 flex items-center bg-white mt-4 rounded-xl '>
            <div className='flex w-96 h-12 bg-gray-100 items-center rounded-xl ml-12'>
                <input type='text' className='w-80 h-12 bg-gray-100 rounded-xl ml-1' placeholder='  search here..' />
                <img src={search} className='w-8 h-8'/>
            </div>
            <div className='ml-12'>
                <input type="date" id="date" name="date" value={date} onChange={handleChange} className='text-gray-400' />
            </div>
            <div className='ml-64 '>
                <label className='switch'>
                    <input type='checkbox' onChange={(e)=>setToggle(e.target.checked)}/>
                    <span className='slider bg-gray-200 rounded-3xl text-white' />
                </label>
            </div>
        </div>
    )
}

export default Navbar