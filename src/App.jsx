import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './containers/hero/Hero'
import About from './containers/about/About'
import Blog from './containers/blogs/Blog'
import Footer from './components/footer/Footer'
import Contact from './containers/contact/Contact'
import ProjectSec from './containers/project-sec/ProjectSec'

function App() {


  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero/>
      <About></About>
       <ProjectSec/>
      <Blog />
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
