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
          initial={{ width: "80%", height: 0, background: "black", color: "black", opacity: 0 }}
          animate={{ width: "80%", height: "20%", background: "black", color: "white", opacity: 1 }}
          exit={{ y: window.outerHeight, transition: { duration: 4 } }}
        >
          {homeContent.main}<br></br>{homeContent.sup}
        </motion.div>
      )}
      {showAbout && 
      < motion.div
       initial={{ width: 0, background: "black", }}
       animate={{ width: "90%", background: "black", marginLeft:"4rem" }}
       exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
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
