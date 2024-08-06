import React from "react";
import ProjectItem from "../components/projectItem";
import { ProjectList } from "../helper/ProjectList";
import "../styles/project.css";

function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <ProjectItem id ={idx} name={project.name} image={project.image} />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;