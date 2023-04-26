
import React from "react";
import classes from "./PC.module.css"
import { GrNotes } from "react-icons/gr"


const PC = () => {
    return (
        <div className={classes.container}>
            <a href="https://pccalc-3dbcd.web.app/" target="blank">
            <GrNotes className={classes.icon} color="lightBlue" size="4rem"/>
            </a>
            <div className={classes.textsection}>
                <h5 className={classes.texthead}> CaseWrite</h5>
                <p className={classes.text}>  Casenote generation app, takes </p>
                </div>
        </div>
    )
}

export default PC;