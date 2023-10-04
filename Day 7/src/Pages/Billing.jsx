import React from 'react'
import Navbar from '../Components/Navbar'
import Leftbar from '../Components/Leftbar'
import Footer from '../Components/Footer'
import { Label } from '@mui/icons-material'
import  '../Assert/css/Billing.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../Redux/userSlice'

export default function Billing() {
  const [value, setValue] = React.useState();
  const nav=useNavigate();
  const handleChange = (event) => {
 
    setValue(event.target.value);
    
    
  };
  const payment=()=>{
    nav("/payment")
  }
  const back=()=>{
    nav("/home")
  }
  return (
   <>
   <Navbar/>
   <Leftbar/>
   <div className='bill'>
   <div className='bill-container'>
   <div className='billform'>
   <div className='billhead'>
   <h1>BILLING</h1>
   </div>
  
   <br/>
   <label>
   INVOICE NO : <input type="number" placeholder="invoice no"/>
   </label>
   <label>
   PAYMENT TYPE : 
   <select value={value} onChange={handleChange}>
   <option value="cash">cash</option>
   <option value="card">card</option>
   </select>
   </label>
   <br/>
   <label>AMOUNT : <input type="number" placeholder="amount"/>
   </label>
   <br/>
   <br/>
   <Button className='list1'>
   <div className='button1' onClick={payment}>
   PAYMENT
   </div>
   <br/>
   <div className='button2' onClick={back}>
   CANCEL
   </div>
   </Button>
  
   </div>
   </div>
   </div>
   <Footer/>
   </>
  )
}
