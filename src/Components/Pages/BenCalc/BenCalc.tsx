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

  /* Styling and animation */

  const homeActive = !home ? classes.navnbtn : classes.navbtnactive;
  const programsActive = !programs ? classes.navnbtn : classes.navbtnactive;
  const resourcesActive = !resources ? classes.navnbtn : classes.navbtnactive;
  const infoActive = !info ? classes.navnbtn : classes.navbtnactive;

  /* Handlers */

  return (
    <motion.div
      className={classes.container}
      initial={{ width: 0, background: "black" }}
      animate={{ width: "100%", background: "black" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Navbar
        showHome={setHome}
        showPrograms={setPrograms}
        showResources={setResources}
        showInfo={setInfo}
      />
      <section className={classes.section}></section>
      {/* components for each section to follow */}
    </motion.div>
  );
};

export default BenCalc;
