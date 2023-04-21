import React from "react";
import classes from "./Home.module.css";
import Navbar from "../Nav/Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    </motion.div>
  );
};

export default Home;
