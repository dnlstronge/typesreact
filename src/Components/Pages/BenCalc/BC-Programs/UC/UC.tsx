
import React from "react";
import classes from "./UC.module.css"
import { BsFillCalculatorFill } from "react-icons/bs"


const UC = () => {
    return (
        <div className={classes.container}>
            <BsFillCalculatorFill className={classes.icon} color="lightgreen" size="4rem"/>
            <p className={classes.text}>Universal Credit Reckoner. Quick calculator for Universal Credit entitlement</p>
        </div>
    )
}

export default UC;