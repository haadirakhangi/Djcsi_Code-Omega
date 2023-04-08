import './App.css';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Lasttask from './Lasttask';
import Graph from './Graph';
import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='flex bg-gray-200'>
      <Dashboard />
      <div className='flex flex-col w-[90vw]'>
        <Navbar setToggle={setToggle}/>
        {
        toggle? 
        <Lasttask />
        :
        <Graph/>
      }
      </div>
    </div>
  );
}

export default App;
