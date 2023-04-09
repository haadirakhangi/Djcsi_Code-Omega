import React from 'react'
import ChartBox from './ChartBox'
import Bargraph from './Bargraph';
import { useState } from "react";

const Graph = () => {
    const rows = [
        {
            id: 1,
            name: 'pycharm',
            time: 30,
            // userLost: 823,
        }, 
        {
            id: 2,
            name: 'explorer',
            time: 20,
            // userLost: 345,
        },
        {
            id: 3,
            name: 'opera',
            time: 50,
            // userLost: 555,
        },
        {
            id: 4,
            name: 'msedge',
            time: 25,
            // userLost: 4555,
        },
        {
            id: 5,
            name: 'explorer',
            time: 40,
            // userLost: 234,
        },
    ];
    const [userData, setUserData] = useState({
        labels: rows.map((data) => data.name),
        datasets: [
            {
                label: "Time    spent (in minutes)",
                data: rows.map((data) => data.time),
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
            <div style={{ width: 470, backgroundColor: 'white' }} className=' ml-16 flex items-center mt-16 rounded-xl h-10/12'>
                <Bargraph chartData={userData} />
            </div>
        </div>
    )
}

export default Graph