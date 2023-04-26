import React, { useState } from "react";
import classes from "./Playground.module.css";
import { motion } from "framer-motion";
import playgroundContent from "../../../Content/Playground/playgroundContent";
import PGNav from "./PG-Nav/PGNav";
import Trivial from "./Triv/Trivial";


function Playground() {
  
  const [showApis, setShowApis] = useState(false);
  const [showTrivial, setShowTrivial] = useState(false);
  const [showMisc, setShowMisc] = useState(false);

  /* handlers */

  const showApisHandler = () => {
    setShowApis(true);
    setShowTrivial(false);
    setShowMisc(false);
  };

  const showTrivialHandler = () => {
    setShowApis(false);
    setShowTrivial(true);
    setShowMisc(false);
  };
  const showMiscHandler = () => {
    setShowApis(false);
    setShowTrivial(false);
    setShowMisc(true);
  };
  return (
    <motion.div
      className={classes.container}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, display: "none" ,transition: { duration: 0.1 } }}
    >
      <header className={classes.headsection}>
        <h4 className={classes.heading}>Playground</h4>
      </header>

      <motion.p 
      className={classes.mainpara}
        initial={{ width: "0%", background: "black", opacity: 0 }}
        animate={{ width: "100%", opacity: 1, background: "black",   }}
        exit={{ x: window.innerWidth, opacity: 1, transition: { duration: 0.3 } }}
      
      >
        </motion.p>
     
      <PGNav />
      <div className={classes.content}>

        <Trivial />
      </div>
    </motion.div>
  );
}

export default Playground;
