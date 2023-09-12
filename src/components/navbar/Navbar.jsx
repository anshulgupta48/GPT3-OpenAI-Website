import React, { useState } from 'react'
import './navbar.scss'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div id='navbar'>
      <div className="left-navbar">
        <div className="left-navbar-icon">
          <img src={logo} alt="Logo" />
        </div>

        <div className="left-navbar-navigations">
          <ul>
            <li><a href="#header">Home</a></li>
            <li><a href="#whatgpt3-container">What is GPT3</a></li>
            <li><a href="#features-container">Open AI</a></li>
            <li><a href="#possibility-container">Case Studies</a></li>
            <li><a href="#blogs-container">Library</a></li>
          </ul>
        </div>
      </div>

      <div className="right-navbar">
        <a href="/">Sign In</a>
        <button className="btn">Sign Up</button>
      </div>

      <div id="navbar-menu">
        {toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />}

        {toggleMenu && (
          <div className="navbar-menu-container">
            <div className="navbar-menu-container-links">
              <ul>
                <li><a href="#header" onClick={() => setToggleMenu(false)}>Home</a></li>
                <li><a href="#whatgpt3-container" onClick={() => setToggleMenu(false)}>What is GPT3</a></li>
                <li><a href="#features-container" onClick={() => setToggleMenu(false)}>Open AI</a></li>
                <li><a href="#possibility-container" onClick={() => setToggleMenu(false)}>Case Studies</a></li>
                <li><a href="#blogs-container" onClick={() => setToggleMenu(false)}>Library</a></li>
              </ul>
            </div>

            <div className="navbar-menu-container-btn">
              <a href="/">Sign In</a>
              <button className="btn">Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;