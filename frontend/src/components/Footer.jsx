import { NavLink } from "react-router-dom"

import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='border bg-gray-400 flex justify-center p-8'>
            <div className='flex flex-col sm:flex-row justify-between w-full max-w-6xl gap-10 '>

                <div className=''>
                    <p className='font-bold '>Support</p>
                    <ul className='space-y-2'>
                        <li><NavLink>Manage your trips</NavLink></li>
                        <li><NavLink>Contact Customer Service</NavLink></li>
                        <li><NavLink>Safety resource centre</NavLink></li>
                    </ul>
                </div>

                <div className=''>
                    <p className='font-bold '>Terms and settings</p>
                    <ul className='space-y-2'>
                        <li><NavLink>Privacy & cookies</NavLink></li>
                        <li><NavLink>Terms and conditions</NavLink></li>
                        <li><NavLink>Modern Slavery Statement</NavLink></li>
                        <li><NavLink>Human Rights Statement</NavLink></li>
                    </ul>
                </div>
                 
                <div className=''>
                    <p className='font-bold '>Partners</p>
                    <ul className='space-y-2'>
                        <li><NavLink>Extranet login</NavLink></li>
                        <li><NavLink>Partner help</NavLink></li>
                        <li><NavLink>Become an affiliate</NavLink></li>
                    </ul>
                </div>

                <div className=''>
                    <p className='font-bold '>About</p>
                    <ul className='space-y-2'>
                        <li><NavLink>About Trip.com</NavLink></li>
                        <li><NavLink>How we work</NavLink></li>
                        <li><NavLink>Careers</NavLink></li>
                        <li><NavLink>Sustainability</NavLink></li>
                    </ul>
                </div>

            </div>
            

        </div>
    </div>
  )
}

export default Footer