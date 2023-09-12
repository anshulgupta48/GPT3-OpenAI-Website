import React from 'react'
import "./header.scss"
import headerBanner from '../../assets/header-banner.png'
import users from '../../assets/users.png'

const Header = () => {
  return (
    <div id='header'>
      <div className="left-header">
        <h1>Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

        <div className="left-header-input">
          <input type="email" placeholder='Enter Your Email' />
          <button className="btn">Get Started</button>
        </div>

        <div className="left-header-users">
          <img src={users} alt="Users" />
          <span>1,600 people requested to access a visit in last 24 hours</span>
        </div>
      </div>

      <div className="right-header">
        <img src={headerBanner} alt="Header-Banner" />
      </div>
    </div>
  )
}

export default Header;