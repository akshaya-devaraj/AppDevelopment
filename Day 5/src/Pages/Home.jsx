import React from 'react'
import { selectUser } from '../Redux/userSlice';
import { useSelector } from 'react-redux';


export default function Home() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username:'Guest';
  return (
    <div>
    <h1>{username}</h1>
    </div>
  )
}
