import React from "react";
import classes from "./BCHome.module.css"
import bencalcdata from "../../../../Content/BencalcData/bencalccontent";
import { motion } from "framer-motion"

const BCHome: React.FC<{showHome: boolean}> = (props) => {

    /*animation  */

    const showActive = props.showHome ? classes.containerActive : classes.container

    return (
        <>
        <motion.div className={showActive}
         initial={{ width: "0%", opacity: 0 , background: "black"}}
         animate={{ width: "100%", opacity: 1, background:"rgb(56, 56, 56)"  }}
         exit={{  opacity: 1, transition: { duration: 1.1 } }}
        >
            {props.showHome && 
            <section className={classes.welcome}>
               
                
                <h4 className={classes.updatesHead}>Welcome to Bencalc</h4>
                <p className={classes.text}>{bencalcdata.p1}</p>
                <h4 className={classes.updatesHead}>Updates...</h4>
                <p className={classes.updatesBox}> 
                    {bencalcdata.updates.map((update) => {
                        return (
                            <p>-{update}</p>
                        )
                    })}
                </p>
            </section>}
        </motion.div>
    
        </>
    )
}

export default BCHome;