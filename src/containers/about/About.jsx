import React from 'react'
import './about.css'
import about from '../../assets/about.avif'
const About = () => {
  return (
    <section className='myPortfolio__about special' id="about">
        <div className='container'>
            <div className='about-container'>
                <div className='about-image'>
                <img src={about} alt='A Teen is Coding on Laptop' className='about-img' />
                </div>
                <div className='about-text'>
                <h3>ABOUT ME</h3>
                <h2>A dedicated Front-end Developer
                 based in Pune,India 📍</h2>
                <p>
                    I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and Bootstrap. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
                </p>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default About
