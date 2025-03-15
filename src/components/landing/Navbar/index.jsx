import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavItem from './Navitem.jsx'
import './Navbar.scss'

const Navbar = ({ navItems }) => {
  const navigate = useNavigate()
  return (
    <header className='navheader' id="navbar">
      <img
        loading='lazy'
        src='logo/cses-light.png'
        className='logo'
        alt='Company logo'
        onClick={() => navigate('/')}
      />
      <nav className='navContainer'>
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            text={item}
          />
        ))}
        <div
          onClick={() => navigate('/gallery')}
          className='navItem'
        >
          GALLERY
        </div>
        <div
          // onClick={() => navigate('/users/dashboard')}
          onClick={() => navigate('/login')}
          className='navItem'
        >
          LOGIN +
        </div>
      </nav>
    </header>
  )
}

export default Navbar
