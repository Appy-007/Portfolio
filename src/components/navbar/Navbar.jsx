import React from 'react'
import './navbar.css'
import Logo from '../../assets/logo.png'
import {Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="navbar">
    <img src={Logo} alt="logo" className='logo' />
    <div className="navmenu">
    <Link  activeClass='active' to='intro' spy={true} smooth={true} offset={100}  className="nav-menu-item">Home</Link>
      <Link  activeClass='active' to='about' spy={true} smooth={true} offset={100} className="nav-menu-item">About</Link>
      <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={200}  className="nav-menu-item">Projects</Link>
      <Link activeClass='active' to='contact' spy={true} smooth={true} offset={400}  className="nav-menu-item">Contact</Link>
    </div>
   </nav>
  )
}

export default Navbar