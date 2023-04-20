import React from "react";
import classes from "./Projects.module.css";
import Sections from "../one/UI/Sections";
import projectData from "../../../Data/projectData";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className={classes.container}>
      <header className={classes.headsection}>
        <h4 className={classes.heading}>Projects</h4>
        <Link to="/" className={classes.back}>
          back
        </Link>
      </header>

      {projectData.map((project) => {
        return (
          <Sections
            uid={project.uid}
            title={project.title}
            image={project.image}
            imageArray={project.imageArray}
            url={project.url}
            git={project.git}
            route={project.route}
            isLive={project.isLive}
            gif={project.gif}
            contentMain={project.contentMain}
            contentSup={project.contentSup}
            techUsed={project.techUsed}
          />
        );
      })}
    </div>
  );
};
export default Projects;
