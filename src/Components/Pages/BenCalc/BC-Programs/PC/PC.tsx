
import React from "react";
import classes from "./PC.module.css"
import { GrCalculator } from "react-icons/gr"


const PC = () => {
    return (
        <div className={classes.container}>
            <a href="https://pccalc-3dbcd.web.app/" target="blank">
            <GrCalculator className={classes.icon} color="lightgreen" size="4rem"/>
            </a>
            <div className={classes.textsection}>
                <h5 className={classes.texthead}> Pension Credit</h5>
                <p className={classes.text}>  Quick calculator for Pension Credit , allows
                users work out guaranteed pension credit & savings credit based on income, disablity and 
                household circumstances </p>
                </div>
        </div>
    )
}

export default PC;