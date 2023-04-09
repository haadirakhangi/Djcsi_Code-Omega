import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './Components/Login';
import Signin from './Components/Signin';
import Start from './Components/Start';
import ParentalLock from './Components/ParentalLock';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Table from './Components/Table';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route exact path='/' element={< Start />}></Route>
        <Route exact path='/login' element={< Login />}></Route>
        <Route exact path='/signin' element={< Signin />}></Route>
        <Route exact path='/app' element={< App />}></Route>
        <Route exact path='/parent' element={< ParentalLock />}></Route>
        <Route exact path='/table' element={< Table />}></Route>
      </Routes>
    </Router>
    {/*<App />*/}

  </React.StrictMode>
);