import React from "react";
import classes from "./PGNav.module.css"


const PGNav = () => {
    return (
        <nav className={classes.navbar}>
            <section className={classes.navbtns}>
                <button className={classes.navbtn}>Working With Apis</button>
                <button className={classes.navbtn}>Trivial Applications</button>
                <button className={classes.navbtn}>Misc</button>
            </section>
        </nav>
    )
}

export default PGNav;