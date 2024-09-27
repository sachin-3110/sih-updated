import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Contactus from '../components/Contactus'
import Services from '../components/Services'
import AdminSignup from '../components/AdminSignup';
import Login from '../components/Login'; // Import the LoginSignup component
import { Route, Routes } from 'react-router-dom'
import AdminPage from '../components/AdminPage'
import PreDisaster from '../components/PreDisaster'
import DuringDisaster from '../components/DuringDisaster'
import AfterDisaster from '../components/AfterDisaster'



function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Contactus" element={<Contactus/>}/>
        <Route path="/Login" element={<Login/>}/> {/* Add the LoginSignup route */}
        <Route path="/AdminSignup" element={<AdminSignup/>}/>
        <Route path="/AdminPage" element={<AdminPage/>}/>
        <Route path="/predisaster" element={<PreDisaster/>}/>
        <Route path="/postdisaster" element={<AfterDisaster/>}/>
        <Route path="/duedisaster" element={<DuringDisaster/>}/>

      </Routes>
    </div>
  )
}

export default Routing
