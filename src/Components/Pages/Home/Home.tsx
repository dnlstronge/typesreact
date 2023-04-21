import React from "react";
import classes from "./Home.module.css"
import Navbar from "./Nav/Navbar";
import { AnimatePresence } from "framer-motion";

const Home = () => {
    return (
        <AnimatePresence>
        <div className={classes.container}>
            <Navbar />
        </div>
         </AnimatePresence>
    )
}

export default Home