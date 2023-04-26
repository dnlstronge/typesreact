
import React from "react";
import classes from "./CaseWrite.module.css"
import { GrNotes } from "react-icons/gr"


const CaseWrite= () => {
    return (
        <div className={classes.container}>
            <a href="https://pccalc-3dbcd.web.app/" target="blank">
            <GrNotes className={classes.icon} color="lightBlue" size="4rem"/>
            </a>
            <div className={classes.textsection}>
                <h5 className={classes.texthead}> CaseWrite (coming soon)</h5>
                <p className={classes.text}>  Casenote generation app, takes user input and returns a 
                generic and varied casenote. For use in case recording where a simple and concise case note is required</p>
                </div>
        </div>
    )
}

export default CaseWrite;