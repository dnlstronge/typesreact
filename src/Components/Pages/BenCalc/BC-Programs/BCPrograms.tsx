import React from "react";
import classes from "./BCPrograms.module.css";
import UC from "./UC/UC";
import PC from "./PC/PC";
import { motion } from "framer-motion";

const BCPrograms: React.FC<{ showPrograms: boolean }> = (props) => {
  /*animation  */

  const showActive = props.showPrograms
    ? classes.containerActive
    : classes.container;

  return (
    <motion.div className={classes.containerActive}
        initial={{ width: "0%", opacity: 0 }}
        animate={{ width: "100%", opacity: 1, background:"rgb(56, 56, 56)"  }}
        exit={{  opacity: 1, transition: { duration: 1.1 } }}
    >
      {props.showPrograms && (
        <motion.section className={classes.programboxes}
        initial={{ height: "30%",  width: "90%", opacity: 1, background: "black" }}
        animate={{height: "55%", width: "100%", opacity: 1, background:"rgb(56, 56, 56)"  }}
        exit={{  opacity: 1, transition: { duration: 0.1 } }}
        >
          <UC />
        </motion.section>
      )}
      {props.showPrograms && (
        <motion.section
        className={classes.programboxes}
        initial={{ height: 0,  width: "90%", opacity: 1, background: "black" }}
        animate={{height: "45%%", width: "100%", opacity: 1.7, background:"rgb(56, 56, 56)"  }}
        exit={{  opacity: 0, transition: { duration: 1.1 } }}>
          <PC />
        </motion.section>
      )}
    </motion.div>
  );
};

export default BCPrograms;
