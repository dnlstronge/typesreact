import React from "react";
import classes from "./Home.module.css";
import { useState } from "react"
import { easeIn, motion } from "framer-motion";
import Contact from "./Contact";
import homeContent from "../../../Content/Home/homeContent";
import HomeContent from "./HomeContent";

const Home = () => {

const [showAbout, setShowAbout] = useState(false)
//const [showContact, setShowContact] = useState(false)

  /* Handlers  */

  const showAboutHandler = () => {
   // setShowContact(false)
    setShowAbout(!showAbout)
    const element = document.getElementById("focusdiv")
    element?.scrollIntoView()
  }


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
        <button onClick={() => {}} className={classes.aboutbtn}>Contact</button> </div>
     

        <HomeContent showAbout={showAbout} />
        <div id="focusdiv"></div>
     
      
      {/* add skills & tech */}
 
    </motion.div>
  );
};

export default Home;
