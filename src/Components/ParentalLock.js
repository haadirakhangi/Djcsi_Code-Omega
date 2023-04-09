import React from 'react'
import Dashboard from '../Dashboard'
import First from './First'
import Second from './Second'
import DataTable from '../DataTable'
import Graph from '../Graph'

const ParentalLock = () => {
  return (
    <div className='flex'>
      <Dashboard />
      <div className='flex'>
        <div >
          <First />
          <Graph />
        </div>
        <Second />
      </div>
    </div>
  )
}

export default ParentalLock