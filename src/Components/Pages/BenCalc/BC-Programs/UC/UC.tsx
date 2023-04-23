
import React from "react";
import classes from "./UC.module.css"
import { BsFillCalculatorFill } from "react-icons/bs"


const UC = () => {
    return (
        <div className={classes.container}>
            <a href="https://uccalc-11c98.web.app/" target="blank">
            <BsFillCalculatorFill className={classes.icon} color="lightgreen" size="4rem"/>
            </a>
            <div className={classes.textsection}>
                <h5 className={classes.texthead}> Universal Credit</h5>
                <p className={classes.text}>  Quick calculator for Universal Credit , allows
                users to input fincancial and household circumstances and return estimted 
                monthly entitlement. </p>
                </div>
        </div>
    )
}

export default UC;