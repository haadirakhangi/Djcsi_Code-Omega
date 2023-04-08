import React from 'react'
import ChartBox from './ChartBox'
import Bargraph from './Bargraph';
import { useState } from "react";

const Graph = () => {
    const rows = [
        {
            id: 1,
            year: 2016,
            userGain: 80000,
            userLost: 823,
        },
        {
            id: 2,
            year: 2017,
            userGain: 45677,
            userLost: 345,
        },
        {
            id: 3,
            year: 2018,
            userGain: 78888,
            userLost: 555,
        },
        {
            id: 4,
            year: 2019,
            userGain: 90000,
            userLost: 4555,
        },
        {
            id: 5,
            year: 2020,
            userGain: 4300,
            userLost: 234,
        },
    ];
    const [userData, setUserData] = useState({
        labels: rows.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: rows.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });
    return (
        <div className='flex'>
            <div style={{ width: 550, backgroundColor: 'white' }} className=' mt-12 ml-80 flex items-center mt-16 rounded-xl h-10/12 mb-80'>
                <ChartBox chartData={userData} />
            </div>
            <div style={{ width: 550, backgroundColor: 'white' }} className=' mt-12 ml-12 flex items-center mt-16 rounded-xl h-10/12 mb-80'>
                <Bargraph chartData={userData} />
            </div>
        </div>
    )
}

export default Graph