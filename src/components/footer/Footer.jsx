import React from 'react'
import './footer.css'
import { AiFillTwitterCircle,AiFillLinkedin,AiFillGithub } from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className='myPortfolio__footer'>
        <div className='container1'>
            <div className='footer'>
                <h2>
                   © 2023 Pune India , Inc. All rights reserved 
                </h2>
                <span>
                    <a href="#" ><AiFillTwitterCircle></AiFillTwitterCircle></a>
                    <a href="#" ><AiFillLinkedin></AiFillLinkedin></a>
                    <a href="#" ><AiFillGithub></AiFillGithub></a>
                 </span>
            </div>
        </div>
      
    </footer>
  )
}
export default Footer
