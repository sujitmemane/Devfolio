import React from 'react'
import './hero.css'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import main from '../../assets/main-image.jpg'
import Skills from '../../components/skills/Skills'
const Hero = () => {
  return (
    <section className='myPortfolio__hero' id="home">
    <div className='container'>
        <div className='hero__main'>

       <div className='hero-text'>
       <h1>
        Front-End React Developer 👋
       </h1>
       <p>
       Hi, I'm Sujit Memane. A passionate Front-end React Developer based in Pune, India. 📍
       </p>
       <span>
        <a href="#" ><AiFillTwitterCircle></AiFillTwitterCircle></a>
         <a href="#" ><AiFillLinkedin></AiFillLinkedin></a>
          <a href="#" ><AiFillGithub></AiFillGithub></a>
       </span>
       </div>
       <div className='hero-image vibrate-1'>
        <img src={main} alt='Main-Image' className='main-img'/>
       </div>
        </div>
    </div>
    <Skills></Skills>
    </section>
  )
}

export default Hero
