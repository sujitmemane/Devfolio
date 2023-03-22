import React from 'react'
import './blog-element.css'
const BlogElement = (props) => {

  return (
    <div className='blog-box'>
        <img src={props.img} className='blog-img'    />
        <p className='box-info'>{props.date}</p>
        <h1 className='box-heading'><a href={props.link} target="_blank">{props.heading}</a></h1>
        
      
    </div>
  )
}

export default BlogElement
