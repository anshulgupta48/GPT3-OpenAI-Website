import React from 'react'
import './possibility.scss'
import possibility from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div id='possibility-container'>
      <div className="left-possibility">
        <img src={possibility} alt="Possibility" />
      </div>

      <div className="right-possibility">
        <h4>Request Early Access to Get Started</h4>
        <h1>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <span>Request Early Access to Get Started</span>
        <button className="btn">Get Early Access</button>
      </div>
    </div>
  )
}

export default Possibility;