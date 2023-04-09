import React from 'react'
import DataTable from './DataTable'
import ChartBox from './ChartBox'
import { useState } from "react";


const Lasttask = () => {
    return (
        <div className='mt-12 w-10/12 h-auto ml-20 bg-white rounded-xl'>
            <div className='flex'>
                <div>
                    <strong><h1 className='text-3xl mt-7 ml-20'>Last Tasks</h1></strong>
                    <p className='ml-16'><strong>117 total,</strong> proceed to resolve them</p>
                </div>
                <div>
                    <strong><h1 className='text-3xl mt-7 ml-96 '>94</h1></strong>
                    <p className='ml-96'><strong>Done</strong></p>
                </div>
                <div>
                    <strong><h1 className='text-3xl mt-7 ml-20 items-center'>34</h1></strong>
                    <p className='ml-16 mb-5'><strong>In progress</strong></p>
                </div>
            </div>
            <div className='m-4'>
                <DataTable />
            </div>




        </div>
        
    )
}

export default Lasttask