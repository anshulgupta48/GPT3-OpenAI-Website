import React from 'react'
import './blogs.scss'
import blog1 from '../../assets/blog-1.png'
import blog2 from '../../assets/blog-2.png'
import blog3 from '../../assets/blog-3.png'

const Blogs = () => {
  return (
    <div id='blogs-container'>
      <div className="blogs-container-heading">
        <h1>A lot is happening, <br /> We are blogging about it.</h1>
      </div>

      <div className="blogs-container-content">
        <div className="blog-box">
          <div className="blog-box-image">
            <img src={blog1} alt="Blog" />
          </div>

          <div className="blog-box-text">
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
            <p>Read Full Article</p>
          </div>
        </div>

        <div className="blog-box">
          <div className="blog-box-image">
            <img src={blog2} alt="Blog" />
          </div>

          <div className="blog-box-text">
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
            <p>Read Full Article</p>
          </div>
        </div>

        <div className="blog-box">
          <div className="blog-box-image">
            <img src={blog3} alt="Blog" />
          </div>

          <div className="blog-box-text">
            <h3>GPT-3 and Open AI is the future. Let us exlore how it is?</h3>
            <p>Read Full Article</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs;