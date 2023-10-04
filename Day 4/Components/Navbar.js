import React from 'react'
import logo from '../Assert/images/logo.png'
import '../Assert/css/Navbar.css'
export default function Navbar() {
  return (
    <div className='navbar'>
    <div className='navbar-container'>
    <div className='icon'>
    <img src={logo} alt='Logo' height={40} width={50}/>
    <div className='text'>Login</div>
    </div>
    </div>
    </div>
  )
}
