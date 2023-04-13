import React from "react";
import "./footer.css";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="myPortfolio__footer">
      <div className="container1">
        <div className="footer">
          <h2>© 2023 Pune India , Inc. All rights reserved</h2>
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
      </div>
    </footer>
  );
};
export default Footer;
