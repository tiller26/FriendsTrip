import React from 'react'
import Hero3 from '../assets/Hero3.webp'
import { Button } from '@mui/material'
import Cards from './Cards'

const Home = () => {
  return (
    <div>
      <div className='flex items-center justify-center bg-cover bg-center min-h-screen' style={{ backgroundImage: `url(${Hero3})` }}>
        <div className='text-center justify-center ml-24'>
          <h1 className='font-bold text-4xl mb-6 text-white'>PLAN A FRIENDS TRIP</h1>
          <div className='block gap-2 space-x-4'>
            <button className=" border border-gray-300 rounded px-6 py-3 hover:bg-gray-200 transition mb-2">Organise</button>
            <button className=" border border-gray-300 rounded px-6 py-3 hover:bg-gray-200 transition">Explore</button>
          </div>
        </div>
        
      </div>
      <div className=''>
          <Cards/>
      </div>
      
    </div>
  )
}

export default Home