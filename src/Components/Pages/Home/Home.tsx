import React, { useContext } from "react";
import classes from "./Home.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import Contact from "./Contact";

import HomeContent from "./HomeContent";
import { GlobalContext } from "../../Context/Context";

const Home = () => {
  
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  /* Handlers  */

  const showAboutHandler = () => {
    setShowContact(false);
    setShowAbout(true);
    const element = document.getElementById("focusdiv")!;
    element.scrollIntoView();
  };

  const showContactHandler = () => {
    setShowAbout(false);
    setShowContact(true);
    const element = document.getElementById("focusdiv")!;
    element.scrollIntoView();
  };

  return (
    <motion.div
      className={classes.container}
      initial={{ width: 0, background: "black", opacity: 0 }}
      animate={{ width: "100%", background: "black", opacity: 1 }}
      exit={{ x: window.innerWidth, opacity: 0, transition: { duration: 0.3 } }}
    >
      <header className={classes.headsection}>
        <h4 className={classes.heading}>Home</h4>
      </header>
      
      <div className={classes.buttons}>
        <button onClick={showAboutHandler} className={classes.aboutbtn}>
          About
        </button>
        <button onClick={showContactHandler} className={classes.aboutbtn}>
          Contact
        </button>
      </div>

      {showAbout && (
        <motion.div    initial={{ width: "100%", background: "black", opacity: 0 }}
        animate={{ width: "100%", opacity: 1, background: "black",   }}
        exit={{ x: window.innerWidth,  display: "none", opacity: 1, transition: { duration: 0.9 } }}>
          <HomeContent showAbout={showAbout} />
        </motion.div>
      )}
      {showContact && (
        <div>
          {" "}
          <Contact />
        </div>
      )}
      <div id="focusdiv"></div>

      {/* add skills & tech */}
    </motion.div>
  );
};

export default Home;
