import { Button } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../Assert/css/Leftbar.css';
import { blue } from '@mui/material/colors';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import '../Assert/css/Leftbar.css'

export default function Leftbar() {
  return (
    <div className='left-bar'>
    <div className='left-bar-container'>

    <Button className='left-bar-btn'> <AccountCircleIcon sx={{color:blue[900]}} fontSize='large'/></Button>
    <div className='profile'>Profile</div>
    <Button className='left-bar-btn'> <TakeoutDiningIcon sx={{color:blue[900]}} fontSize='large'/></Button>
   <div className='food'>Food</div>
    <Button className='left-bar-btn'> <TravelExploreIcon sx={{color:blue[900]}} fontSize='large' /></Button>
    <div className='travel'>Travel</div>
    <Button className='left-bar-btn'> <ContactSupportIcon sx={{color:blue[900]}} fontSize='large'/></Button>
    <div className='contact'>Contact Us</div>
    </div>
    </div>
  )
}
