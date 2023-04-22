import React from "react";
import classes from "BenCalcLoader.module.css"

const BenCalc = () => {
    /* Local state */

    /* Handlers */

    return (
        <div className={classes.container}>
            <nav className={classes.navbar}>
                <button className={classes.navbtn}>Programs</button>
                <button className={classes.navbtn}>Resources</button>
                <button className={classes.navbtn}>Info</button>
            </nav>
            <section className={classes.section}></section>
            {/* components for each section to follow */}

        </div>
    )
}

export default BenCalc; 