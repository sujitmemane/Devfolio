import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  function onClose() {
    setMenu(false);
  }
  function onOpen() {
    setMenu(true);
  }
  function closeMenu() {
    setMenu(false);
  }
  return (
    <div className="myPortfolio__navbar">
      <div className="myPortfolio__navbar-title">
        <h3>&lt;sujitmemane / &gt;</h3>
      </div>
      <div className="myPortfolio__navbar-links">
        <p className="myPortfolio__navbar-links-link">
          <a href="#" onClick={closeMenu}>
            Home
          </a>
        </p>
        <p className="myPortfolio__navbar-links-link">
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </p>
        <p className="myPortfolio__navbar-links-link">
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </p>
        <p className="myPortfolio__navbar-links-link">
          <a href="#blog" onClick={closeMenu}>
            Blogs
          </a>
        </p>
        <p className="myPortfolio__navbar-links-link">
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </p>
      </div>
      <div className="myPortfolio__navbar-menu">
        {menu ? (
          <RiCloseLine
            color="#2d2e32"
            fontWeight="bold"
            size={27}
            onClick={onClose}
          />
        ) : (
          <RiMenu3Line
            color="#2d2e32"
            fontWeight="bold"
            size={27}
            onClick={onOpen}
          />
        )}
        {menu && (
          <div className="myPortfolio__navbar-menu_links scale-up-center ">
            <p className="myPortfolio__navbar-links-link">
              <a href="#" onClick={closeMenu}>
                Home
              </a>
            </p>
            <p className="myPortfolio__navbar-links-link">
              <a href="#about" onClick={closeMenu}>
                About
              </a>
            </p>
            <p className="myPortfolio__navbar-links-link">
              <a href="#projects" onClick={closeMenu}>
                Projects
              </a>
            </p>
            <p className="myPortfolio__navbar-links-link">
              <a href="#blog" onClick={closeMenu}>
                Blogs
              </a>
            </p>
            <p className="myPortfolio__navbar-links-link">
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
