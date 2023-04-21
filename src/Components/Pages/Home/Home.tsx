import React from "react";
import classes from "./Home.module.css";
import Navbar from "../Nav/Navbar";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className={classes.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    ></motion.div>
  );
};

export default Home;
