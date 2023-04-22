import React from "react";
import classes from "./Home.module.css";

import { motion } from "framer-motion";

import homeContent from "../../../Content/Home/homeContent";

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
      <div className={classes.content}>
        <p className={classes.contentpara}>{homeContent.main}</p>
        <p className={classes.contentpara}>{homeContent.sup}</p>
        <h3 className={classes.techHead}>Tech</h3>
        <section className={classes.techused}>
          
          {homeContent.tech.map((tech, index) => {
            return(
              <div key={index}>{tech}</div>
             
            )
          })}
        </section>
      </div>
    </motion.div>
  );
};

export default Home;
