import React, { useState } from "react";
import classes from "./BenCalc.module.css";
import { motion } from "framer-motion";
import Navbar from "./Nav/Navbar";

const BenCalc = () => {
  /* Local state */

  const [home, setHome] = useState(true);
  const [programs, setPrograms] = useState(false);
  const [resources, setResources] = useState(false);
  const [info, setInfo] = useState(false);

 

  /* Handlers */
  const homeHandler = () => {
    console.log("handler fired")
    setHome(true)
    setPrograms(false)
    setResources(false)
    setInfo(false)
  } 
  const programsHandler = () => {
    console.log("handler fired")
    setHome(false)
    setPrograms(true)
    setResources(false)
    setInfo(false)
  }
  const resourcesHandler = () => {
    console.log("handler fired")
    setHome(false)
    setPrograms(false)
    setResources(true)
    setInfo(false)
  }
  const infoHandler = () => {
    console.log("handler fired")
    setHome(false)
    setPrograms(false)
    setResources(false)
    setInfo(true)
  }

  return (
    <motion.div
      className={classes.container}
      initial={{ width: 0, background: "black" }}
      animate={{ width: "100%", background: "black" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Navbar
        showHome={homeHandler}
        showPrograms={programsHandler}
        showResources={resourcesHandler}
        showInfo={infoHandler}
        home={home}
        programs={programs}
        resources={resources}
        info={info}
      />
      <section className={classes.section}></section>
      {/* components for each section to follow */}
    </motion.div>
  );
};

export default BenCalc;
