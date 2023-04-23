import React from "react";
import classes from './Contact.module.css'

import { MdEmail } from "react-icons/md"
import { BsLinkedin } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { motion } from "framer-motion"
import {} from "react-icons"
import {} from "react-icons"

const Contact = () => {
  return (
    <motion.div className={classes.container}
     initial={{ width: 0, background: "black" }}
      animate={{ width: "100%", background: "black" }}
      exit={{ x: window.innerWidth, transition: {duration: 0.1} }}
    
    >
        <h2>Get in touch...</h2>
        {/* email */}
        <div className={classes.contact}>
                <MdEmail size="3rem" color="red"/>
             <p className={classes.contacttext}>dnlstronge@gmail.com</p>
        </div>
             {/* twitter */}
        <div className={classes.contact}>
                <BsTwitter size="3rem" color="blue"/>
             <p className={classes.contacttext}>@Stronge_D</p>
        </div>
           {/* linkedin*/}
           <div className={classes.contact}>
                <BsLinkedin size="3rem" color="lightblue"/>
             <p className={classes.contacttext}>https://www.linkedin.com/in/daniel-stronge-65a764b7</p>
        </div>
        
             {/* github*/}
        <div className={classes.contact}>
                <BsGithub size="3rem" color="green"/>
             <p className={classes.contacttext}>https://github.com/dnlstronge</p>
        </div>
        
        <section />
    </motion.div>
  )
}

export default Contact;
