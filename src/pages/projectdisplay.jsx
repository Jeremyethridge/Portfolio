import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helper/ProjectList";

import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <p>
        <b>
          Deployed Application:{" "}
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.name}
          </a>
        </b>
      </p>
    </div>
  );
}

export default ProjectDisplay;