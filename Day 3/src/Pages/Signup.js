import React, { useState } from 'react'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../Assert/css/Signup.css';

export default function Signup() {
 const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

    const formHandler=(e)=>
    {
        e.preventDefault();
    // Reset all previous error messages
    setNameError('');
    setPhoneError('');
    setEmailError('');
    setPasswordError('');

    let isValid = true;

    if (name.trim() === '') {
      setNameError('Name is required.');
      isValid = false;
    }

    if (phoneno.trim() === '' || !/^\d{10}$/.test(phoneno)) {
      setPhoneError('Phone number is invalid.');
      isValid = false;
    }
    if (email.trim() === '' || !/\S+@\S+\.\S+/.test(email)) {
        setEmailError('Email is invalid.');
        isValid = false;
      }
  
      if (password.trim() === '' || password.length < 8 || password.length > 16) {
        setPasswordError('Password must be between 8 and 16 characters.');
        isValid = false;
      }
  
      if (isValid) {
        const SignupObj = {
          name: name,
          phoneno: phoneno,
          email: email,
          password: password,
        };
        alert(JSON.stringify(SignupObj));
        navigate('/home');
    }   
    }
    return (
    <div className='body2'>
    <div className='pic1'>
    <img src="https://images.luxuryescapes.com/q_auto:good,c_fill,g_auto,w_1920,ar_16:9/xq2lppds5y4ekbt9l7t.webp" height="735px" width="1525px"></img></div>
    <div className='rectangle1'></div>
    <div className='signup'>
    <b>SIGNUP</b></div> 

    <div className='form'>
    <form onSubmit={formHandler}>

    Name: <input Type="text30" value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)}/><br/><br/>
    <div>
    <center>
    {nameError && name.length===0?
    <label style={{color:'Red'}}></label>:""}
    </center></div>
    Phone: <input type="text15" value={phoneno} placeholder="phone no" maxLength={10} onChange={(e)=>setPhoneno(e.target.value)}/><br/><br/>
    <div>
    <center>
    {phoneError && phoneno.length===0?
    <label style={{color:'Red'}}></label>:""}
    </center></div>
    Email Id: <input type="text100" value={email} placeholder="Email-id" onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
    <div>
    <center>
    {emailError && email.length===0?
    <label style={{color:'Red'}}></label>:""}
    </center></div>
    Password: <input type="password300" value={password} placeholder="Password" minLength={8} maxLength={16} onChange={(e)=>setPassword(e.target.value)}/><br/>
    <div>
    <center>
    {passwordError && password.length===0?
    <label style={{color:'Red'}}></label>:""}
    </center></div>
    <br/>
    <h5><Button type="submit" class='but'>REGISTER</Button></h5><br/>
    </form></div>
    </div>

  )
}
