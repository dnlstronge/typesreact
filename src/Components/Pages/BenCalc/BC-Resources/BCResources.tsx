import React from "react";
import classes from "./BCResources.module.css"
import {motion } from "framer-motion"



const BCResources: React.FC<{showResources: boolean}> = (props) => {

    /*animation  */

    const showActive = props.showResources ? classes.containerActive : classes.container

    return (
        <>
        <motion.div className={classes.containerActive}
        
        
        >
            <section></section>
            <p className={classes.soonPara}>Coming soon...</p>
        </motion.div>
    
        </>
    )
}

export default BCResources;