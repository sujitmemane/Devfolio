import React from "react";
import "./project-sec.css";
import img1 from "../../assets/pro1.gif";
import img2 from "../../assets/pro2.webp";
import img3 from "../../assets/pro3.webp";
import ProjectElement from "../../components/project-element/ProjectElement";
const projectsArray = [
  {
    id: Math.random().toString(),
    image: img1,
    heading: "Food Order App",
    description:
      "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.",
    tech: ["React ⚛️", "CSS"],
    demo: "",
    source: "",
    change: false,
  },
];
const ProjectSec = () => {
  const project = projectsArray.map((pro) => {
    return (
      <ProjectElement
        key={pro.id}
        image={pro.image}
        heading={pro.heading}
        description={pro.description}
        tech={pro.tech}
        demo={pro.demo}
        source={pro.source}
        change={pro.change}
      ></ProjectElement>
    );
  });
  return (
    <section className="myPortfolio__projects" id="projects">
      <div className="container">
        <div className="projects">
          <h3>PORTFOLIO</h3>
          <h2>Each project is a unique piece of development 🧩</h2>
          <div className="all-projects">{project}</div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSec;
