import React from 'react'
import './brands.scss'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'

const Brands = () => {
    return (
        <div id='brands-container'>
            <div className="brands-container-img">
                <img src={google} alt="Google" />
            </div>

            <div className="brands-container-img">
                <img src={slack} alt="Slack" />
            </div>

            <div className="brands-container-img">
                <img src={atlassian} alt="Atlassian" />
            </div>

            <div className="brands-container-img">
                <img src={dropbox} alt="Dropbox" />
            </div>

            <div className="brands-container-img">
                <img src={shopify} alt="Shopify" />
            </div>
        </div>
    )
}

export default Brands;