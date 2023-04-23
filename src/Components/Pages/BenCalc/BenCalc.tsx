import React, { useState } from "react";
import classes from "./BenCalc.module.css";
import { motion } from "framer-motion";
import Navbar from "./BC-Nav/Navbar";
import BCHome from "./BC-Home/BCHome";
import BCPrograms from "./BC-Programs/BCPrograms";
import BCResources from "./BC-Resources/BCResources";
import BCInfo from "./BC-Info/BCInfo";

const BenCalc = () => {
  /* Local state */

  const [home, setHome] = useState(true);
  const [programs, setPrograms] = useState(false);
  const [resources, setResources] = useState(false);
  const [info, setInfo] = useState(false);

 

  /* Handlers */
  const homeHandler = () => {
    
    setHome(true)
    setPrograms(false)
    setResources(false)
    setInfo(false)
  } 
  const programsHandler = () => {
   
    setHome(false)
    setPrograms(true)
    setResources(false)
    setInfo(false)
  }
  const resourcesHandler = () => {
   
    setHome(false)
    setPrograms(false)
    setResources(true)
    setInfo(false)
  }
  const infoHandler = () => {
  
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
      <section className={classes.section}>
       
         <BCHome showHome={home} />
       
         <BCPrograms showPrograms={programs} />

         <BCResources showResources={resources} />

         <BCInfo showInfo={info}/>
      </section>
      {/* components for each section to follow */}
     
    </motion.div>
  );
};

export default BenCalc;
