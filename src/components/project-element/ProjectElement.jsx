import React from "react";
import { RiGithubFill } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./project-element.css";
const ProjectElement = (props) => {
  const stack = props.tech.map((lang, index) => {
    return (
      <p className="btn-tech" key={index}>
        {lang}
      </p>
    );
  });
 
  return (
    <div
      className={`${"project-element"} ${
        props.change === true ? "update" : ""
      }`}
    >
      <div className="project-left">
        <img src={props.image} />
      </div>
      <div className="project-right">
        <h3>{props.heading}</h3>
        <p>{props.description}</p>
        <div className="btn">{stack}</div>
        <span className="links">
          <a href={props.source} className="link-flex" target="_blank">
            Code <RiGithubFill size={27}></RiGithubFill>
          </a>
          <a href={props.demo} target="_blank">
            Demo <FaExternalLinkAlt></FaExternalLinkAlt>{" "}
          </a>
        </span>
      </div>
    </div>
  );
};

export default ProjectElement;
