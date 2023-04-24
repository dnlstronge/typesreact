import React from "react";
import classes from "./PGNav.module.css"


const PGNav = () => {
    return (
        <nav className={classes.navbar}>
            <section className={classes.navbtns}>
                <button>Working With Apis</button>
                <button>Trivial Applications</button>
                <button>Misc</button>
            </section>
        </nav>
    )
}

export default PGNav;