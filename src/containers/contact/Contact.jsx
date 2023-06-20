import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import ContactElement from "../../components/contact-element/ContactELement";
const contacts = [
  {
    logo: <FaLocationArrow></FaLocationArrow>,
    intro: "Location",
    desc: "Pune,India",
  },
  {
    logo: <MdEmail></MdEmail>,
    intro: "Mail",
    desc: "officialsujitmemane@gmail.com",
  },
  {
    logo: <BsFillTelephoneFill></BsFillTelephoneFill>,
    intro: "Phone",
    desc: "+91 9322400390",
  },
];
const Contact = () => {
  const contactElements = contacts.map((contact, index) => {
    return (
      <ContactElement
        key={index}
        logo={contact.logo}
        intro={contact.intro}
        desc={contact.desc}
      ></ContactElement>
    );
  });
  return (
    <section className="myPortfolio__about" id="contact">
      <div className="container">
        <div className="contact">
          <h3>CONTACT</h3>
          <h2>Feel free to reach out to me anytime, don't hesitate! 👇</h2>
          <div className="contact-box" id="contact">
            {contactElements}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
