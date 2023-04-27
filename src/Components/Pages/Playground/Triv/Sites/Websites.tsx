import React from "react";
import Trivial from "../Trivial";
import classes from "./Websites.module.css"

const Websites = () => {
    return (
        <>
        <div className={classes.container}>
            <button className={classes.btn}>1</button>
            <button className={classes.btn}>2</button>
            <button className={classes.btn}>3</button>
        </div>
        <section className={classes.applications}>
            <Trivial />
        </section>
        </>
    )
}

export default Websites;