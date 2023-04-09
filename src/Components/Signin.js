import React from 'react'
import { useState } from 'react';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='bg-gray-100 h-screen w-screen flex' style={{width:'100%', alignItems:'center',justifyContent:'center',alignContent:'center'}}>
      <div style={{border:'2px solid #ef4444',height:'550px',width:'35vw',borderRadius:'25px',backgroundColor:'#0000'}}>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">        
        <p className='justify-content ml-44 log text-5xl' style={{paddingTop:'40px',transform: "translateX(-20px)",}}><strong>KidSecure</strong></p>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 mb-12">
          Register for your account
        </h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Signin