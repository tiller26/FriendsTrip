import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Activities from './pages/Activities'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Organise from './pages/Organise'
import Register from './pages/Register'
import Trips from './pages/Trips'
import Notifications from './pages/Notifications'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='px-4'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/activities' element={<Activities/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/organise' element={<Organise/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/trips' element={<Trips/>} />
        <Route path='/notifications' element={<Notifications/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App