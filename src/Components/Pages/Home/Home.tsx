import React from "react";
import classes from "./Home.module.css";
import { useState } from "react"
import { easeIn, motion } from "framer-motion";

import homeContent from "../../../Content/Home/homeContent";
import HomeContent from "./HomeContent";

const Home = () => {

const [showAbout, setShowAbout] = useState(false)


  /* Handlers  */

  const showAboutHandler = () => {
    setShowAbout(!showAbout)
  }
  /* animations */
const abouttext = showAbout ? classes.showabouttext : classes.abouttext

  return (
    <motion.div
      className={classes.container}
      initial={{ width: 0, background: "black" }}
      animate={{ width: "100%", background: "black" }}
      exit={{ x: window.innerWidth, transition: {duration: 0.1} }}
    >   
        <header className={classes.headsection}>
        <h4 className={classes.heading}>Home</h4>
        
      
      </header>
      <div className={classes.buttons}> 
        <button onClick={showAboutHandler} className={classes.aboutbtn}>About</button>
        <button className={classes.aboutbtn}>Contact</button> </div>
     
    {showAbout && 
      <motion.div
        initial={{ width: "100%", height: 0, background: "black", color: "black" }}
        animate={{ width: "100%", height: "100%", color: "white"}}
        transition={{ease: easeIn, duration: "2s"}}
      >
        <HomeContent />
      </motion.div>}
      
      {/* add skills & tech */}
 
    </motion.div>
  );
};

export default Home;
