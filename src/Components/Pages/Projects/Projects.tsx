import React from "react";
import classes from "./Projects.module.css";
import Sections from "../one/UI/Sections";
import projectData from "../../../Data/projectData";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      className={classes.container}
      initial={{ width: 0, background: "black" }}
      animate={{ width: "100%", background: "black" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <header className={classes.headsection}>
        <h4 className={classes.heading}>Projects</h4>
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
    </motion.div>
  );
};
export default Projects;
