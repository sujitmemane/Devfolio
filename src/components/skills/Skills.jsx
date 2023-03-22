import React from 'react'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import js from '../../assets/js.svg'
import react from '../../assets/react.svg'
import tailwind from '../../assets/tailwind.svg'
import './skills.css'
const Skills = () => {
  return (
    <div className='myPortfolio__skills '>
        <div className='container'>
            <div className='skills'>
                <div className='first-box'>
                  <p>  Tech Stack </p>
                </div>
                <div className='second-box'>
                    <div className='circle'>
                        <img src={html} title='HTML5' className='skill-logo' />
                    </div>
                    <div className='circle'>
                        <img src={css} title='CSS3' className='skill-logo' />
                    </div>
                    <div className='circle'>
                        <img src={js} title='JS'  className='skill-logo' />
                    </div>
                    <div className='circle'>
                        <img src={react}  title='React' className='skill-logo' />
                    </div>
                    <div className='circle'> 
                        <img src={tailwind}  title='Tailwind' className='skill-logo' />
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
