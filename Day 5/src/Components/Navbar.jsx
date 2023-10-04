import React from 'react'
import logo from '../Assert/images/logo.png'
import '../Assert/css/Navbar.css'
import { useSelector} from 'react-redux'
import { selectUser } from '../Redux/userSlice'
import HomeIcon from '@mui/icons-material/Home';

export default function Navbar() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username:'Guest';
  return (
    <div className='navbar'>
    <div className='navbar-container'>
    <div className='icon'>
    <img src={logo} alt='Logo' height={40} width={50}/>
    <div className='text'>{username}</div>
    </div>
    </div>
    </div>
  )
}
