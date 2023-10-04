import { Button } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../Assert/css/Leftbar.css';
import { blue } from '@mui/material/colors';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import '../Assert/css/Leftbar.css'
import RoomIcon from '@mui/icons-material/Room';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
export default function Leftbar() {
  const dispatch=useDispatch();
  const nav=useNavigate("");
  const profile=()=>{
    nav("/profile")
  }
  const travel=()=>{
    nav("/travel")
  }
  const logout=()=>{
    dispatch(logout())
    nav("/")
  }
  const dashboard=()=>{
    nav("/dashboard")
  }
  return (
    <div className='left-bar'>
    <div className='left-bar-container'>
    <Button className='left-bar-btn' onClick={profile}> <AccountCircleIcon sx={{color:blue[900]}} fontSize='large'/></Button>
    <div className='profile'>Profile</div>
    <Button className='left-bar-btn' onClick={dashboard}> <SpaceDashboardIcon sx={{color:blue[900]}} fontSize='large'/></Button>
   <div className='dashboard'>Dashboard</div>
    <Button className='left-bar-btn' onClick={travel}> <TravelExploreIcon sx={{color:blue[900]}} fontSize='large' /></Button>
    <div className='travel'>Travel</div>
    <Button className='left-bar-btn'> <ContactSupportIcon sx={{color:blue[900]}} fontSize='large'/></Button>
    <div className='contact'>Contact Us</div>
    <Button className='left-bar-btn'><RoomIcon sx={{color:blue[900]}} fontSize='large'/></Button>
    <div className='location'>Location</div>
    <Button className='left-bar-btn' onClick={logout}><LogoutIcon sx={{color:blue[900]}} fontSize='large'/></Button>
    <div className='logout'>Logout</div>
    </div>
    </div>
  )
}
