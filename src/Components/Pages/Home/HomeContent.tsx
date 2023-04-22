import React from 'react'
import classes from "./HomeContent.module.css"
import homeContent from '../../../Content/Home/homeContent'
import { motion } from "framer-motion"


const HomeContent: React.FC<{showAbout: boolean}> = ({showAbout}) => {

    /* animations */
const abouttext = showAbout ? classes.showabouttext : classes.abouttext

  return (
    <div className={classes.content}>
        <h2 className={classes.headabout}>About...</h2>
     
        <motion.div className={classes.abouttext}
            initial={{ width: 0, background: "black" }}
            animate={{ width: "100%", background: "black" }}
            exit={{ x: window.innerWidth, transition: {duration: 0.1} }}
        >
         {showAbout &&
          <p>{homeContent.main}</p>}
          </motion.div>
      
    


        <h3 className={classes.techHead}>Tech</h3>
        <section className={classes.techused}>
          
          {homeContent.tech.map((tech, index) => {
            return(
              <div key={index}>{tech}</div>
             
            )
          })}
        </section>
      </div>
  )
}
export default HomeContent;
