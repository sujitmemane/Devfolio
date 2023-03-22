import React from 'react'
import './contact-element.css'
const ContactELement = (props) => {
  return (
    <div className='main-element'>
        <div className='contact-first'>
            <div className='round'>
              <p>{props.logo}</p> 
             
            </div>
        </div>
        <div className='contact-second'>
            <p className='intro'> <h3>{props.intro}</h3>  </p>
            <p className='desc'><a href="#">{props.desc}</a> </p>
        </div>
      
    </div>
  )
}

export default ContactELement
