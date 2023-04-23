import React from "react";
import classes from "./Contact.module.css";

import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import {} from "react-icons";
import {} from "react-icons";

const Contact = () => {
  return (
    <motion.div
      className={classes.container}
      initial={{ width: 0, background: "black" }}
      animate={{ width: "100%", background: "black" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <h2>Get in touch...</h2>
      {/* email */}
      <div className={classes.contact}>
      <a href="mailto:dnlstronge@gmail.com" target="blank">
      <MdEmail
          
          size="3rem"
          color="red"
          style={{ marginTop: "2rem" }}
        />
     
      </a>
        
          
       
        <a href="mailto:dnlstronge@gmail.com" className={classes.contacttext}>
          dnlstronge@gmail.com
        </a>
      </div>
      {/* twitter */}
      <div className={classes.contact}>
       
         <a
          href="https://twitter.com/Stronge_D"
          target="blank"
    
        >
          <BsTwitter
          
          size="3rem"
          color="blue"
          style={{ marginTop: "2rem" }}
        />
        </a>
        <a
          href="https://twitter.com/Stronge_D"
          target="blank"
          className={classes.contacttext}
        >
          @Stronge_D
        </a>
      </div>
      {/* linkedin*/}
      <div className={classes.contact}>
        <a
          href="https://www.linkedin.com/in/daniel-stronge-65a764b7"
          target="blank"
        >
          <BsLinkedin
            href="https://www.linkedin.com/in/daniel-stronge-65a764b7"
            size="3rem"
            color="lightblue"
            style={{ marginTop: "2rem" }}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/daniel-stronge-65a764b7"
          target="blank"
          className={classes.contacttext}
        >
          LinkedIn
        </a>
      </div>

      {/* github*/}
      <div className={classes.contact}>
        <a href="https://github.com/dnlstronge" target="blank">
          <BsGithub size="3rem" color="green" style={{ marginTop: "2rem" }} />
        </a>

        <a
          href="https://github.com/dnlstronge"
          target="blank"
          className={classes.contacttext}
        >
          Github
        </a>
      </div>

      <section />
    </motion.div>
  );
};

export default Contact;
