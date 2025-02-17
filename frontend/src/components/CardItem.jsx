import React from 'react'
import { NavLink } from 'react-router-dom'

const CardItem = (props) => {
  return (
    <li className=''>
        <NavLink>
            <figure className='border-2 rounded-2xl box-border h-72 w-72'>
                <div className='border border-b-2 box-border h-48 rounded-xl'>
                    <img src={props.src} alt='Destination image' className='rounded-xl w-full h-full'/>
                </div>
                <h2 className=''> {props.text}</h2>
            </figure>
        </NavLink>
    </li>
  )
}

export default CardItem