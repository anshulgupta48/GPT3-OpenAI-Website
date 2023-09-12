import React from 'react'
import './banner.scss'

const Banner = () => {
  return (
    <div id='banner-container'>
      <div className="left-banner">
        <p>Request Early Access to Get Started</p>
        <h3>Register Today & start exploring the endless possibilities.</h3>
      </div>

      <div className="right-banner">
        <button className="btn">Get Started</button>
      </div>
    </div>
  )
}

export default Banner;