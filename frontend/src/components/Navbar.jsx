import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import CancelIcon from '@mui/icons-material/Cancel';

const Navbar = () => {

  
  const [visible, setVisible] = useState(false);

  const UpdateVisibility = ()=>{
    setVisible((visible) => !visible);
  };

  
  return (
    <div className='flex sticky top-0 z-50 items-center justify-between py-5 px-5 text-4xl font-medium border-neutral-500 border-solid shadow rounded-lg bg-white'>
        <NavLink to='/'><p><span className='text-green-500 font-bold inline-block'>Trip<span className='text-yellow-500 font-bold inline-block w-4 h-4  rounded-sm'>.</span></span></p></NavLink>
        <ul className='hidden sm:flex gap-5 text-lg text-grey-700'> 
          <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>Home</p>
          </NavLink>

          <NavLink to='/organise' className=''>
            <p>Organise</p>
            
          </NavLink>

          <NavLink to='/trips' className='hidden'>
            <p>Trips</p>
            
          </NavLink>

          <NavLink to='/about' className=''>
            <p>About</p>
            
          </NavLink>

          <NavLink to='/contact' className=''>
            <p>Contact</p>
            
          </NavLink>

        </ul>

        <div className=' flex text-green-400'>
          <NavLink to='/login' className='flex flex-col items-center gap-1 relative'>
            <AccountCircleIcon fontSize='large' />
            <p className='absolute right-[-3px] top-[-4px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>TM</p>
          </NavLink>

          <NavLink to='/notifications' className='flex flex-col items-center gap-1 relative'>
            <CircleNotificationsIcon fontSize='large'/>
            <p className='absolute right-[-3px] bottom-[-4px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
          </NavLink>

          <div onClick={UpdateVisibility} className={`${visible ? 'hidden' : 'block'} flex flex-col sm:hidden cursor-pointer gap-2 relative`}>
            <MenuIcon fontSize='large'/>
          </div>
        </div>

        {/* The menubar menu */}
        <div className={`${visible ? 'block' : 'hidden'} sm:hidden cursor-pointer gap-5 text-xl text-grey-700 fixed top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-100'}`}>
        
          <div onClick={UpdateVisibility} className='sm:hidden cursor-pointer hover:bg-green-300 flex flex-col items-center border py-2'>
            <CancelIcon />
          </div>

          <ul onClick={UpdateVisibility} className=''> 
            <NavLink to='/'  className='flex flex-col hover:bg-green-300 items-center gap-1 border'>
              <p>Home</p>
      
            </NavLink>

            <NavLink to='/organise' className='flex flex-col hover:bg-green-300 items-center gap-1 border'>
              <p>Organise</p>
              
            </NavLink>

            <NavLink to='/trips' className='flex flex-col hover:bg-green-300 items-center gap-1 border'>
              <p>Trips</p>
              
            </NavLink>

            <NavLink to='/about' className='flex flex-col hover:bg-green-300 items-center gap-1 border'>
              <p>About</p>
              
            </NavLink>

            <NavLink to='/contact' className='flex flex-col hover:bg-green-300 items-center gap-1 border'>
              <p>Contact</p>
              
            </NavLink>

          </ul>

        </div>
        


        

        

    </div>
  )
}

export default Navbar