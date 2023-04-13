import React from "react";
import "./hero.css";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import main from "../../assets/sujit.png";
import Skills from "../../components/skills/Skills";
const Hero = () => {
  return (
    <section className="myPortfolio__hero" id="home">
      <div className="container">
        <div className="hero__main">
          <div className="hero-text">
            <h1>Front-End React Developer 👋</h1>
            <p>
              Hi, I am Sujit Memane, a zealous Front-end React Developer hailing
              from Pune, India. 📍
            </p>
            <span>
              <a href="https://twitter.com/iAmSujitMemane" target="_blank">
                <AiFillTwitterCircle></AiFillTwitterCircle>
              </a>
              <a
                href="https://www.linkedin.com/in/sujit-memane-4704b01b0/"
                target="_blank"
              >
                <AiFillLinkedin></AiFillLinkedin>
              </a>
              <a href="https://github.com/sujitmemane" target="_blank">
                <AiFillGithub></AiFillGithub>
              </a>
            </span>
          </div>
          <div className="hero-image vibrate-1">
            <img src={main} alt="Main-Image" className="main-img" />
          </div>
        </div>
      </div>
      <Skills></Skills>
    </section>
  );
};

export default Hero;
