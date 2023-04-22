import React from "react";
import classes from "./Home.module.css";

import { motion } from "framer-motion";

import homeContent from "../../../Content/Home/homeContent";
import HomeContent from "./HomeContent";

const Home = () => {
  return (
    <motion.div
      className={classes.container}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: {duration: 0.1} }}
    >
        <header className={classes.headsection}>
        <h4 className={classes.heading}>Home</h4>
      
      </header>
      <button className={classes.aboutbtn}>About</button>
      <HomeContent />
      {/* add skills & tech */}
 
    </motion.div>
  );
};

export default Home;
