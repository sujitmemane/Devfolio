import React from "react";
import "./project-sec.css";
import img1 from "../../assets/pro1.gif";
import img2 from "../../assets/pro2.gif";
import img3 from "../../assets/pro3.webp";
import ProjectElement from "../../components/project-element/ProjectElement";
const projectsArray = [
  {
    id: Math.random().toString(),
    image: img1,
    heading: "Food Order Web App",
    description:
      "Order food online with ease through our food order web app. Browse through a variety of options and enjoy delicious meals in just a few clicks. Convenient and hassle-free!",
    tech: ["React ⚛️", "CSS 🎨", "Firebase 🔥"],
    demo: "https://foodr-food-order-app.vercel.app/",
    source: "https://github.com/sujitmemane/Foodr_Food_Order_App",
    change: false,
  },
  {
    id: Math.random().toString(),
    image: img2,
    heading: "GymAholic Gym App",
    description:
      "GymAholic 🏋️‍♂️ - the ultimate web app to help you find the perfect exercises to maintain your body or figure! 💪",
    tech: ["React ⚛️", "Taiwlind🎨", "Exercise DB API 🔥"],
    demo: "https://gym-aholic.vercel.app/",
    source: "https://github.com/sujitmemane/Gym_Aholic",
    change: true,
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
          <h2>Each project is an exclusive development endeavor 🧩</h2>
          <div className="all-projects">{project}</div>
        </div>
        <p className="info">More Coming ...</p>
      </div>
    </section>
  );
};

export default ProjectSec;
