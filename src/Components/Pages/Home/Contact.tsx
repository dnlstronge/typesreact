import React from "react";
import classes from './Contact.module.css'

import { MdEmail } from "react-icons/md"
import { BsLinkedin } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import {} from "react-icons"
import {} from "react-icons"

const Contact = () => {
  return (
    <div className={classes.container}>
        <h2>Get in touch...</h2>
        {/* email */}
        <div className={classes.contact}>
                <MdEmail size="3rem"/>
             <p>dnlstronge@gmail.com</p>
        </div>
             {/* twitter */}
        <div className={classes.contact}>
                <BsTwitter size="3rem"/>
             <p>@Stronge_D</p>
        </div>
           {/* linkedin*/}
           <div className={classes.contact}>
                <BsLinkedin size="3rem"/>
             <p>https://www.linkedin.com/in/daniel-stronge-65a764b7</p>
        </div>
        
             {/* github*/}
        <div className={classes.contact}>
                <BsGithub size="3rem"/>
             <p>dnlstronge@gmail.com</p>
        </div>
        
        <section />
    </div>
  )
}

export default Contact;
