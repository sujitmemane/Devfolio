import React from "react";
import "./about.css";
import about from "../../assets/about.avif";
const About = () => {
  return (
    <section className="myPortfolio__about special" id="about">
      <div className="container">
        <div className="about-container">
          <div className="about-image">
            <img
              src={about}
              alt="A Teen is Coding on Laptop"
              className="about-img"
            />
          </div>
          <div className="about-text">
            <h3>ABOUT ME</h3>
            <h2>An ardent front-end developer domiciled in Pune, India.📍</h2>
            <p>
              My proficiencies encompass a wide-ranging and comprehensive set of
              skills in HTML, CSS, JavaScript, React, Redux, Next.js, Tailwind,
              and Bootstrap technologies. I possess exceptional skills in
              designing and maintaining responsive websites that provide a
              seamless user experience. I specialize in creating dynamic and
              engaging user interfaces by producing clean and optimized code
              while leveraging state-of-the-art development tools and
              techniques.I am a collaborative team player who excels in working
              alongside cross-functional teams to deliver exceptional web
              applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
