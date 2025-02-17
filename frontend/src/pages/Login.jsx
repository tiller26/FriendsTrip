import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {

  const onSubmitHandler = async (event) => {
    event.preventDefault(); // Prevents the page from loading when we submit the form.

  }


  return (
   
    <form className='flex flex-col items-center justify-between px-10 py-5 font-normal '>
        <div className='border p-16'>
          <div className='space-y-3'>

            <div className=''>
              <p className='text-2xl font-bold pb-8'>Login</p>
              <p>Need an account ?<NavLink to='/register' className='text-green-300'>Create an account</NavLink></p>
            </div>
            
            <div className=''>
              <p className='font-semibold'>Username or Email</p>
              <input type='text' placeholder='Enter your email...' className='block border w-full'></input>
            </div>
            
            <div>
              <p className='font-semibold'>Password</p>
              <input type='password' placeholder='Enter your password**' className='block border w-full'></input>
            </div>
            
            <div className=''> 
              <input type='checkbox' className='inline px-2'></input>
              <p className='inline px-2 font-semibold'>Keep me logged in </p>
            </div>

            <button className='flex border rounded-xl px-6 py-1  bg-green-300'>Login</button>

          </div>
        </div>
        
        
    </form>
    
  )
}

export default Login