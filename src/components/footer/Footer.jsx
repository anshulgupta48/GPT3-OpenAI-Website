import React from 'react'
import './footer.scss'
import logo from '../../assets/logo.svg'
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div id='footer'>
      <div className="footer-navigations">
        <div className="footer-navigation-box">
          <img src={logo} alt="Logo" />
          <p>GPT3 is a AI Tool Which is Developed by Open AI Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt provident nesciunt consectetur!</p>
        </div>

        <div className="footer-navigation-box">
          <h3>Useful Links</h3>
          <a href="#header">Home</a>
          <a href="#features-container">Open AI</a>
          <a href="#possibility-container">Case Studies</a>
          <a href="#blogs-container">Library</a>
          <a href='#header'>Contact Us</a>
        </div>

        <div className="footer-navigation-box">
          <h3>Community</h3>
          <a href="#header">Help Center</a>
          <a href="#features-container">Suggestions</a>
          <a href="#possibility-container">Blogs</a>
          <a href="#blogs-container">Newsletter</a>
          <a href='#header'>Privacy Policy</a>
        </div>

        <div className="footer-navigation-box">
          <h3>Get in Touch</h3>

          <div className="footer-box-contact">
            <FaLocationDot className='icon' />
            <p>Moonshine St. 14/05 Light City, London, United Kingdom</p>
          </div>

          <div className="footer-box-contact">
            <BsTelephoneFill className='icon' />
            <p>+91 9926263736</p>
          </div>

          <div className="footer-box-contact">
            <MdEmail className='icon' />
            <p>anshulgupta4905@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="footer-info">
        <p>Copyright &copy; 2023 GPT3 || All Rights Reserved</p>
        <p>Design & Developed by Anshul Gupta</p>
      </div>
    </div>
  )
}

export default Footer;