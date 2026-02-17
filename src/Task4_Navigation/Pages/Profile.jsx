import { useContext } from 'react';
import { UserContext } from '../../App.jsx';
import React from 'react'

export default function Profile() {
    const { str1 } = useContext(UserContext);
  return (
    <div className='text-center text-5xl m-50'>
        <h1>This is my Profile Page</h1>
        <p className='text-3xl p-9'>{str1}</p>
    </div>
  )
}
