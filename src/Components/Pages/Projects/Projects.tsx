import React from "react";
import classes from "./Projects.module.css";
import Sections from "../one/UI/Sections";

const Projects = () => {
  return (
    <div className={classes.container}>
      <Sections title={"GroupTask"} />
      <Sections title={"BenCalc"} />
      <Sections title={"BenCalc API"} />
      <Sections title={"Foodie"} />
    </div>
  );
};
export default Projects;
