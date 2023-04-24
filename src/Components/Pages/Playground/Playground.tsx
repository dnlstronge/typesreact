import React from 'react'
import classes from "./Playground.module.css"
import { motion } from 'framer-motion';

 function Playground() {
  return (
    <motion.div
    className={classes.container}
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth, transition: {duration: 0.1} }}
  >
      <header className={classes.headsection}>
      <h4 className={classes.heading}>Playground</h4>
      <nav className={classes.nav}></nav>
      <div className={classes.content}> 

      </div>
    
    </header>
  </motion.div>
  )
}

export default Playground;