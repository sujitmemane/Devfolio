import React from "react";
import "./contact-element.css";
const ContactELement = (props) => {
  return (
    <div className="main-element">
      <div className="contact-first">
        <div className="round">
          <p>{props.logo}</p>
        </div>
      </div>
      <div className="contact-second">
        <h3 className="intro">
          {" "}
          <p>{props.intro}</p>{" "}
        </h3>
        <p className="desc">
          <a href="#">{props.desc}</a>{" "}
        </p>
      </div>
    </div>
  );
};

export default ContactELement;
