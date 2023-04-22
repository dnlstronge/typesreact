import React from "react";
import classes from "BenCalcLoader.module.css";
import { motion } from "framer-motion";

const BenCalc = () => {
  /* Local state */

  /* Handlers */

  return (
    <motion.div
      className={classes.container}
      initial={{ width: 0, background: "black" }}
      animate={{ width: "100%", background: "black" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <nav className={classes.navbar}>
        <button className={classes.navbtn}>Programs</button>
        <button className={classes.navbtn}>Resources</button>
        <button className={classes.navbtn}>Info</button>
      </nav>
      <section className={classes.section}></section>
      {/* components for each section to follow */}
    </motion.div>
  );
};

export default BenCalc;
