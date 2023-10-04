import React, { useState } from 'react'
import {useNavigate,Link} from 'react-router-dom';
import { Button } from '@mui/material';
import '../Assert/css/login.css';

export default function Login() {
  const nav=useNavigate("");
  const[emailid,setEmailid]= useState('');
  const[password,setPassword]=useState('');
  const[error,setError]=useState(false);
  
  
  const formHandler=(event)=>
  {
    event.preventDefault();
    if(emailid.length==0 || password.length==0)
    {
         setError(true);
    }
    if(emailid && password)
    {
      const loginObj={
        email:emailid,
        password:password,
      }
      alert(JSON.stringify(loginObj));
    }
   
  }
  useNavigate("/home");
return (
  <div className='body1'>
  <div className='pic'>
  <img src="https://images.luxuryescapes.com/q_auto:good,c_fill,g_auto,w_1920,ar_16:9/1f8s21ovu7dhkjclx67y.webp" height="735px" width="1525px"></img></div>
  <div className='rectangle'></div>
  <div className='login'>
  <b>LOGIN</b></div> 

  <div className='form'>
  <form onSubmit={formHandler}>
  
  Email Id: <input type="text100" value={emailid} placeholder="Email-id" onChange={e=>setEmailid(e.target.value)}/><br/>
  <div>
      <center>
      {error && emailid.length ===0?
      <label style={{color:'Red'}}>
        Email is required
      </label>:""}
      </center>  
      </div>

  <br/>
  Password: <input type="password300" value={password} placeholder="Password" minLength={8} maxLength={16} onChange={e=>setPassword(e.target.value)}/><br/>
  <div>
  <center>
  {error && password.length==0?
    <label style={{color:'Red'}}>
    Password is required
    </label>:""}
    </center>
  </div>
  <h5><Button type="submit" class='but'>LOGIN</Button></h5><br/>
  <h5><center>Don't have an account?</center></h5>
 <Link to="/signup"> <h5><Button type="submit" class='but'>SIGNUP</Button></h5></Link><br/>
  </form></div>
  </div>



  
)
}
