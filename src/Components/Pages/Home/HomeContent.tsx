import React from "react";
import classes from "./HomeContent.module.css";
import homeContent from "../../../Content/Home/homeContent";
import { AnimatePresence, motion } from "framer-motion";

const HomeContent: React.FC<{ showAbout: boolean }> = ({ showAbout }) => {
 
 
  return (
    <div className={classes.content}>
      {showAbout && 
      <h2 className={classes.headabout}>About...</h2>}
      {showAbout && (
        <motion.div
          className={classes.abouttext}
        >
          {homeContent.main}<br></br>{homeContent.sup}
        </motion.div>
      )}
      {showAbout && 
      < motion.div
      >
      <h3 className={classes.techHead}>Tech...</h3>
      <section className={classes.techused}>
        {homeContent.tech.map((tech, index) => {
          return <div key={index}>{tech}</div>;
        })}
      </section>
      </motion.div> }
    </div>
  );
};
export default HomeContent;
